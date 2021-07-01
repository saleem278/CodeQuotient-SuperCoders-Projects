import React from "react";

export default function Section9() {
  return (
    <section id="success-stories-section" className="py-4 py-md-5">
      <div className="container text-center my-4 my-lg-5">
        <p className="section_heading_two mb-0">
          Some thoughts from our learners
        </p>
      </div>
      <div className="container-fluid d-none d-md-block">
        <div className="px-5 mx-xl-5">
          <div className="d-flex flex-row justify-content-start align-items-start flex-wrap flex-md-nowrap mb-4">
            <div className="m-2">
              <div className="img_placeholder text-center rounded">
                <img
                  src="./images/raman.jpg"
                  style={{ width: "100px", height: "100px" }}
                  alt="user"
                />
              </div>
            </div>
            <div className="m-2 ml-4">
              <p className="attestant_title">Raman Sharma</p>
              <p className="attestant_testimony">
                You can’t find better instructors when it comes to learning
                software development. Not only they are great teachers with
                reputable Software Engineer resumes, but they are great guys
                that you end up becoming good friends with. I highly recommend
                CodeQuotient to anyone considering a training & placement
                program.
              </p>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-start align-items-start flex-wrap flex-md-nowrap mb-4">
            <div className="m-2">
              <div className="img_placeholder rounded text-center">
                <img
                  src="./images/rahul.jpg"
                  style={{ width: "100px", height: "100px" }}
                  alt="user"
                />
              </div>
            </div>
            <div className="m-2 ml-4">
              <p className="attestant_title">Rahul Dixit</p>
              <p className="attestant_testimony">
                CodeQuotient has been by far one of the best experiences I’ve
                had so far in my life. A place with a great community and
                wonderful teachers. I’m pretty sure I learned more in three
                months there than I did during my entire 4 years at college. I
                made great friends, and Arun sir is a great mentor.
              </p>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-start align-items-start flex-wrap flex-md-nowrap mb-4">
            <div className="m-2">
              <div className="img_placeholder rounded text-center">
                <img
                  src="./images/shubham.jpg"
                  style={{ width: "100px", height: "100px" }}
                  alt="user"
                />
              </div>
            </div>
            <div className="m-2 ml-4">
              <p className="attestant_title">Shubham Verma</p>
              <p className="attestant_testimony">
                The knowledge, connections, and opportunities I’ve gained
                fromthe CodeQuotient experience well exceeded my
                expectations.CodeQuotient was one of the best professional
                decisions I’ve ever made.
              </p>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-start align-items-start flex-wrap flex-md-nowrap mb-4">
            <div className="m-2">
              <div className="img_placeholder rounded text-center">
                <img
                  src="./images/saleem.jpg"
                  style={{ width: "100px", height: "100px" }}
                  alt="user"
                />
              </div>
            </div>
            <div className="m-2 ml-4">
              <p className="attestant_title">Mohammad Saleem</p>
              <p className="attestant_testimony">
                The instructors not only experienced, but proficient
                insimplifying complex ideas for students. For example, debugging
                which I always found uninteresting and complex, turned out to be
                fun interactive session than a simple Q/A.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid d-md-none">
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
                      <div className="img_placeholder rounded text-center">
                        <img className="image_custom"
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
                        friends with. I highly recommend CodeQuotient to anyone
                        considering a training & placement program.
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
                        CodeQuotient has been by far one of the best experiences
                        I’ve had so far in my life. A place with a great
                        community and wonderful teachers. I’m pretty sure I
                        learned more in three months there than I did during my
                        entire 4 years at college. I made great friends, and
                        Arun sir is a great mentor.
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
                        gained fromthe CodeQuotient experience well exceeded my
                        expectations.CodeQuotient was one of the best
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
                        complex, turned out to be fun interactive session than a
                        simple Q/A.
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
    </section>
  );
}
