
// Calculate button
document.getElementById('btn-calculate').addEventListener('click', function() {
    const perPlayerExpense = getInputFieldValueById('per-player-expense');

    const selectedPlayersArray = document.querySelectorAll('.card-body > ol > li');
    const totalSelectedPlayers = selectedPlayersArray.length

    const playerExpenseTotal = perPlayerExpense * totalSelectedPlayers;
    setTextElementValueById('player-expense-total', playerExpenseTotal);

    // console.log(typeof managerExpense, managerExpense);
});

// Calculate Total Button
document.getElementById('btn-calc-total').addEventListener('click', function() {
    console.log('calculate total btn clicked');
});