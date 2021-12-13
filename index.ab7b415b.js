function $da48b5cd1aca5235$export$78b86f50d8910e72() {
    let spin = document.getElementById("btn-spin");
    spin.addEventListener('click', ()=>{
        const spinningName = document.getElementById("spinning-name");
        spinningName.innerHTML = winner;
    });
    let random = Math.floor(Math.random() * players.length);
    let winner = players[random];
    console.log(winner);
} //    export function getWinner() {
 //     // let player = innerHTML.querySelectorAll(players)
 //     // let winner = innerHTML(players)
 //    let random = Math.floor(Math.random() * players.length);
 //     let winner = players[random]
 //     console.log(winner);
 //     return winner;
 //     }
 //     const player = document.querySelectorAll(players)
 //     random = Math.floor(Math.random) * $player.length
 //     winner = players[random]
 //     return getWinnerResult;
 // spin.click = function toSpin (){
 //     spin.addEventListener("click", (e)=>{
 //         e.target.matches(spin)
 //             let result = getWinner(players);
 //             document.write(result);
 //         });


function $7477d4a697b7254e$var$app() {
    $da48b5cd1aca5235$export$78b86f50d8910e72();
    const newPlayer = document.querySelector("#new-player-form");
    const input = document.querySelector("#new-player-input");
    const list_el = document.querySelector("#players");
    const buttonAdd = document.querySelector("#btn-add-player");
    let players = [];
    buttonAdd.addEventListener('click', ()=>{
        const player = input.value;
        if (!player) {
            document.getElementById('doomed').play();
            alert("Añade un jugador!");
            return;
        }
        const player_el = document.createElement("div");
        player_el.classList.add("player");
        const player_content_el = document.createElement("div");
        player_content_el.classList.add("content");
        player_el.appendChild(player_content_el);
        const player_input_el = document.createElement("input");
        player_input_el.classList.add("text");
        player_input_el.type = 'text';
        player_input_el.value = player;
        player_input_el.setAttribute('readonly', 'readonly');
        player_content_el.appendChild(player_input_el);
        players.push(input.value);
        console.log(players);
        const player_actions_el = document.createElement('div');
        player_actions_el.classList.add('actions');
        const player_edit_el = document.createElement('button');
        player_edit_el.classList.add('edit');
        player_edit_el.innerHTML = '<i class="far fa-edit" aria-hidden="true"></i>';
        const player_delete_el = document.createElement('button');
        player_delete_el.classList.add('delete');
        player_delete_el.innerHTML = '<i class="fas fa-trash-alt" aria-hidden="true"></i>';
        player_actions_el.appendChild(player_edit_el);
        player_actions_el.appendChild(player_delete_el);
        player_el.appendChild(player_actions_el);
        list_el.appendChild(player_el);
        input.value = "";
        player_edit_el.addEventListener('click', ()=>{
            if (player_edit_el.innerText.toLowerCase() == "edit") {
                player_edit_el.innerText = "Guardar";
                player_input_el.removeAttribute("readonly");
                player_input_el.focus();
            } else {
                player_edit_el.innerHTML = '<i class="far fa-edit" aria-hidden="true"></i>';
                player_input_el.setAttribute("readonly", "readonly");
            }
        });
        player_delete_el.addEventListener('click', (e)=>{
            list_el.removeChild(player_el);
            function del() {
                let indice = players.indexOf('');
                players.splice(0, 1);
            }
            del();
        });
    });
}
$7477d4a697b7254e$var$app();


