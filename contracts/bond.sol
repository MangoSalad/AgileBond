pragma solidity ^0.4.0;
  
contract bond {
  function bond() {
    // constructor
  }
contract Issuer
{
    //STATE VARIABLES
    address public Issuer;
    uint256 public Amount;
    uint256 public Balance;
    address public Borrower;
    
    //EVENTS: will create a log in the block that is created from a setter
    event UserStatus(string _msg, address user,string _msg1, uint amount);
    
    //CONSTRUCTOR: this will be called as soon as the contract is executed **** Must name function same as contract to get the address***
    function Issuer()
    {
        Issuer = msg.sender;
    }
    
    
    //MODIFIERS:
    modifier OnlyIssuer
    {
        if(Issuer != msg.sender)throw;
        else _;
    }
    
    //allows money to be put into contract
    function Issuer20() payable
    {
        //This will log a message and the amount of money deposited ont he blockchain
        UserStatus('User: ',msg.sender,'has deposited 20%: ', msg.value);
        Balance = this.balance;
        Amount=5*(this.balance);
    }
    
    //GETTERS:
    function passAmount() constant returns (uint256)
    {
        return Amount;
    }
    
    function passIssuer() constant returns (address)
    {
        return Issuer;
    }
    
        function getBalance() constant returns(uint)
    {
        return this.balance;
    }
}

//CONTRACT:
contract Lender
{
    //STATE VARIABLES
    address public Lender;
    bool public _switch = false;
    
    uint Test;
    
    //CONSTRUCTOR:
    function Lender()
    {
        if (msg.sender != toBePassed.passIssuer()) Lender = msg.sender;
        else throw;
    }
    
    //MODIFIERS
    modifier OnlyIssuer
    {
        if(toBePassed.passIssuer() != msg.sender)throw;
        else _;
    }
    
    //PASS VARIABLES BETWEEN CONTRACTS: ***Must put address of Issuer Contract Here***
    Issuer toBePassed = Issuer(0xc00430870bd4d4bd891bf2424ae00277bd9a5f09);
    
    //VARIABLES BEING PASSED
    function passAmount() constant returns (uint)
    {
        return toBePassed.passAmount();
    }
    
    function passIssuer() constant returns (address)
    {
        return toBePassed.passIssuer();
    }
    
    //PAYABLE FUNCTION
    function LenderBond() payable
    {
        if(msg.value != (toBePassed.passAmount()))throw;
    }
    
    //GETTERS
    function getBalance() constant returns(uint)
    {
        return this.balance;
    }
    
    function withdrawFunds(uint Withdraw) OnlyIssuer
    {
        
        if(toBePassed.passIssuer().send(Withdraw))
        {
            _switch = true;
        }
       else
        {
            _switch = false;
 }
    }
  }
