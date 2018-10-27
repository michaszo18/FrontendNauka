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
    let workInProgress = true;
    let doneWork = false;
    let doneBreak = true;

    function start() {
        // sound.play();
        settings.style.visibility = "hidden";
        time.style.visibility = "visible";
        downloadData();
        displayData();
        console.log("raz?");
        console.log(doneBreak, doneWork);
        work();
        console.log("dupa");
    }

    function work() {
        timer(workTime);
        
        if(sessions > 0) {
            if (doneBreak == true) {
                console.log("work");
                document.querySelector(".time #type").innerHTML = "Praca";
                timer(workTime);
                doneWork = true; doneBreak = false;
            } else if (doneWork == true) {
                console.log("break");
                document.querySelector(".time #type").innerHTML = "Przerwa";
                timer(breakTime);
                doneWork = false; doneBreak = true;
            }
            
            console.log("sess", sessions);
            
            sessions--;
            sessions = document.querySelector("#inf #sessions").innerHTML = "Pozostało sesji: " + sessions;
            work();
        }
        document.querySelector(".time #type").innerHTML = "Na dzisiaj koniec";
        clearInterval(countdown);

    }

    function downloadData() {
        sessions = document.querySelector("#inf #sessions").value;
        workTime = document.querySelector("#inf #work").value;
        breakTime = document.querySelector("#inf #break").value;
    }

    function timer(min) {
        const now = Date.now();
        const then = now + min * 1000 * 60;
        // const then = now + min * 1000;

        countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);
            if (secondsLeft < 0) {
                clearInterval(countdown);
                // sound.play();
                console.log(doneBreak, doneWork);
                if(doneWork == true) {
                    work();
                } else if (doneBreak == true) {
                    work();
                }

                return;
            }
            displayTimeLeft(secondsLeft);
        }, 1000);
    }
    
    function displayTimeLeft(seconds) {
        const minutes = Math.floor(seconds / 60);
        const reminderSec = seconds % 60;
        const display = `${minutes} : ${reminderSec}`;
        timeDisplay.textContent = display;
        console.log(minutes ,reminderSec);
    }

    function displayData() {
        let timeSessions = document.querySelector(".time #sessions");
        let timeWorkTime = document.querySelector(".time #work");
        let timeBreakTime = document.querySelector(".time #break");        
        timeSessions.innerHTML = "Pozostało sesji: " + sessions;
        timeWorkTime.innerHTML = "Czas pracy: " + workTime;
        timeBreakTime.innerHTML = "Czas przerwy: " + breakTime;
    }
        