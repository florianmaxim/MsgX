import * as config from '../../../config.json';

import io from 'socket.io-client';

const CONTRACT_ADDRESS = config.contractAddress;
const CONTRACT_ABI = config.contractABI;

let CONTRACT;

export default class BlockchainController {

    connect(){

        this.connectionType = '';

        this.socket = io.connect();
            
        this.socket.on('connect', function(){
            console.log('Websocket: connected')
        });

        if (typeof web3 !== 'undefined') {

            this.connectionType = 'blockchain';

            web3 = new Web3(web3.currentProvider);

            CONTRACT = web3.eth.contract(CONTRACT_ABI).at(CONTRACT_ADDRESS);

        } else {

            this.connectionType = 'websocket';
   
        }

    }

/*
    Get network
*/

    getNetwork(cb){

        if(this.connectionType==='websocket'){

            this.socket.on('message', (message) => {
                return cb(message);
            });

        }else{

            web3.version.getNetwork((err, id) => {
                switch (id) {
                case "1":
                    cb('mainnet')
                    break
                case "2":
                    cb('morden')
                    break
                case "3":
                    cb('ropsten')
                    break
                default:
                    cb('unknown')
                }
            });

        }    
    }

/*
    Get connection type
*/

    getConnectionType(cb){
        cb(this.connectionType);
    }

/*
 Message
*/

    getMessage(cb){

        if(this.connectionType==='websocket'){

            this.socket.on('message', (message) => {
                return cb(message);
            });

        }else{
            
            CONTRACT.message.call((err, res) => {

                cb(res);
    
            }); 

        }

    }

    getPrice(cb){

        if(this.connectionType==='websocket'){

            this.socket.on('price', (price) => {
                return cb(price);
            });

        }else{

            CONTRACT.price.call((err, res) => {
                cb(res);
            });

        }

    }

    getStep(cb){

        if(this.connectionType==='websocket'){

            this.socket.on('step', (step) => {
                return cb(step);
            });

        }else{

            CONTRACT.step.call((err, res) => {
                cb(res);
            });

        }

    }

    getCount(cb){

        if(this.connectionType==='websocket'){

            this.socket.on('count', (count) => {
                return cb(count);
            });

        }else{

            CONTRACT.count.call((err, res) => {
                cb(res);
            });

        }

    }

    getAuthor(cb){
        
        if(this.connectionType==='websocket'){

            this.socket.on('author', (author) => {
                return cb(author);
            });

        }else{

            CONTRACT.author.call((err, res) => {
                cb(res);
            });
        
        }

    }

    getDate(cb){
        
        if(this.connectionType==='websocket'){

            this.socket.on('date', (author) => {
                return cb(author);
            });

        }else{

            CONTRACT.date.call((err, res) => {
                cb(res);
            });
        
        }

    }

/*
    Set new message
    Take message object{
        count: 0,
        message: '',
        price: 0,
        author: 0,
        date: 0,
        step: 0
    }

*/
    setMessage(message, cb){

        if(this.connectionType==='websocket'){

            /* this.socket.on('message', (message) => {
                return cb(message);
            }); */

        }else{

            const data = {
                from: web3.eth.coinbase,
                to: CONTRACT_ADDRESS,
                value: message.price,
                //gasPrice: web3.toWei(0.00000001,'ether')
            };

            CONTRACT.setMessage.sendTransaction(message.message, data, (err, res) => {

                //console.log('data')
                //console.log('transactionHash:'+res)

                const transactionHash = res;
                
                let filter = web3.eth.filter("latest");

                filter.watch((error, result) => {

                    //console.log('filter watching:'+result)

                    web3.eth.getTransactionReceipt(transactionHash, (err, res) => {

                        if(err) return cb(err);

                        //console.log('getTransactionReceipt:'+res)

                        if(res){

                            //console.log('Transcation mined')

                            //Also write msg server for non blockchain connections
                            this.socket.emit('setMessage', message);

                            
                            filter.stopWatching();
                            cb(message);
                            
                        }else{
                            
                            //console.log('Transcation pending')
                        }

                    });

                });

            });

        }    

    }


}