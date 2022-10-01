// Select Button
const selectButtons = document.getElementsByClassName('btn-select');
for (const button of selectButtons) {
    button.addEventListener('click', function() {
        // Selected Players OL Element
        const selectedPlayersOl = document.getElementById('selected-players');
        const selectedPlayers = selectedPlayersOl.childElementCount;

        // Validation
        if (selectedPlayers === 5) {
            alert("You cannot add more than 5 players");
            return;
        }
        // Getting the player name
        const playerName = button.parentElement.firstElementChild.innerText;

        // Adding it to selected players sidebar
        const li = document.createElement('li');
        li.innerText = playerName;
        selectedPlayersOl.appendChild(li);

        console.log(selectedPlayersOl.childElementCount);
    });
}
// console.log(selectButtons);