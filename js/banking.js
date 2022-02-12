function getInputValue(inputId,totalId, isAdd) {
    const input = document.getElementById(inputId);
    const amount = parseFloat(input.value);
    if(amount>0){
        const total = document.getElementById(totalId);
        const previousTotal =  parseFloat(total.innerText);
        const initialBalance = document.getElementById("balance-total");
        const previousBalanceTotal = parseFloat(initialBalance.innerText);
        // debugger;
        if (isAdd == true){
            totalBalance = previousBalanceTotal + amount;
        }
        else{
            if(amount<=previousBalanceTotal){
                totalBalance = previousBalanceTotal - amount;
            }
            else{
                return;
            }
        }

        total.innerText = previousTotal + amount;
        initialBalance.innerText = totalBalance;   
    }
    input.value="";
}


document.getElementById("deposit-button").addEventListener('click', function(){
    getInputValue("deposit-input", "deposit-total", true);

});


document.getElementById('withdraw-button').addEventListener('click', function(){
    getInputValue("withdraw-input", "withdraw-total", false);
});