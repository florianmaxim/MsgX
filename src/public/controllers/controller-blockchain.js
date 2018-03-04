import * as config from '../../../config.json';

const CONTRACT_ADDRESS = config.contractAddress;
const CONTRACT_ABI = config.contractABI;

let CONTRACT;

export default class BlockchainController {

    connect(){

        if (typeof web3 !== 'undefined') {

            web3 = new Web3(web3.currentProvider);

            CONTRACT = web3.eth.contract(CONTRACT_ABI).at(CONTRACT_ADDRESS);

        } else {

            web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
        }

    }


/*
 Message
*/

    getMessage(cb){

        CONTRACT.message.call((err, res) => {
            cb(res);
        });

    }

    getPrice(cb){

        CONTRACT.price.call((err, res) => {
            cb(res);
        });

    }

    getAuthor(cb){

        CONTRACT.author.call((err, res) => {
            cb(res);
        });

    }

    setMessage(message, price, cb){

        const data = {
            from: web3.eth.coinbase,
            to: CONTRACT_ADDRESS,
            value: price,
            gasPrice: web3.toWei(0.00000001,'ether')
        };

        CONTRACT.setMessage.sendTransaction(message, data, (err, res) => {

            console.log('data')

            console.log(data)
            

            console.log('transactionHash:'+res)

            const transactionHash = res;
            
            let filter = web3.eth.filter("latest");

            filter.watch((error, result) => {

                console.log('filter watching:'+result)

                web3.eth.getTransactionReceipt(transactionHash, (err, res) => {

                    console.log('getTransactionReceipt:'+res)

                    if(res){

                        console.log('transcation mined')
                        filter.stopWatching();
                        cb(message);
                        
                    }else{
                        console.log('transcation pending')
                    }

                });

            });
        });
    }


}