import React from "react";

function Section6() {
  return (
    <section id="partnersSection">
      <div className="container text-center my-5">
        <p className="section_heading_one mb-0">Our alumini works at</p>
        <p className="section_text">
          Some of the companies that our learners have successfully been placed
          at
        </p>
      </div>
      <div className="container-fluid d-none d-md-block pt-4">
        <div className="row">
          <div className="col-12 mb-5">
            <div className="row">
              <div className="col d-flex justify-content-center">
                <div className="img_placeholder rounded">
                  <img src="./images/Amazon.svg" alt="Amazon"/>
                </div>
              </div>
              <div className="col d-flex justify-content-center">
                <div className="img_placeholder rounded">
                  <img src="./images/samsung.svg" alt="samsung" />
                </div>
              </div>
              <div className="col d-flex justify-content-center">
                <div className="img_placeholder rounded">
                  <img src="./images/OYO.png" alt="oyo"/>
                </div>
              </div>
              <div className="col d-flex justify-content-center">
                <div className="img_placeholder rounded">
                  <img src="./images/1mg.png" alt="1mg" />
                </div>
              </div>
              <div className="col d-flex justify-content-center">
                <div className="img_placeholder rounded">
                  <img src="./images/nutanix.png" alt="nutanix"/>
                </div>
              </div>
              <div className="col d-flex justify-content-center">
                <div className="img_placeholder rounded">
                  <img src="./images/posist.jpg" alt="posist"/>
                </div>
              </div>
              <div className="col d-flex justify-content-center">
                <div className="img_placeholder rounded">
                  <img src="./images/gojek.png"  style={{width: "220px",position: "relative",left: "-70px"}} alt="gojek"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid d-md-none mb-5">
        <div
          id="partnersCarousel"
          className="carousel slide testimonialsCarousel"
          data-ride="carousel"
        >
          <div class="row">
            <div class="col-1 d-flex justify-content-center align-items-center prev__control">
              <a href="#partnersCarousel" role="button" data-slide="prev">
                <span class="carousel__control" aria-hidden="true">
                <i class="fa fa-caret-left"></i>
                </span>
              </a>
            </div>

            <div class="col-10 carousel__preview">
              <div class="carousel-inner">
                <div class="carousel-item">
                  <div class="row">
                    <div class="col d-flex justify-content-center">
                      <div class="img_placeholder rounded">
                        <img
                          src="./images/Amazon.svg"
                          alt="companies-logo"
                        />
                      </div>
                    </div>

                    <div class="col d-flex justify-content-center">
                      <div class="img_placeholder rounded">
                        <img
                          src="./images/samsung.svg"
                          alt="companies-logo"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="carousel-item active">
                  <div class="row">
                    <div class="col d-flex justify-content-center">
                      <div class="img_placeholder rounded">
                        <img
                          src="./images/OYO.png"
                          alt="companies-logo"
                        />
                      </div>
                    </div>

                    <div class="col d-flex justify-content-center">
                      <div class="img_placeholder rounded">
                        <img
                          src="./images/1mg.png"
                          alt="companies-logo"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="row">
                    <div class="col d-flex justify-content-center">
                      <div class="img_placeholder rounded">
                        <img
                          src="./images/nutanix.png"
                          alt="companies-logo"
                        />
                      </div>
                    </div>

                    <div class="col d-flex justify-content-center">
                      <div class="img_placeholder rounded">
                        <img
                          src="./images/posist.jpg"
                          alt="companies-logo"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="row">
                    <div class="col d-flex justify-content-center">
                      <div class="img_placeholder rounded">
                        <img
                          style={{width: "220px",position: "relative",left: "-70px;"}}
                          src="./images/gojek.png"
                          alt="companies-logo"
                        />
                      </div>
                    </div>

                    <div class="col d-flex justify-content-center">
                      <div class="img_placeholder rounded">
                        <img
                          src="./images/posist.jpg"
                          alt="companies-logo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-1 d-flex justify-content-center align-items-center next__control">
              <a href="#partnersCarousel" role="button" data-slide="next">
                <span class="carousel__control" aria-hidden="true">
                <i class="fa fa-caret-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section6;
