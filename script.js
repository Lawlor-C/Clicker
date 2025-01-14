let score = document.getElementById("clickCount");
//Upon initial load / reset the score is Zero
let clickCount = 0;

// Load data from localStorage when the page loads
function autoLoad() {
    const savedData = localStorage.getItem("data");
    if (savedData) {
        clickCount = parseInt(savedData);
        score.innerText = clickCount;
    }
}
autoLoad();

// Save data to localStorage
function saveData() {
    localStorage.setItem("data", clickCount);
}

// Update the click count and save the data
document.getElementById('clickButton').addEventListener('click', () => {
    clickCount++;
    score.innerText = clickCount;
    saveData();
});
