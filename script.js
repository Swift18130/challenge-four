

// add to notes: Timer is an example of a Web API//
// objective: using the tools that are in the browser, psuedo coding //

//element references varaibles (ex o f WEB APIS doncument.QuerySAlector, get.elmentById)//



document.getElementById("start").addEventListener("click", updateCountdown);

// help from tutorial "Simple Countdown Timer with JavaScript" by Florin Pop //
const startingMinutes = 2;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');




setInterval(updateCountdown, 1000);

function updateCountdown () {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    
    seconds = seconds < 10 ? '0' + seconds : seconds;



  countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;   
}





