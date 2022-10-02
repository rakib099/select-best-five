// Calculate button
document.getElementById('btn-calculate').addEventListener('click', function() {
    // Variables we need
    const perPlayerExpense = getInputFieldValueById('per-player-expense');

    const selectedPlayersArray = document.querySelectorAll('.card-body > ol > li');
    const totalSelectedPlayers = selectedPlayersArray.length

    // Input fields
    const playerExpenseField = document.getElementById('per-player-expense');

    // Validation
    if (totalSelectedPlayers < 1) {
        alert("Please select your players first");
        return;
    }
    else if (isNaN(perPlayerExpense)) {
        alert("Please enter an amount in number");
        playerExpenseField.value = "";  // clearing the field
        return;
    }
    else if (perPlayerExpense < 0) {
        alert("Please enter a valid amount");
        playerExpenseField.value = "";
        return;
    }

    // Calculating and setting the value to the text element
    const playerExpenseTotal = perPlayerExpense * totalSelectedPlayers;
    setTextElementValueById('player-expense-total', playerExpenseTotal);
});



// Calculate Total Button
document.getElementById('btn-calc-total').addEventListener('click', function() {
    // Variables we need
    const playerExpenseTotal = getTextElementValueById('player-expense-total');
    const managerExpense = getInputFieldValueById('manager-expense');
    const coachExpense = getInputFieldValueById('coach-expense');

    // Input fields
    const managerExpenseField = document.getElementById('manager-expense');
    const coachExpenseField = document.getElementById('coach-expense');

    // Validation
    if (isNaN(managerExpense) || isNaN(coachExpense)) {
        // Clearing the fields
        if (isNaN(managerExpense) && isNaN(coachExpense)) {
            managerExpenseField.value = "";
            coachExpenseField.value = "";
        }
        else if (isNaN(managerExpense)) {
            managerExpenseField.value = "";
        }
        else if (isNaN(coachExpense)) {
            coachExpenseField.value = "";
        }

        alert("Please enter the amounts in number and do not leave any field empty");
        return;
    }
    else if (managerExpense < 0 || coachExpense < 0) {
        // Clearing the fields
        if (managerExpense < 0 && coachExpense < 0) {
            managerExpenseField.value = "";
            coachExpenseField.value = "";
        }
        else if (managerExpense < 0) {
            managerExpenseField.value = "";
        }
        else if (coachExpense < 0) {
            coachExpenseField.value = "";
        }
        
        alert("Please enter a valid amount");
        return;
    }

    // Calculating and setting the value to the text element
    const totalExpense = playerExpenseTotal + managerExpense + coachExpense;
    setTextElementValueById('total-expense', totalExpense);
});