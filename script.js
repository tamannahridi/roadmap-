// Variables
const coverPage = document.getElementById('cover-page');
const homePage = document.getElementById('home-page');
const taskWindow = document.getElementById('task-window');
const congratulationsPage = document.getElementById('congratulations-page');

const startButton = document.getElementById('start-button');
const phaseButtons = document.querySelectorAll('.phase-button');
const returnButton = document.getElementById('return-button');
const nextButton = document.getElementById('next-button');
const taskTitle = document.getElementById('task-title');
const taskList = document.getElementById('task-list');
const homeButton = document.getElementById('home-button');

// Phase Data
const tasks = {
  1: ['Task 1 for Phase 1', 'Task 2 for Phase 1'],
  2: ['Task 1 for Phase 2', 'Task 2 for Phase 2'],
  3: ['Task 1 for Phase 3', 'Task 2 for Phase 3'],
  4: ['Task 1 for Phase 4', 'Task 2 for Phase 4'],
  5: ['Task 1 for Phase 5', 'Task 2 for Phase 5'],
};

let currentPhase = 1;

// Event Listeners
startButton.addEventListener('click', () => {
  coverPage.classList.remove('active');
  homePage.classList.add('active');
});

phaseButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const phase = parseInt(button.id.replace('phase', ''), 10);
    openTaskWindow(phase);
  });
});

returnButton.addEventListener('click', () => {
  taskWindow.classList.remove('active');
  homePage.classList.add('active');
});

nextButton.addEventListener('click', () => {
  taskWindow.classList.remove('active');
  homePage.classList.add('active');
  if (currentPhase < 5) {
    currentPhase++;
    document.getElementById(`phase${currentPhase}`).classList.remove('locked');
    document.getElementById(`phase${currentPhase}`).disabled = false;
  } else {
    congratulationsPage.classList.add('active');
  }
});

homeButton.addEventListener('click', () => {
  congratulationsPage.classList.remove('active');
  homePage.classList.add('active');
});

// Functions
function openTaskWindow(phase) {
  currentPhase = phase;
  homePage.classList.remove('active');
  taskWindow.classList.add('active');
  taskTitle.textContent = `Phase ${phase} Tasks`;
  taskList.innerHTML = '';
  tasks[phase].forEach((task) => {
    const li = document.createElement('li');
    li.innerHTML = `<input type="checkbox" /> ${task}`;
    taskList.appendChild(li);
  });
  updateNextButtonState();
}

function updateNextButtonState() {
  const checkboxes = taskList.querySelectorAll('input[type="checkbox"]');
  nextButton.disabled = true;
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      const allChecked = Array.from(checkboxes).every((box) => box.checked);
      nextButton.disabled = !allChecked;
    });
  });
}

// Initial Setup
coverPage.classList.add('active');
document.getElementById('phase1').classList.remove('locked');
document.getElementById('phase1').disabled = false;
