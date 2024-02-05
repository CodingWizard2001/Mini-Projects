# Mini Project: Show & Hide Password

While filling up a form, there comes a situation where we type a password and want to see what we have typed till now. To see that, there is a checkbox click on which makes the characters visible.

## Features

1. **HTML:**
    - The HTML structure includes a password input field and an image (eye icon) to toggle password visibility.
    - The input field has a placeholder for the password.
2. **CSS(style.css):**
    - CSS is used for styling, providing a visually appealing and responsive design.
    - The background is styled with a linear gradient.
    - The input box has a white background, border-radius, and box shadow for a clean appearance.
    - The eye icon (image) is styled with a width and cursor property.
3. **JavaScript(script.js):**
    - The JavaScript file contains a script to toggle password visibility when the eye icon is clicked.
    - It selects the eye icon and password input using getElementById.
    - The onclick event is used to trigger the function when the eye icon is clicked.
    - The function checks the current type of the password input. If it's a password, it changes it to text and updates the eye icon source accordingly. If it's already text, it changes it back to a password.
4. **Visual Components:**
    - The eye icon visually represents the action of showing or hiding the password.
    - The eye icon changes dynamically based on the state of the password input (password or text).
5. **Styling:**
    - The styling provides a responsive and user-friendly interface.
    - The design uses a pleasant color gradient for the background.
    - The input box has rounded corners, a box shadow, and a simple layout.
6. **Accessibility:**
The implementation ensures a good user experience with clear visual cues for password visibility.
7. **Cross-browser Compatibility:**
The CSS uses ::-ms-reveal and ::-ms-clear to hide the default Internet Explorer password reveal button.
8. **File Organization:**
The code is organized with separate files for HTML, CSS, and JavaScript, promoting clean and maintainable code.
9. **Responsive Design:**
The layout is designed to be responsive, adapting well to different screen sizes.

## Link

<a href = "https://deft-seahorse-c2f318.netlify.app/" target = "_blank">Preview