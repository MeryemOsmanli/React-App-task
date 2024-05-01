import React from "react";
import "../style/homeStyle.css";

function Home() {
  return (
    <>
      {/* hero section start  */}
      <section className="hero">
        <div className="hero_section_text">
          <h1>Clean Blog</h1>
          <p>A Blog Theme by Start Bootstrap</p>
        </div>
      </section>

      <section className="hero_content container">
        <div>
          <h3>Man must explore, and this is exploration at its greatest</h3>
          <h4>Problems look mighty small from 150 miles up</h4>
          <p>
            Posted by
            <a href="" className="start_bootstrap_a">
              Start Bootstrap
            </a>{" "}
            on September 24, 2023
          </p>
        </div>
        <div>
          <h3>
            I believe every human has a finite number of heartbeats. I don't
            intend to waste any of mine.
          </h3>
          <p>
            Posted by
            <a href="" className="start_bootstrap_a">
              Start Bootstrap
            </a>{" "}
            on September 24, 2023
          </p>
        </div>
        <div>
          <h3>Science has not yet mastered prophecy</h3>
          <h4>
            We predict too much for the next year and yet far too little for the
            next ten.
          </h4>
          <p>
            Posted by
            <a href="" className="start_bootstrap_a">
              Start Bootstrap
            </a>{" "}
            on September 24, 2023
          </p>
        </div>
        <div>
          <h3>Failure is not an option</h3>
          <h4>
            Many say exploration is part of our destiny, but it’s actually our
            duty to future generations.
          </h4>
          <p>
            Posted by
            <a href="" className="start_bootstrap_a">
              Start Bootstrap
            </a>{" "}
            on September 24, 2023
          </p>
        </div>
      </section>
      {/* hero section end  */}
      {/* hero button section start  */}
      <section className="hero_button">
        <div></div>
        <div>
          <button>Older Post →</button>
        </div>
      </section>
      {/* hero button section end  */}
    </>
  );
}

export default Home;
