const photos = ["img/photo_1.jpg", "img/photo_2.jpg"]; // Replace with the actual image file paths
// Create an audio object for the barking sound
const laserSound = new Audio("sounds/laser.mp3");
const barkSound = new Audio("sounds/dog-bark.mp3");

function toggleState(toggleElement) {
  // Toggle the "active" class on our toggle widget
  toggleElement.classList.toggle("active");

  // Check if the toggle is active (green)
  if (toggleElement.classList.contains("active")) {
    // Active state: show photo_2 and play the barking sound
    document.getElementById("sliderImage").src = photos[1];
    laserSound.play();
  } else {
    // Inactive state: show photo_1 and do not play any sound
    document.getElementById("sliderImage").src = photos[0];
    barkSound.play();
  }
}
