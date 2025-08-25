import "./style.css";

document.querySelector("#app").innerHTML = `
  <main>
  <h1>Contact Us</h1>

  <form>
  <section class="full-name">
  <div class="first-name">
  <label for="first-name">First Name <span>*</span></label>
  <input type="text" id="first-name" name="first-name" required>
  <p class="error-message">This field is required</p>
  </div>

  <div class="last-name">
  <label for="last-name">Last Name <span>*</span></label>
  <input type="text" id="last-name" name="last-name" required>
  <p class="error-message">This field is required</p>
  </div>
  </section>

  <section class="email-address">
  <label for="email-address">Email Address <span>*</span></label>
  <input type="email" id="email-address" name="email-address" required>
  <p class="error-message">Please enter a valid email address</p>
  </section>

  <section class="query-type">
  <p class="query">Query Type <span>*</span></p>
  <div>
  <div class="general-enquiry">
  <input type="radio" id="general-enquiry" name="query-type" required>
  <label for="general-enquiry">General Enquiry</label>
  </div>

  <div class="support-request">
  <input type="radio" id="support-request" name="query-type" required>
  <label for="support-request">Support Request</label>
  </div>
  </div>
  <p class="error-message">Please select a query type</p>
  </section>

  <section class="message">
  <label for="message">Message <span>*</span></label>
  <textarea id="message" name="message" required></textarea>
  <p class="error-message">This field is required</p>
  </section>

  <section class="consent">
  <input type="checkbox" id="consent" name="consent" value="yes" required>
  <label for="consent">I consent to being contacted by the team <span>*</span></label>
  <p class="error-message">To submit this form please consent to being contacted</p>
  </section>

  <input type="submit" value="Submit">
  </form>
  </main>

  <footer>
  <p>
  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a> | Coded by <a href="https://github.com/nadupoy" target="_blank">Nadupoy</a>
  </p>
  </footer>
`;
