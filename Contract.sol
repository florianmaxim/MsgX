pragma solidity ^0.4.6;

contract MsgX008 {

    address private creator;
    
    string public message = "Hello Blockchain!";
    
    address public author;  
    
    uint public price = 1000000000000000;
    uint public step  = price;

    function setMessage(string newMessage) payable public returns(string){
        if(msg.value>=price){
            author  = msg.sender;
            price   = msg.value+step;
            return message = newMessage;
        }
        return "Amount too low.";
    }
    
    function kill() public{
        if(msg.sender == creator)
            selfdestruct(creator);
    }

}