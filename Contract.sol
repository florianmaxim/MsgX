pragma solidity ^0.4.6;

contract MsgX021 {

    address public creator = msg.sender;
    
    uint public count = 0;
    
    string public message = "Hello Blockchain!";
    address public author;
    uint public date = now;
    uint public price = 0;
    
    uint public step  = 10000000000000;
    
    struct Message {
      uint count;
      string message;
      address author;
      uint price;
      uint date;
    }
    
    mapping (uint => Message) public messages;

    function setMessage(string newMessage) payable public returns(string){
        if(msg.value>=(price+step)){
            
            count++;
            author  = msg.sender;
            price   = msg.value;
            date     = now;
            
            messages[count] = Message({
                count: count,
                message: newMessage,
                author: msg.sender, 
                price: msg.value,
                date: now
            });
            
            return message = newMessage;
        }
        return "Amount too low.";
    }

    function reset() public{ 
        if(msg.sender == creator){
            count  = 0;
            author = 0;
            price  = 0;
            date   = now;
            message = "Hello blockchain!";
        }
    }
    
    function kill() public{
        if(msg.sender == creator)
            selfdestruct(creator);
    }

}