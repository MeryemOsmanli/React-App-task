import React from "react";
import "../style/footerStyle.css";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      {/* footer section start  */}
      <section class="footer_icon">
        <div class="footer_icon_box">
          <FaTwitter />
        </div>
        <div class="footer_icon_box">
          <FaFacebookF />
        </div>
        <div class="footer_icon_box">
          <FaGithub />
        </div>
      </section>
      <section class="footer_text_section">
        <div class="footer_text">
          <p>Copyright © Your Website 2023</p>
        </div>
      </section>
      {/* footer section end  */}
    </>
  );
}

export default Footer;
