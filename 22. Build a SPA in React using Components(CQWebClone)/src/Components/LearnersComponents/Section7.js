import React from "react";

export default function Section7() {
  return (
    <section id="application_process_section">
      <div className="container-fluid text-center my-5">
        <span class="highlighted_heading mb-0" style={{left: "5%"}}>
          Application Process
        </span>
      </div>
      <div className="container-fluid application_process_content mb-5">
          <div className="row d-flex justify-content-center">
              <div className="d-flex col-12 col-md-6 col-xl-4 justify-content-center mb-4">
                  <div className="text-center text-md-left">
                        <p className="step_title mb-0">STEP 1</p>
                        <p className="step_title step_title_2">
                        Fill the application and take <br/> Our online assessment
                        </p>
                        <p className="step_description">Submit your complete application. After reading your application, we respond with an invitation to take our online assessment.
                        </p>
                  </div>
                  <div className="d-none d-md-inline ml-5 mr-4 vertical_divider" style={{borderColor: "white"}}></div>
              </div>
              <div className="d-flex col-12 col-md-6 col-xl-4 justify-content-center mb-4">
              <div className="text-center text-md-left">
                        <p className="step_title mb-0">STEP 2</p>
                        <p className="step_title step_title_2">
                        Interview & <br/> Decision
                        </p>
                        <p className="step_description">Depending on your assessment outcome, we invite you to a technical Skype interview. We deliver an admissions decision to you, and talk about next-steps.
                        </p>
                  </div>
                  <div className="d-none d-md-inline ml-5 mr-4 vertical_divider" style={{borderColor: "white"}}></div>
              </div>
              <div className="d-flex col-12 col-md-6 col-xl-4 justify-content-center mb-4">
              <div className="text-center text-md-left">
                        <p className="step_title mb-0">STEP 3</p>
                        <p className="step_title step_title_2">
                        Enroll and <br/> start pre work
                        </p>
                        <p className="step_description">Pay the registration fees to enroll in the course and start the pre work of your course on our platform.
                        </p>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
}
