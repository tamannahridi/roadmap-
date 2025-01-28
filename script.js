function startGame() {
    document.getElementById("landing-page").style.display = "none";
    document.getElementById("roadmap-page").style.display = "block";
}

function unlockStop(stopId) {
    document.getElementById(stopId).style.backgroundColor = "#4CAF50";
    document.getElementById(stopId).querySelector('.lock').style.display = "none";
}

function showTasks(phase) {
    document.getElementById("tasks").style.display = "block";
    document.getElementById("tasks").querySelector("h2").innerText = "Phase " + phase + " Tasks";
    document.getElementById("next-btn").setAttribute("data-phase", phase);
}

function nextPhase() {
    let currentPhase = parseInt(document.getElementById("next-btn").getAttribute("data-phase"));
    
    // Check if tasks are completed
    if (document.querySelectorAll(`#task-form input[type="checkbox"]:checked`).length === 3) {
        document.getElementById("tasks").style.display = "none";
        unlockStop("stop" + (currentPhase + 1));
        if (currentPhase < 5) {
            showTasks(currentPhase + 1);
        } else {
            document.getElementById("congrats-page").style.display = "block";
        }
    } else {
        alert("Please complete all tasks before proceeding.");
    }
}

// Initial Phase
showTasks(1);
