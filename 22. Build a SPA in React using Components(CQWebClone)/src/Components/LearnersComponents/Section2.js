import React from "react";

export default function Section2() {
  return (
    <section id="statsSection" className="bg_primary">
      <div className="container py-4 px-4 py-lg-5 px-lg-4">
        <div className="row">
          <div className="col-lg-3 col-sm-3 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
            <img
              width="150"
              height="75"
              className="img-thumbnail image_custom"
              src="https://codequotient.com/websiteNew/assets/img/website/homepage/analytics.svg"
             alt="analytics"/>
          </div>
          <div className="col-lg-9 col-sm-9">
            <div className="row">
              <div className="col-12 col-sm-3 col-lg-3 my-4 text-center">
                <h1 className="stats_heading mb-0">17K+</h1>
                <p className="stats_description">Active Learners</p>
              </div>
              <div className="col-12 col-sm-3 col-lg-3 my-4 text-center">
                <h1 className="stats_heading mb-0">10M+</h1>
                <p className="stats_description">Submissions</p>
              </div>
              <div className="col-12 col-sm-3 col-lg-3 my-4 text-center">
                <h1 className="stats_heading mb-0">500+</h1>
                <p className="stats_description">
                  Learners got placed in last 6 months
                </p>
              </div>
              <div className="col-12 col-sm-3 col-lg-3 my-4 mb-lg-0 text-center">
                <h1 className="stats_heading mb-0">10</h1>
                <p className="stats_description">
                  Universities actively using CodeQuotient
                </p>
              </div>
            </div>
          </div>
          <div style={{visibility:"hidden"}} id="program_details"></div>
        </div>
      </div>
    </section>
  );
}