var session_m = document.getElementById("session_minus");
var session_p = document.getElementById("session_plus");

var break_m = document.getElementById("break_minus");
var break_p = document.getElementById("break_plus");

var session_timing = document.getElementById("session_time");
var break_timing = document.getElementById("break_time");
var sessionwork = document.getElementById("current_title");

var start = document.getElementById("start");
var pause = document.getElementById("pause");
var reset = document.getElementById("reset");

var timing = document.getElementById("timer");
var session_time_count = parseInt(session_timing.textContent);
var break_time_count = parseInt(break_timing.textContent);


function DisableButton(btn) {
    btn.disabled = true;
    btn.setAttribute("class", "blocked");
}
function EnableButton(btn) {
    btn.disabled = false;
    btn.removeAttribute("class");
}
var interval;
session_m.addEventListener("click", function () {
    if (session_time_count == 2) {
        session_time_count--;
        DisableButton(session_m);
        session_timing.innerHTML = session_time_count;
    } else {
        session_time_count--;
        session_timing.innerHTML = session_time_count;
    }
});


session_p.addEventListener("click", function () {
    if (session_time_count == 1) {
        EnableButton(session_m);
    }
    session_time_count++;
    session_timing.innerHTML = session_time_count;
});



break_m.addEventListener("click", function () {
    if (break_time_count == 2) {
        break_time_count--;
        DisableButton(break_m);
        break_timing.innerHTML = break_time_count;
    } else {
        break_time_count--;
        break_timing.innerHTML = break_time_count;
    }
});


break_p.addEventListener("click", function () {
    if (break_time_count == 1) {
        EnableButton(break_m);
    }
    break_time_count++;
    break_timing.innerHTML = break_time_count;
});


start.addEventListener("click", function () {
    pomodoro(session_time_count);
    showButton("START");
    DisableButton(reset)
    DisableButton(session_m);
    DisableButton(session_p);
    DisableButton(break_m);
    DisableButton(break_p);
})

pause.addEventListener("click", function () {
    clearInterval(interval);
    showButton("PAUSE");
    EnableButton(reset);
    if (session_time_count < 2) {
        DisableButton(session_m);
    } else {
        EnableButton(session_m);
    }
    EnableButton(session_p);
    if (break_time_count < 2) {
        DisableButton(break_m);
    } else {
        EnableButton(break_m);
    }
    EnableButton(break_p);
})


reset.addEventListener("click", function () {
    clearInterval(interval);
    count =1;
    count1=1;
    var session_timing = document.getElementById("session_time");
    var break_timing = document.getElementById("break_time");
    session_time_count = session_timing.innerHTML = 20;
    break_time_count = break_timing.innerHTML = 10;
    timing.innerHTML = session_time_count + ' : 00';
    EnableButton(session_m);    
    EnableButton(session_p);
    EnableButton(break_m);
    EnableButton(break_p);   
    showButton("PAUSE");
});


function showButton(buttonKey) {
    if (buttonKey === "PAUSE") {
        start.style.display = "block";
        reset.style.display = "block";
        pause.style.display = "none";
    }
    else if (buttonKey === "START") {
        start.style.display = "none";
        reset.style.display = "block";
        pause.style.display = "block";
    }
    else {
    }

}
var seconds = 0;
var count = 1;
var count1 = 1;
var breakinterval;
function pomodoro(mins) {
    sessionwork.innerHTML = "Session " + count;
    seconds = 60;
    interval = setInterval(function () {
        if (seconds == 60) {
            mins--;
        }
        if (seconds == 0) {
            seconds = 60;
            mins--;
        }
        seconds--;
        if (mins == 0 && seconds == 0) {
            count++;
            clearInterval(interval);
            sessionwork.innerHTML = "break " + count1;
            breaksession(break_time_count);
        }
        timing.innerHTML = mins + " : " + seconds;
    }, 1000)
}
function breaksession(mins) {
    seconds = 60;
    breakinterval = setInterval(function () {
        if (seconds == 60) {
            mins--;
        }
        if (seconds == 0) {
            seconds = 60;
            mins--;
        }
        seconds--;
        if (mins == 0 && seconds == 0) {
            clearInterval(breakinterval);
            sessionwork.innerHTML = count1 + " :Over!!!";
            showButton("PAUSE");
            count1++;
        }
        timing.innerHTML = mins + " : " + seconds;
    }, 1000)
}