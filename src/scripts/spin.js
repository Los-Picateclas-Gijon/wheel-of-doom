// aprietas el boton girar - evento click
//coger un elemento random del array 
//imprimirlo en el <p>

export function addEventBtnLoop()
{
    let spin = document.getElementById("btn-spin");
    
    spin.addEventListener('click', () => {
        const spinningName = document.getElementById("spinning-name");
        spinningName.innerHTML = winner;
    })
    let random = Math.floor(Math.random() * players.length);
    let winner = players[random];
    console.log(winner);
}

//    export function getWinner() {
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