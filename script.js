// Handle Cover Page and Start Button
document.getElementById("startBtn").onclick = function() {
  document.getElementById("coverPage").style.display = "none";
  document.getElementById("homePage").style.display = "block";
  unlockPhase(1); // Unlock Phase 1 when starting
};

// Unlock a Phase
function unlockPhase(phase) {
  const button = document.getElementById("phase" + phase);
  button.disabled = false;
  button.classList.remove("locked");
  button.classList.add("unlocked");
}

// Show Phase Tasks
function showPhase(phase) {
  document.getElementById("homePage").style.display = "none";
  document.getElementById("phaseWindow").style.display = "block";

  const tasks = getTasksForPhase(phase);
  document.getElementById("currentPhase").textContent = `Phase ${phase} Tasks`;
  document.getElementById("phaseTasks").innerHTML = tasks;

  // Initially disable the Next button
  document.getElementById("nextBtn").disabled = true;
  document.getElementById("nextBtn").dataset.phase = phase; // Track current phase
}

// Get Tasks for a Phase
function getTasksForPhase(phase) {
  const taskList = [
    ["Task 1.1", "Task 1.2", "Task 1.3"],
    ["Task 2.1", "Task 2.2", "Task 2.3"],
    ["Task 3.1", "Task 3.2", "Task 3.3"],
    ["Task 4.1", "Task 4.2", "Task 4.3"],
    ["Task 5.1", "Task 5.2", "Task 5.3"]
  ];

  const tasks = taskList[phase - 1];
  return tasks
    .map(
      (task, index) =>
        `<label><input type="checkbox" onchange="checkTasksCompletion(${phase})"> ${task}</label>`
    )
    .join("");
}

// Check if all tasks are completed
function checkTasksCompletion(phase) {
  const tasks = document.querySelectorAll("#phaseTasks input[type='checkbox']");
  const allCompleted = Array.from(tasks).every((checkbox) => checkbox.checked);
  document.getElementById("nextBtn").disabled = !allCompleted;
}

// Move to the Next Phase
function nextPhase() {
  const currentPhase = parseInt(document.getElementById("nextBtn").dataset.phase);
  if (currentPhase < 5) {
    unlockPhase(currentPhase + 1); // Unlock the next phase
  }
  goToHomePage();
}

// Return to Home Page
function goToHomePage() {
  document.getElementById("phaseWindow").style.display = "none";
  document.getElementById("homePage").style.display = "block";
}
