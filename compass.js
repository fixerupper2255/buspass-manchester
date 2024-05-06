const compass = document.querySelector('.compass');
const needle = document.querySelector('.needle');

function updateCompass(event) {
    // Extract rotation values from device orientation event
    const alpha = event.alpha || 0; // Z-axis rotation (in degrees)
    // Rotate the needle to point to the current rotation
    needle.style.transform = `translateX(-50%) rotate(${-alpha}deg)`;
}

// Update the compass when device orientation changes
window.addEventListener('deviceorientation', updateCompass, true);
