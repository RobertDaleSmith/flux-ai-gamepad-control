# FLUX.AI Gamepad Control

This repository provides a script allowing you to control the FLUX.AI 3D viewer using a gamepad. The script uses the Gamepad API to map the right analog stick to camera angles and the left stick to zoom.

## How to Use

1. Visit [FLUX.AI](https://flux.ai/) and navigate to the 3D viewer.
2. Open your browser's developer tools. This is usually done by pressing F12, or right-clicking on the page and selecting 'Inspect' or 'Inspect Element'.
3. Go to the 'Console' tab within the developer tools.
4. Copy the JavaScript code from the `gamepadControl.js` file in this repository.
5. Paste the code into the console input at the bottom of the developer tool window and press Enter.

## Controls

- The right analog stick controls the `azimuthAngle` and `polarAngle` of the camera in the 3D space, allowing you to rotate around the object.
- The left analog stick controls the `distance` of the camera, allowing you to zoom in and out.
- Movements are scaled down for fine control, ensuring smooth transitions.

## Notes

- Make sure your gamepad is connected before you execute the script.
- Browser support for the Gamepad API can vary, so ensure you're using a compatible browser.
- This script was designed for a standard layout gamepad (e.g., Xbox 360 controller, PS4 controller). If you're using a gamepad with a different layout, you may need to adjust the indices for the buttons and axes.

