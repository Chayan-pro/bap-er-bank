//handle deposite button Event
document.getElementById('deposit-btn').addEventListener('click',function(){
    //deposit input amount
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText =  depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    // console.log(depositAmount);

    //update deposit total
    const depositTotal = document.getElementById('deposit-total');
    // console.log(depositTotal.innerText);
    const currentDepositText  =  depositTotal.innerText;
    const currenttDeposit =  parseFloat(currentDepositText);
    const newDeposite =  currenttDeposit+ depositAmount;
    depositTotal.innerText = newDeposite;

    //Update acount Balance total

    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const previousBalanceTotal =  parseFloat(balanceText);
    const newTotalBalance = previousBalanceTotal + depositAmount;
    balanceTotal.innerText = newTotalBalance;



    //clear the deposit input field
    depositInput.value = '';

});

//handle with withdraw event
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);

    //update withdraw total 
    const withdrwTotal = document.getElementById('withdraw-total');
    const withdrawBalanceText = withdrwTotal.innerText;
    const withdrawFinal = parseFloat(withdrawBalanceText);
    const newWithdrawTotal = withdrawFinal + newWithdrawAmount;
    withdrwTotal.innerText =newWithdrawTotal;

    //update balace
    const balanceTotal =document.getElementById('balance-total');
    const previousBalaceText  = balanceTotal.innerText;
    const PreviousBalanceTotal = parseFloat(previousBalaceText);
    const NewBalanceTotal = PreviousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText =NewBalanceTotal;

    //Clear withdraw input
    withdrawInput.value = '';
})