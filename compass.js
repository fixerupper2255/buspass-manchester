const compass = document.querySelector('.compass');
const needle = document.querySelector('.needle');

function updateCompass(event) {
    // Get the position of the compass relative to the viewport
    const compassRect = compass.getBoundingClientRect();
    // Calculate the center of the compass
    const centerX = compassRect.left + compassRect.width / 2;
    const centerY = compassRect.top + compassRect.height / 2;
    // Calculate the angle between the mouse position and the center of the compass
    const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX) * (180 / Math.PI);
    // Rotate the needle to point to the current angle
    needle.style.transform = `translateX(-50%) rotate(${angle}deg)`;
}

// Update the compass when the mouse moves
compass.addEventListener('mousemove', updateCompass);
