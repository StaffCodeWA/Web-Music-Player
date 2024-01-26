var paused = true;

var playingSVG = `<svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>`;
var pauseSVG = `<svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>`;

// the function updatePlay pauses/plays the song every time the user clicks on it
function updatePlay() {
  paused = !paused; 
  var svg = paused ? playingSVG : pauseSVG; 
// If paused, use pauseSVG; otherwise, use playingSVG
  document.getElementById("play-button").innerHTML = svg; 
// Update the innerHTML for the element with ID "play-button" to the variable "svg"
}

// a function that updates the slider
function updateTime() {
  // make sure we're playing by using an "if" statement
  if (!paused) { // Check if not paused
    // get the slider input through document.getElementById and store it into a variable, slider
    var slider = document.getElementById("slider");
    
    // add one to the slider.value
    slider.value++;
    
    // check if the slider.value >= 100 to make sure it's not out of range
    if (slider.value >= 100) {
      // set the slider.value to zero to reset it
      slider.value = 0;
    }
  }
}

// run updatePlay()
updatePlay();

// window.setInterval runs the "updateTime" function every 1000 ms (every 1 second)
// you can mess around with this
window.setInterval(updateTime, 5000);
