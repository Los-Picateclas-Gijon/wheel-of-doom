window.addEventListener('load', () => {
    const form = document.querySelector("#new-player-form");
    const input = document.querySelector("#new-player-input");
    const list_el = document.querySelector("#players");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const player = input.value;

        if (!player) {
            alert("Añade un jugador!");
            return;
        }

        const player_el = document.createElement("div");
        player_el.classList.add("player");

        const player_content_el = document.createElement("div")
        player_content_el.classList.add("content");

        player_el.appendChild(player_content_el);

        const player_input_el = document.createElement("input");
        player_input_el.classList.add("text");
        player_input_el.type = 'text';
        player_input_el.value = player;
        player_input_el.setAttribute('readonly', 'readonly');

        player_content_el.appendChild(player_input_el);

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

        player_edit_el.addEventListener('click', () => {
            if (player_edit_el.innerText.toLowerCase() == "edit") {
                player_edit_el.innerText = "Guardar";
                player_input_el.removeAttribute("readonly");
                player_input_el.focus();
            } else {
                player_edit_el.innerHTML = '<i class="far fa-edit" aria-hidden="true"></i>';
                player_input_el.setAttribute("readonly", "readonly");
            }
        });

        player_delete_el.addEventListener('click', (e) => {
            list_el.removeChild(player_el);
        });
});
});



// ----------------------------------------------------------------------------------
// // let playersList: string[];

// const inputNamePlayer= document.querySelector("player") as HTMLInputElement;
// const btnAddPlayer= document.querySelector("btn-add-player") as HTMLButtonElement;
// const btnDelPlayer= document.querySelector("btn-del-player") as HTMLButtonElement;
// const btnEditPlayer= document.querySelector("btn-edit-player") as HTMLButtonElement;

// btnAddPlayer.addEventListener("click", addPlayer);
// btnDelPlayer.addEventListener("click", deletePlayer);
// btnEditPlayer.addEventListener("click", editPlayer);

// export function addPlayer()
// // {
// //     if (inputNamePlayer.value != ""){
// //         playersList.push(inputNamePlayer.value);
// //     }
// //     else{
// //         alert("Escribe tu nombre")
// //     }
// //     console.log("la lista no está creada")
// // }
// export function deletePlayer(){
// }
// console.log("la lista está vacia y sin crear")

// export function editPlayer(){

// }
// function createList(){
//     let ul = document.createElement("ul")
//     let li = document.createElement("li")
// }
//-----------------------------------------------------------------------------------

    // const btnAddPlayer= document.querySelector("btn-add-player") as HTMLButtonElement;
    // const btnDelPlayer= document.querySelector("btn-del-player") as HTMLButtonElement;
    // const btnEditPlayer= document.querySelector("btn-edit-player") as HTMLButtonElement;

    // btnAddPlayer.addEventListener("click", addPlayer);
    // btnDelPlayer.addEventListener("click", deletePlayer);
    // btnEditPlayer.addEventListener("click", editPlayer);

// ----------------------------------------------------------------------------------