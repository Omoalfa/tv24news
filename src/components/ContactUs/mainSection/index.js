import React from "react";
import "./index.css";

const MainSection = () => (
  <div className="contact container">
    <section className="contact">
      <form className="contact-form">
        <h3>CONTACT</h3>
        <input
          className="contact-input"
          type="text"
          placeholder="Subject of Your Mail"
        />
        <input className="contact-input" type="text" placeholder="Your Name" />
        <input
          className="contact-input"
          type="email"
          placeholder="Your Email"
        />
        <input
          className="contact-input"
          type="tel"
          placeholder="Your Phone Number"
        />
        <textarea
          className="contact-input"
          name="message"
          placeholder="Your Message"
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-ads"></div>
    </section>
  </div>
);

export default MainSection;
