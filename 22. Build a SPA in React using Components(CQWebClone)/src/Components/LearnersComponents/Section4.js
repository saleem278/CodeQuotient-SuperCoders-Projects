import React from "react";

export default function Section4() {
  return (
    <>
      <div className="divider_div">
        <div>
          <div
            className="horizontal_divider my-4 my-lg-5 mx-4"
            style={{ marginTop: "0px !important" }}
          ></div>
        </div>
      </div>
      <section id="program_coverage" className="py-4">
        <div className="container text-center mt-4 mt-lg-5 mb-0">
          <p className="section_heading_one mb-0">
            What all will be covered in this program?
          </p>
          <p className="section_text">
            Everything, you need to know to make a successful career in software
            development.
          </p>
        </div>
        <div className="container-fluid mt-xl-1 pt-4 pt-md-5 mb-0">
          <div className="row d-flex align-items-center">
            <div className="col-lg-8 px-sm-4 px-md-5 d-flex flex-column justify-content-start align-items-center mb-4 mb-sm-5">
              <div>
                <div className="d-flex flex-column flex-md-row justify-content-start align-items-center px-md-4 mb-4 mb-md-0">
                  <div className="mb-3 m-md-3 mr-md-4">
                    <img src="./images/brands__and__logotypes.png" className="item_img image_custom" alt="logotypes"/>
                  </div>
                  <div className="text-center text-md-left m-md-3">
                    <p className="item_title mb-1">Foundations</p>
                    <p className="item_details mb-0">Linux,GIT,Data Structure,Algorithms,OOPS</p>
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-start align-items-center px-md-4 mb-4 mb-md-0">
                  <div className="mb-3 m-md-3 mr-md-4">
                    <img src="./images/html5.png" className="item_img image_custom" alt="html5"/>
                  </div>
                  <div className="text-center text-md-left m-md-3">
                    <p className="item_title mb-1">Front-End Development</p>
                    <p className="item_details mb-0">
							  HTML5, CSS3, Javascript, React, Redux, D3, HTTP/Ajax & API’s.
							</p>
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-start align-items-center px-md-4 mb-4 mb-md-0">
                  <div className="mb-3 m-md-3 mr-md-4">
                    <img src="./images/nodejs.png"className="item_img image_custom" alt="nodejs"/>
                  </div>
                  <div className="text-center text-md-left m-md-3">
                    <p className="item_title mb-1">Back End Development</p>
                    <p className="item_details mb-0">
							  Nodejs, Express, Services & APIs, System architecture

							</p>
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-start align-items-center px-md-4 mb-4 mb-md-0">
                  <div className="mb-3 m-md-3 mr-md-4">
                    <img src="./images/cloud__icon.png" className="item_img image_custom" alt="cloud"/>
                  </div>
                  <div className="text-center text-md-left m-md-3">
                    <p className="item_title mb-1">Databases</p>
                    <p className="item_details mb-0">SQL,MongoDB</p>
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-start align-items-center px-md-4 mb-4 mb-md-0">
                  <div className="mb-3 m-md-3 mr-md-4">
                    <img src="./images/databases.png" className="item_img image_custom" alt="databases" />
                  </div>
                  <div className="text-center text-md-left m-md-3">
                    <p className="item_title mb-1">Cloud</p>
                    <p className="item_details mb-0">AWS</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center justify-content-center py-5 px-lg-3 px-xl" style={{backgroundColor: "#DE6834",paddingRight: "2rem !important",paddingLeft: "5rem !important",}}>
              <div class="container">
                <div style={{ height: "240px;" }} class="row">
                  <div style={{ alignItems: "flex-start !important;" }} class="col-6 d-flex flex-column align-items-center" >
                    <div class="text-left">
                      <p class="box_item_title mb-0">12</p>
                      <p class="box_item_details">
                        Weeks of
                        <br /> Program
                      </p>
                    </div>
                  </div>
                  <div
                    style={{ alignItems: "flex-start !important;" }}
                    class="col-6 d-flex flex-column align-items-center"
                  >
                    <div style={{textAlign:"center"}}>
                      <p class="box_item_title mb-0">80+</p>
                      <p class="box_item_details">LIVE Learning Sessions</p>
                    </div>
                  </div>
                  <div
                    style={{ alignItems: "flex-start !important;" }}
                    class="col-6 d-flex flex-column align-items-center"
                  >
                    <div style={{textAlign:"center"}}>
                      <p class="box_item_title mb-0">10+</p>
                      <p class="box_item_details">
                        Technologies to Learn from
                      </p>
                    </div>
                  </div>
                  <div
                    style={{ alignItems: "flex-start !important;" }}
                    class="col-6 d-flex flex-column align-items-center"
                  >
                    <div class="text-left">
                      <p class="box_item_title mb-0">10+</p>
                      <p class="box_item_details" style={{textAlign:"center"}}>
                        LIVE
                        <br />
                        Projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
