// Check for Gamepad support in the browser
if (!("getGamepads" in navigator)) {
    console.warn("Gamepad API not supported in this browser!");
}

// Initial gamepad state
let previousGamepadState = null;

const SCALE_FACTOR_ROTATION = 0.005; // Further adjusted for azimuth and polar angle movement
const SCALE_FACTOR_ZOOM = 0.0005;    // Further adjusted for zooming movement

// This function will be called on each animation frame
function pollGamepad() {
    const gamepads = navigator.getGamepads();
    const gamepad = gamepads[0]; // Assumes only one gamepad is connected for simplicity

    if (gamepad) {
        const rightStickX = gamepad.axes[2];
        const rightStickY = gamepad.axes[3];
        const leftStickY = gamepad.axes[1]; // Left analog stick's y-axis

        // Check if stick is moved significantly from center
        const DEAD_ZONE = 0.2;
        
        // Adjust azimuth and polar angle with right stick
        if (Math.abs(rightStickX) > DEAD_ZONE) {
            __FLUX__.controls.azimuthAngle += SCALE_FACTOR_ROTATION * rightStickX;
        }

        if (Math.abs(rightStickY) > DEAD_ZONE) {
            __FLUX__.controls.polarAngle += SCALE_FACTOR_ROTATION * rightStickY;
        }

        // Adjust zoom with left stick's y-axis
        if (Math.abs(leftStickY) > DEAD_ZONE) {
            __FLUX__.controls.distance += SCALE_FACTOR_ZOOM * leftStickY;
        }
        
        previousGamepadState = gamepad;
    }

    // Continue polling
    requestAnimationFrame(pollGamepad);
}

// Start polling
pollGamepad();
