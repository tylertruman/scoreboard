homeScore = 0

awayScore = 0

function resetScore(){
    homeScore = 0
    awayScore = 0
    let codeElement = document.getElementById('away-score')
     codeElement.innerText = awayScore
     codeElement = document.getElementById('home-score')
     codeElement.innerText = homeScore
    
}
// HOW TO RESET ONE SCORE AND ABOVE IS HOW TO RESET 2 SCORES.
// function resetScore(){
//     awayScore = 0
//     let codeElement = document.getElementById('away-score')
//     codeElement.innerText = awayScore
// }


function homePlusOne(){
    homeScore += 1
    let codeElement = document.getElementById('home-score')
    codeElement.innerText = homeScore
    console.log(homeScore);
}

function awayPlusOne(){
    awayScore += 1
    let codeElement = document.getElementById('away-score')
    codeElement.innerText = awayScore
    console.log(awayScore);
}

function homePlusThree(){
    homeScore += 3
    let codeElement = document.getElementById('home-score')
    codeElement.innerText = homeScore
    console.log(homeScore);
}

function awayPlusThree(){
    awayScore += 3
    let codeElement = document.getElementById('away-score')
    codeElement.innerText = awayScore
    console.log(awayScore);
}


