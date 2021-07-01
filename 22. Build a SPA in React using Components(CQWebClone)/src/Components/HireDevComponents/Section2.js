import React from "react";

export default function Section2() {
  return (
    <section id="presentationSection" className="py-5 padding-mobile-none">
      <div className="text-center mt-5">
        <p className="heading">Why do companies hire CodeQuotient grads</p>
      </div>
      <div className="container-fluid pt-5">
        <div className="row d-flex justify-content-center mx-xl-5 companies-why-cq-responsive">
          <div className="d-flex col-12 col-md-6 col-xl-4 justify-content-center mb-4 border-right-companies">
            <div className="mx-2">
              <p className="usp_number mb-1">1</p>
              <p className="usp_title">
                We Select <br />
                Only the Best
              </p>
              <p className="usp_description">
                Only 10% are selected in our program after screening of
                thousands of applicants. We believe in seeing beyond technical
                skills, so the accepted candidates are verified for integrity
                and interpersonal skills.
              </p>
            </div>
          </div>
          <div className="d-flex col-12 col-md-6 col-xl-4 justify-content-center mb-4 border-right-companies">
            <div className="mx-2">
              <p className="usp_number mb-1">2</p>
              <p className="usp_title">CodeQuotient verified Developers</p>
              <p className="usp_description">
                {" "}
                Unlike other training programs, at CQ, learners work directly
                with our mentors for about 6 months, which places us in an
                exceptional position to make informed recommendations. Their
                Live-profiles showcase their verified projects (demos and code),
                which can be executable directly on our platform.
              </p>
            </div>
          </div>
          <div className="d-flex col-12 col-md-6 col-xl-4 justify-content-center mb-4">
            <div className="mx-2">
              <p className="usp_number mb-1">3</p>
              <p className="usp_title">Production Ready Programmers</p>
              <p className="usp_description">
                {" "}
                Projects are the Integral part of our courses. All learners
                build at least two market-ready applications using the latest
                technologies by the time they complete the course. Their work on
                live projects expose them to the challenges of the production
                environment and are ready to be productive from day one.
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div
            id="testimonialsCarousel"
            className="carousel slide testimonialsCarousel"
            data-ride="carousel"
          >
            <div className="row">
              <div className="col-1 d-flex justify-content-center align-items-center prev_control">
                <a href="#testimonialsCarousel" role="button" data-slide="prev">
                  <i className="fa fa-caret-left"></i>
                </a>
              </div>
              <div className="col-10 carousel_preview">
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="d-flex flex-column flex-md-row">
                      <div classname="align-self-center align-self-md-start m-2">
                        <div className="img_placeholder text-center rounded">
                          <img
                            src="./images/raman.jpg"
                            style={{ width: "100px", height: "100px" }}
                            alt="user"
                          />
                        </div>
                      </div>
                      <div className="m-2">
                        <p className="attestant_name text-center text-md-left mb-1">
                          Raman Sharma
                        </p>
                        <p className="attestant_testimony">
                          You can’t find better instructors when it comes to
                          learning software development. Not only they are great
                          teachers with reputable Software Engineer resumes, but
                          they are great guys that you end up becoming good
                          friends with. I highly recommend CodeQuotient to
                          anyone considering a training & placement program.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="d-flex flex-column flex-md-row">
                      <div classname="align-self-center align-self-md-start m-2">
                        <div className="img_placeholder text-center rounded">
                          <img
                            src="./images/rahul.jpg"
                            style={{ width: "100px", height: "100px" }}
                            alt="user"
                          />
                        </div>
                      </div>
                      <div className="m-2">
                        <p className="attestant_name text-center text-md-left mb-1">
                          Rahul Dixit
                        </p>
                        <p className="attestant_testimony">
                          CodeQuotient has been by far one of the best
                          experiences I’ve had so far in my life. A place with a
                          great community and wonderful teachers. I’m pretty
                          sure I learned more in three months there than I did
                          during my entire 4 years at college. I made great
                          friends, and Arun sir is a great mentor.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="d-flex flex-column flex-md-row">
                      <div classname="align-self-center align-self-md-start m-2">
                        <div className="img_placeholder text-center rounded">
                          <img
                            src="./images/shubham.jpg"
                            style={{ width: "100px", height: "100px" }}
                            alt="user"
                          />
                        </div>
                      </div>
                      <div className="m-2">
                        <p className="attestant_name text-center text-md-left mb-1">
                          Shubham Verma
                        </p>
                        <p className="attestant_testimony">
                          The knowledge, connections, and opportunities I’ve
                          gained fromthe CodeQuotient experience well exceeded
                          my expectations.CodeQuotient was one of the best
                          professional decisions I’ve ever made.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="d-flex flex-column flex-md-row">
                      <div classname="align-self-center align-self-md-start m-2">
                        <div className="img_placeholder text-center rounded">
                          <img
                            src="./images/saleem.jpg"
                            style={{ width: "100px", height: "100px" }}
                            alt="user"
                          />
                        </div>
                      </div>
                      <div className="m-2">
                        <p className="attestant_name text-center text-md-left mb-1">
                          Mohammad Saleem
                        </p>
                        <p className="attestant_testimony">
                          The instructors not only experienced, but proficient
                          insimplifying complex ideas for students. For example,
                          debugging which I always found uninteresting and
                          complex, turned out to be fun interactive session than
                          a simple Q/A.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1 d-flex justify-content-center align-items-center next_control">
                <a href="#testimonialsCarousel" role="button" data-slide="next">
                  <i className="fa fa-caret-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center px-5 my-5"></div>
        <div className="container-fluid d-none d-lg-block uni-partners"></div>
        <div
          id="partnersCarousel"
          className="d-lg-none carousel slide testimonialsCarousel"
          data-ride="carousel"
        ></div>
      </div>
    </section>
  );
}
