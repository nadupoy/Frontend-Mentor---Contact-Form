import "./style.css";

document.querySelector("#app").innerHTML = `
  <main>
  <h1>Contact Us</h1>

  <form>
  <section class="full-name">
  <div class="first-name">
  <label for="first-name">First Name <span>*</span></label>
  <input type="text" id="first-name" name="first-name" required>
  </div>

  <div class="last-name">
  <label for="last-name">Last Name <span>*</span></label>
  <input type="text" id="last-name" name="last-name" required>
  </div>
  </section>

  <section class="email-address">
  <label for="email-address">Email Address <span>*</span></label>
  <input type="email" id="email-address" name="email-address" required>
  </section>

  <section class="query-type">
  <p>Query Type <span>*</span></p>
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
  </section>

  <section class="message">
  <label for="message">Message <span>*</span></label>
  <textarea id="message" name="message" required></textarea>
  </section>

  <section class="consent">
  <input type="checkbox" id="consent" name="consent" value="yes" required>
  <label for="consent">I consent to being contacted by the team <span>*</span></label>
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
