pragma solidity ^0.4.11;

contract SimpleBond 
{
    //STATE VARIABLES:
    address public Issuer;
    address public Lender;
    uint256 private Amount;
    uint256 private twentyPercent;
    uint private creationTime = now;
    
    //MAPPING:
    mapping(address => uint) balances;
    
    //EVENTS:
    event issuerPaid(string _msg, address user, uint amount);
    event lenderPaid(string _msg, address user, uint amount);
    event lenderWithdrewFail(string _msg, address user, uint amount);
    event lenderWithdrewSuccess(string _msg, address user, uint amount);
    event issuerRepaid(string _msg, address user, uint amount);
    event issuerWithdrew(string _msg, address user, uint amount);
     
    //MODIFIERS:
    modifier onlyIssuer()
    {
        if(msg.sender == Issuer)_;
        else throw;
    }
    
        modifier onlyLender()
    {
        if(msg.sender == Lender)_;
        else throw;
    }
    
    modifier notPaid() {
        
        if(now >= creationTime+10 seconds){
        balances[Lender] += twentyPercent;
        _;
        }
        else throw;
        
    }
    
    //PAYABLE FUNCTION:
    function Issuer20() payable
    {
        if(msg.sender !=Lender)
        {
        Issuer = msg.sender;
        twentyPercent = msg.value; 
        Amount = 5*(this.balance);
        issuerPaid('Issuer deposited 20% into the contract', Issuer, msg.value);
        }
        else throw;
    }
    
    function lenderBond() payable returns(uint256 IssuerBal)
    {
        if(msg.sender != Issuer)
        { 
            Lender = msg.sender;
            if(msg.value != Amount)throw;
            balances[Issuer] += msg.value;
            lenderPaid('Lender deposited loan into the contract', Lender, msg.value);
            return balances[Issuer];
        }
        else throw;
    }
    
    function issuerRepayment() payable onlyIssuer returns(uint256 lenderBal)
    {
        balances[Lender] += msg.value;
        issuerRepaid('Issuer repayed the loan', Issuer, msg.value);
        return balances[Lender];
    }
    
    //WITHDRAW FUNCTIONS:
    function issuerWithdraw(uint withdrawAmount) onlyIssuer public returns (uint issuerBal) {
            if(balances[Issuer] >= withdrawAmount) {
                balances[Issuer] -= withdrawAmount;

                Issuer.transfer(withdrawAmount);
                
                issuerWithdrew('Issuer withdrew money from the contract', Issuer, withdrawAmount);
            
            }
            return balances[Issuer];
    }
    
    //CALL IF ISSUER REPAYS THE DEBT
    function lenderWithdrawSuccess(uint withdrawAmount) onlyLender public returns (uint lenderBal) {
        if(balances[Lender] >= withdrawAmount) {
            
            balances[Lender] -= withdrawAmount;
            balances[Issuer] += twentyPercent;
            
            Lender.transfer(withdrawAmount);
            lenderWithdrewSuccess('Lender withdrew repayment. 20% unlocked for Issuer', Lender, withdrawAmount);
        }

        return balances[Lender];
    }
    
    //CALL IF THE ISSUER DOES NOT REPAY THE DEBT
    function lenderWithdrawFail(uint withdrawAmount) onlyLender notPaid public returns (uint256 lenderBal) {
        if(balances[Lender] >= withdrawAmount) {
            balances[Lender] -= withdrawAmount;
            
            Lender.transfer(withdrawAmount);
            lenderWithdrewFail('Issuer did not repay loan, therefore lender withdrew the 20%', Lender, withdrawAmount);
        }
        return balances[Lender];
    }
    
    
    //GETTERS:
    function getBalance() constant returns(uint256)
    {
        return this.balance;
    }
}
