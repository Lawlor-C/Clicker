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
document.getElementById("clickButton").addEventListener("click", () => {
  clickCount++;
  score.innerText = clickCount;
  saveData();
  tester(); //Test function to placehold for all other functions.
  return clickCount;
});

//Reset the score
document.getElementById("resetButton").addEventListener("click", () => {
  clickCount = 0;
  score.innerText = clickCount;
  saveData();
  return clickCount;
});

/*  Potential Milestones to implement (number of points)
    10  -   Brief sound
    20  -   Sound and button flashes a different colour
    50  -   Button changes to a new colour, different font 
    75  -   Token button (TB) appears, offering an automatic click (AC) for every 10 manual clicks (MC) (costs 50 points) (Sound plays onClick)
    100 -   Background colour changes
    150 -   TB appears, offering an AC for every 5 seconds. (costs 100 points) (Sound plays onClick)
    200 -   Background colour changes and sound plays. Button styles change as well.
    210 -   TBs appear offering to double effects of previous TBs (AC every 5 MC   and   2 AC every 5 seconds) (cost 75 each) (new sound plays onClick)
    250 -   Background colour changes. Screen gets longer. Moving TB appears, offering 10 points. Appears every 30 seconds.

            Once these are implemented and working as desired, assess scale.
*/

function tester() {
  let scoreElement = document.getElementById("clickCount");

  if (scoreElement.innerText === "10") {
    alert("That's 10!");
  }
}
