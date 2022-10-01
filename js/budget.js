
// Calculate button
document.getElementById('btn-calculate').addEventListener('click', function() {
    // variables we need
    const perPlayerExpense = getInputFieldValueById('per-player-expense');

    const selectedPlayersArray = document.querySelectorAll('.card-body > ol > li');
    const totalSelectedPlayers = selectedPlayersArray.length

    // validation
    if (isNaN(perPlayerExpense)) {
        alert("Please enter an amount in number");
        return;
    }
    else if (perPlayerExpense < 0) {
        alert("Please enter a valid amount");
        return;
    }

    // calculating and setting the value to the text element
    const playerExpenseTotal = perPlayerExpense * totalSelectedPlayers;
    setTextElementValueById('player-expense-total', playerExpenseTotal);

    console.log(typeof totalSelectedPlayers, totalSelectedPlayers);
});

// Calculate Total Button
document.getElementById('btn-calc-total').addEventListener('click', function() {
    // variables we need
    const playerExpenseTotal = getTextElementValueById('player-expense-total');
    const managerExpense = getInputFieldValueById('manager-expense');
    const coachExpense = getInputFieldValueById('coach-expense');

    // validation
    if (isNaN(managerExpense) || isNaN(coachExpense)) {
        alert("Please enter an amount in number");
        return;
    }
    else if (managerExpense < 0 || coachExpense < 0) {
        alert("Please enter a valid amount");
        return;
    }

    // calculating and setting the value to the text element
    const totalExpense = playerExpenseTotal + managerExpense + coachExpense;
    setTextElementValueById('total-expense', totalExpense);
    // console.log(totalExpense, coachExpense);
});