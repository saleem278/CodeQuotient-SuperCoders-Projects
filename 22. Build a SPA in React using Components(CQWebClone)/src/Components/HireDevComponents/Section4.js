import React from "react";

export default function Section4() {
  return (
    <section id="processDetailsSection" className="py-5">
      <div className="container text-center my-4">
        <p className="heading mb-0">This is how our process works</p>
        <p className="subheading">
          Three months of FULL time program in software development for those
          who want to get better at programming.
        </p>
      </div>
      <div className="container-fluid">
        <div className="row my-5 mx-lg-5">
          <div className="col-12 col-lg-7">
            <div className="d-flex flex-row justify-content-start align-items-center">
            <div class="m-2 mr-4 svg-circle-container">
                <div style={{background: "#E6B9A1",width: "20px", height: "20px", borderRadius: "50%", display: "inline-block"}}></div>
                <div style={{background: "#E6B9A1",width: "20px", height: "20px", borderRadius: "50%", display: "inline-block"}}></div>
                <div></div>
                <div style={{background: "#E6B9A1",width: "20px", height: "20px", borderRadius: "50%", display: "inline-block"}}></div>
                <div style={{background: "#DE6834",width: "20px", height: "20px", borderRadius: "50%", display: "inline-block"}}></div>
              </div>
              <div className="m-2 my-3 process-step-res">
                <p className="process_step_title mb-1">Selection</p>
                <p className="process_step_description mb-0">
                  We admit students after a very rigourous selection process
                </p>
              </div>
            </div>
            <hr
              style={{
                width: "90%",
                backgroundColor: "#EDEDED",
                color: "#EDEDED",
                display: "block",
                margin: "10px auto",
              }}
            />
            <div className="d-flex flex-row justify-content-start align-items-center">
            <div class="m-2 mr-4 svg-circle-container">
                <div style={{background: "#DE6834",width: "20px", height: "20px", borderRadius: "50%", display: "inline-block"}}></div>
                <div style={{background: "#DE6834",width: "20px", height: "20px", borderRadius: "50%", display: "inline-block"}}></div>
              </div>
              <div className="m-2 my-3">
                <p className="process_step_title mb-1">Training</p>
                <p className="process_step_description mb-0">
                  Our Graduates learn by doing and master Core CS (Data
                  Structures, Algorithms, OS) and Full Stack web development
                  (HTML, CSS, Javascript, React, Redux, Node, Express, SQL and
                  MongoDb).
                </p>
              </div>
            </div>
            <hr
              style={{
                width: "90%",
                backgroundColor: "#EDEDED",
                color: "#EDEDED",
                display: "block",
                margin: "10px auto",
              }}
            />
            <div className="d-flex flex-row justify-content-start align-items-center">
            <div class="m-2 mr-4 svg-circle-container">
                <div style={{background: "#DE6834",width: "20px", height: "20px", borderRadius: "50%", display: "inline-block"}}></div>
                <div style={{background: "#E6B9A1",width: "30px", height: "30px", borderRadius: "50%", display: "inline-block"}}></div>
                <div></div>
                <div style={{background: "#DE6834",width: "20px", height: "20px", borderRadius: "50%", display: "inline-block",visibility: "hidden"}}></div>
                <div style={{background: "#DE6834",width: "20px", height: "20px", borderRadius: "50%", display: "inline-block"}}></div>
              </div>
              <div className="m-2 my-3">
                <p className="process_step_title mb-1">Projects</p>
                <p className="process_step_description mb-0">
                  Students spend most of their time in developing projects and
                  learn the best practices of software development by
                  implementation. They develop for non-profits or open source
                  applications and are expected to work independently as well as
                  in a team to deliver projects. We look for work ethics,
                  passion and teamwork.
                </p>
              </div>
            </div>
            <hr
              style={{
                width: "90%",
                backgroundColor: "#EDEDED",
                color: "#EDEDED",
                display: "block",
                margin: "10px auto",
              }}
            />
            <div className="d-flex flex-row justify-content-start align-items-center">
              <div className="m-2 mr-4 svg-circle-container">
                <div
                  style={{
                    background: "#DE6834",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    display: "inline-block",
                    margin: "auto",
                  }}
                ></div>
              </div>
              <div className="m-2 my-3">
                <p className="process_step_title mb-1">Ready for work</p>
                <p className="process_step_description mb-0">
                  The top performing students ( we call them SuperCoders ) are
                  then connected to companies for software development roles.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 mt-4 mt-lg-0 how_process">
            <div style={{ marginBottom: "15px" }}>
              <div className="d-flex flex-row justify-content-start align-items-end">
                <div>
                  <div className="m-2">
                    <div className="img_placeholder image_custom rounded">
                      <img src="./images/raman.jpg" alt="raman" height="100px" width="100px"/>
                    </div>
                  </div>
                </div>
                <div style={{ position: "relative" }} className="m-2">
                  <p class="featured_user_name">Raman Sharma</p>
                  <p className="featured_user_designation">
                    Raman is a full stack engineer working on a Ecommerce
                    Project
                  </p>
                </div>
              </div>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <div className="d-flex flex-row justify-content-start align-items-end">
                <div>
                  <div className="m-2">
                    <div className="img_placeholder rounded">
                      <img src="./images/shubham.jpg" alt="shubham" height="100px" width="100px" />
                    </div>
                  </div>
                </div>
                <div style={{ position: "relative" }} className="m-2">
                  <p class="featured_user_name">Shubham Verma</p>
                  <p className="featured_user_designation">
                    Shubham is a full stack engineer working on a Ecommerce
                    Project.
                  </p>
                </div>
              </div>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <div className="d-flex flex-row justify-content-start align-items-end">
                <div>
                  <div className="m-2">
                    <div className="img_placeholder rounded">
                      <img src="./images/rahul.jpg" alt="rahul" height="100px" width="100px"/>
                    </div>
                  </div>
                </div>
                <div style={{ position: "relative" }} className="m-2">
                  <p class="featured_user_name">Rahul Dixit</p>
                  <p className="featured_user_designation">
                    Rahul is a full stack engineer making himself available for
                    placement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
