import React from "react";
import "../style/contactStyle.css";

function Contact() {
  return (
    <>
      {/* contact image section start  */}
      <section className="contact_image">
        <div>
          <h1>Contact Me</h1>
          <p>Have questions? I have answers.</p>
        </div>
      </section>
      {/* contact image section end  */}
      {/* contact contect section start  */}
      <section className="contact_content container">
        <div className="contact_text">
          <p>
            Want to get in touch? Fill out the form below to send me a message
            and I will get back to you as soon as possible!
          </p>
        </div>
        <div className="contact_form">
          <form action="">
            <div className="input_box">
              <input type="text" name="" id="" placeholder="Name" />
            </div>
            <div className="input_box">
              <input type="email" name="" id="" placeholder="Email Address" />
            </div>
            <div className="input_box">
              <input type="number" name="" id="" placeholder="Phone Number" />
            </div>
            <div className="textarea_box">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
            </div>
            <div>
              <button className="contact_btn">SEND</button>
            </div>
          </form>
        </div>
      </section>
      {/* contact contect section end  */}
    </>
  );
}

export default Contact;
