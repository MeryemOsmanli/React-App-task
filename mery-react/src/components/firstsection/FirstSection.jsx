import React from "react";
import "./firstsecStyle.css";

function FirstSection() {
  return (
    <div>
      {/* first section start */}
      <section class="hero ">
        <div className=" hero_box container">
          <div class="hero_section_left">
            <h2>We Help Grow Your Business</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="hero_left_btn_box">
              <button>Contact us</button>
              <p>
                <a href="">Watch the video</a>
              </p>
            </div>
          </div>
          <div className="hero_section_right">
            <img
              src="https://preview.colorlib.com/theme/financier/images/img_6.jpg.webp"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* first section end */}
    </div>
  );
}

export default FirstSection;
