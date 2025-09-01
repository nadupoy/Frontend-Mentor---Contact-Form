# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![screenshot-on-mobile-devices-375px](./screenshots/Mobile%20-%20375px.png)

_Mobile Devices - 375px_

![screenshot-on-desktop-devices-1440-px](./screenshots/Desktop%20-%201440px.png)

_Desktop Devices - 1440px_

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/contact-form-using-html-css-and-vanilla-javascript-IUMaFTa7C6)
- [Live Site URL](https://profound-mochi-144a38.netlify.app)

## My process

### Built with

- HTML5
- CSS3
- Vanilla JavaScript
- Mobile-first workflow
- [Vite](https://vite.dev/)
- [VS Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)

### What I learned

**1. The `name` attribute for `<input>`**

Each input field must have a name attribute to be submitted. If omitted, the value of the input field will not be sent at all.

```html
<input type="text" id="first-name" name="first-name" />
```

**2. `<input type="checkbox">` vs. `<input type="radio">`**

Where multiple same-named controls exist, radio buttons allow one to be selected out of them all, whereas checkboxes allow multiple values to be selected.

```html
<input type="radio" id="general-enquiry" name="query-type" required />

<input type="radio" id="support-request" name="query-type" required />
```

**3. `<dialog>` element visibility affected by CSS property `display: grid`**

Display property values in CSS override the default visibility of the `<dialog>` element, making it visible to the user always.

```css
dialog {
  background-color: var(--grey-900);
  border: none;
  color: var(--white);
  display: grid;
  grid-template-columns: 10% 90%;
  grid-template-rows: auto auto;
  position: fixed;
  top: 0;
  margin: auto;
  margin-top: 8px;
}
```

A solution was to set the display settings in the `src/main.js` file and not the `src/styles.css` file:

```javascript
successMessage.showModal();
```

However, the above code doesn't work as intended as the success toast message doesn't display after form submission. I am yet to find a cause and solution.

**4. `px` vs. `em` vs. `rem`**

- `px` values are static thus are good for pixel accuracy and are consistent across operating systems and browsers. However they are **_not accessible_**.

- `em` values act as a multiplier of the `font-size` property of the element on which it is used. It automatically adapts its length relative to the font that the reader chooses to use. Moreover, `em` values compound in size.

- `rem` values were created in order to sidestep the compounding problem. They are relative to the root `html` element and not the parent element.

```css
.success-message {
  font-size: 0.8rem;
}
```

```css
label[for="first-name"],
label[for="last-name"],
label[for="email-address"],
label[for="message"] {
  font-size: 0.9em;
}
```

### Continued development

Finding a solution to display the success toast message after the form has been submitted.

### Useful resources

- [Mozilla Developer Network](https://developer.mozilla.org/en-US)
- [javascript.info](https://javascript.info)
- [w3schools.com](https://www.w3schools.com)
- [vite.dev](https://vite.dev/guide) - This helped with project scaffolding using Vite.

## Author

- LinkedIn - [Grace Sampao](https://www.linkedin.com/in/grace-sampao-49a3129b)
- Frontend Mentor - [@nadupoy](https://www.frontendmentor.io/profile/nadupoy)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
