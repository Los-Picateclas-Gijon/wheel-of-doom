let playersList: string[];

const inputNamePlayer= document.getElementById("player") as HTMLInputElement;
const btnAddPlayer= document.getElementById("btn-add-player") as HTMLButtonElement;
const btnDelPlayer= document.getElementById("btn-del-player") as HTMLButtonElement;
const btnEditPlayer= document.getElementById("btn-edit-player") as HTMLButtonElement;

btnAddPlayer.addEventListener("click", addPlayer);
btnDelPlayer.addEventListener("click", deletePlayer);
btnEditPlayer.addEventListener("click", editPlayer);

export function addPlayer()
{
    if (inputNamePlayer.value != ""){
        playersList.push(inputNamePlayer.value);
    }
    else{
        alert("Escribe tu nombre")
    }
    console.log("la lista no está creada")



}
export function deletePlayer(){
}
console.log("la lista está vacia y sin crear")

export function editPlayer(){

}
function createList(){
    let ul = document.createElement("ul")
    let li = document.createElement("li")

}