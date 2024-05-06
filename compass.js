const compass = document.querySelector('.compass');
const needle = document.querySelector('.needle');

function updateCompass(event) {
    const alpha = event.alpha || 0; // Z-axis rotation (in degrees)
    needle.style.transform = `translateX(-50%) rotate(${-alpha}deg)`;
}

function requestDeviceOrientationPermission() {
    if (/iPad|iPhone|iPod/.test(navigator.platform)) { // Check if it's an iOS device
        if (typeof DeviceOrientationEvent.requestPermission === 'function') {
            DeviceOrientationEvent.requestPermission()
                .then(permissionState => {
                    if (permissionState === 'granted') {
                        window.addEventListener('deviceorientation', updateCompass);
                    } else {
                      needle.innerHTML = 'Permission denied for device orientation.'
                      alert('Permission denied for device orientation.');
                        console.error('Permission denied for device orientation.');
                    }
                })
                .catch(console.error);
        } else {
            needle.innerHTML = 'Device orientation permission not supported.'
            alert('Device orientation permission not supported.');
            console.error('Device orientation permission not supported.');
        }
    } else {
        needle.innerHTML = 'Not an iOS device.'
        alert('Not an iOS device.');
        console.error('Not an iOS device.');

    }
}

// Ask for permission when the page loads or when user interaction is detected
document.addEventListener('DOMContentLoaded', () => {
    requestDeviceOrientationPermission();
});

// You can also ask for permission on user interaction, for example, when a button is clicked
// buttonElement.addEventListener('click', requestDeviceOrientationPermission);
