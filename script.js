function createGame(player1, hour, player2){
    return `
    <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira de ${player1}" />
    <strong>${hour}</strong>
    <img
        src="./assets/icon-${player2}.svg"
        alt="Bandeira de ${player2}"
    />
    </li>
    `   
}

let delay = -0.3;
function createCard(date, day, games){
    delay += 0.3;
    return `
    <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span> ${day} </span></h2>
    <ul>
        ${games}
    </ul>
    </div>
    `
}

document.querySelector('#cards').innerHTML = 
    
    createCard('23/11', 'quarta', createGame('botswana', '10:00', 'burundi') + 
        createGame('honduras', '12:00', 'antigua') + createGame('island', '21:00', 'casaquistao')) +
    createCard('24/11', 'quinta', createGame('suica', '07:00', 'camaroes') + 
        createGame('portugal', '13:00', 'gana') + createGame('brazil', '16:00', 'serbia')) +
    createCard('28/11', 'segunda', createGame('coreia', '10:00', 'gana') + 
        createGame('brazil', '13:00', 'suica') + createGame('portugal', '16:00', 'uruguai')) +
    createCard('02/12', 'sexta', createGame('coreia', '12:00', 'portugal') + 
        createGame('gana', '12:00', 'uruguai') + createGame('camaroes', '16:00', 'brazil'))
   
