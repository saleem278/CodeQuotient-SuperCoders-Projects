import React from "react";

export default function Section3() {
  return (
    <section id="program_structure" className="py-5">
      <div className="container text-center my-4 my-lg-5">
        <p className="section_heading_one mb-1">
          12 weeks of Full Stack Development Program.
        </p>
        <p className="section_text">
          This is how your coding journey will be with CodeQuotient.
        </p>
      </div>
      <div className="container-fluid py-4 py-md-5 mb-lg-4">
        <div className="mx-lg-5">
          <div className="d-flex flex-column flex-lg-row align-items-center py-4 px-sm-4 border-bottom orange_border_left">
            <div>
              <img className="item_img image_custom" src="./images/sprout.png" alt="sprout" />
            </div>
            <div className="text-center text-lg-left mt-3 mt-lg-0 ml-lg-5">
              <p className="item_title mb-1">Foundation</p>
              <p className="item_details mb-0">
                We will dive deep into the fundamentals of Computer science
                going with our vision of setting a base for your long-term
                programming career.
              </p>
            </div>
          </div>
          <div className="d-flex flex-column flex-lg-row align-items-center py-4 px-sm-4 border-bottom orange_border_right">
            <div>
              <img className="item_img image_custom" src="./images/fullstack.png" alt="fullstack"/>
            </div>
            <div className="text-center text-lg-left mt-3 mt-lg-0 ml-lg-5">
              <p className="item_title mb-1">Full Stack Development</p>
              <p className="item_details mb-0">
                We start our full-stack training module by learning HTML5, CSS,
                React for front end and Node.js, Express & MongoDB for back end.
                You will spend most of your time developing projects and will
                learn software development by implementation.
              </p>
            </div>
          </div>
          <div className="d-flex flex-column flex-lg-row align-items-center py-4 px-sm-4 border-bottom orange_border_left">
            <div>
              <img className="item_img image_custom" src="./images/code_icon.png" alt="code_icon" />
            </div>
            <div className="text-center text-lg-left mt-3 mt-lg-0 ml-lg-5">
              <p className="item_title mb-1">Portfolio of Projects</p>
              <p className="item_details mb-0">
                The projects you build in this program will create an amazing
                portfolio that showcases your skills and expertise. Show this
                using “LIVE profile”, and stand out from the regular applicants.
              </p>
            </div>
          </div>
          <div className="d-flex flex-column flex-lg-row align-items-center py-4 px-sm-4 orange_border_right">
            <div>
              <img className="item_img image_custom" src="./images/coder.png" alt="coder"/>
            </div>
            <div className="text-center text-lg-left mt-3 mt-lg-0 ml-lg-5">
              <p className="item_title mb-1">Get your Dream Job!</p>
              <p className="item_details mb-0">
                After successful completion of this program we will connect you
                with our hiring partners and help you land a dream job.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
