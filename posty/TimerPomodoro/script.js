/*
    *TODO 
    -sesje
    -pie 
*/
    const time = document.querySelector('.time');
    const settings = document.querySelector('.settings');
    const timeDisplay = document.querySelector('.time #num');
    time.style.visibility = "hidden";

    let sound = new Audio("sound.mp3");
    let sessions; let workTime; let breakTime; 
    let countdown;  

    function start() {
        settings.style.visibility = "hidden";
        time.style.visibility = "visible";
        downloadData();
        displayData();

        function wywolanie() {

            setTimeout(() => {
                document.querySelector(".time #type").innerHTML = "Praca";
                console.log("Hello ");
                timer(workTime);
            }, breakTime * 1000 ,setTimeout(() => {
                document.querySelector(".time #type").innerHTML = "Przerwa";
                console.log("world!");
                timer(breakTime);
                sessions--;
                if (sessions == 0) {
                    clearTimeout(i);
                }
            }, workTime*1000));
        }
        console.log(workTime*1000);
        

        
        wywolanie();
        let i = setInterval(() => {
            wywolanie();
        }, (workTime * 1000 + breakTime * 1000));
        console.log(workTime*1000 + breakTime*1000);
        
        if(sessions == 0) {
            document.querySelector(".time #type").innerHTML = "Koniec na dziś";
        }
        
    }

    function downloadData() {
        sessions = document.querySelector("#inf #sessions").value;
        workTime = document.querySelector("#inf #work").value;
        breakTime = document.querySelector("#inf #break").value;
    }

    function timer(min) {
        const now = Date.now();
        // const then = now + min * 1000 * 60;
        const then = now + min * 1000;
        countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);
            if (secondsLeft < 0) {
                clearInterval(countdown);
                // sound.play();
                return;
            }
            displayTimeLeft(secondsLeft);
            // console.log(now/1000);
        }, 1000);
    }
    
    function displayTimeLeft(seconds) {
        const minutes = Math.floor(seconds / 60);
        const reminderSec = seconds % 60;
        const display = `${minutes} : ${reminderSec}`;
        timeDisplay.textContent = display;
        // console.log(minutes ,reminderSec);
    }

    function displayData() {
        let timeSessions = document.querySelector(".time #sessions");
        let timeWorkTime = document.querySelector(".time #work");
        let timeBreakTime = document.querySelector(".time #break");        
        timeSessions.innerHTML = "Pozostało sesji: " + sessions;
        timeWorkTime.innerHTML = "Czas pracy: " + workTime;
        timeBreakTime.innerHTML = "Czas przerwy: " + breakTime;
    }
