import React from "react";

export default function Section1() {
  return (
    <section id="header-section" className="header_img">
      <div className="container headerSectionmargin">
        <div className="row">
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12">
            <div className="banner-section pt-5">
              <h3 className="heading_one mb-3" style={{ color: "#de6834" }}>
                Learning & career platform for aspiring programmers
              </h3>
              <p className="text_one text_one_2 mb-4">
                Join our 3 months of LIVE online program in full stack
                development and learn software engineering by building projects
                & showcase your skills to get jobs.
              </p>
              <p
                style={{ fontStyle: "italic", fontSize: "17px" }}
                className="text_one text_one_2 mb-2"
              >
                Join our community of{" "}
                <span style={{ fontWeight: "600" }}>17K+ learners</span>
              </p>
              <button  className="btn btn_custom btn-large">
                <span className="header_btn_text">Program details</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
