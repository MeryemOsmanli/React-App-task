import React from "react";
import "../style/aboutStyle.css";

function About() {
  return (
    <>
      {/* about image section start  */}
      <section className="about_image">
        <div>
          <h1>Clean Blog</h1>
          <p>A Blog Theme by Start Bootstrap</p>
        </div>
      </section>
      {/* about image section end  */}
      {/* about content section start  */}
      <section className="hero_content container">
        <div style={{ border: "none" }}>
          <p className="about_content_p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
            nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis
            sit soluta odio, adipisci quas excepturi maxime quae totam ducimus
            consectetur?
          </p>
        </div>
        <div style={{ border: "none" }}>
          <p className="about_content_p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            praesentium recusandae illo eaque architecto error, repellendus
            iusto reprehenderit, doloribus, minus sunt. Numquam at quae
            voluptatum in officia voluptas voluptatibus, minus!
          </p>
        </div>
        <div style={{ border: "none" }}>
          <p className="about_content_p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            consequuntur magnam, excepturi aliquid ex itaque esse est vero natus
            quae optio aperiam soluta voluptatibus corporis atque iste neque sit
            tempora!
          </p>
        </div>
      </section>
      {/* about content section end  */}
    </>
  );
}

export default About;
