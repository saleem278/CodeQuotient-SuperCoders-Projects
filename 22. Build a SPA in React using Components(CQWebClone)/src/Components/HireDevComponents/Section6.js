import React from "react";

export default function Section6() {
  return (
    <section id="offerHelpSection" className="py-5">
      <div className="text-center my-5">
        <p className="heading mb-0">How we can help you?</p>
        <p className="subheading px-5 mx-lg-5">
          We evaluate the requirements of our partners and match the best
          candidates for the selection process. Selected candidates are then
          engaged in one of these models
        </p>
      </div>
      <div className="container-fluid my-5 pt-md-4 pt-xl-5 px-xm-5">
        <div className="row d-flex justify-content-center mx-xl-5">
          <div className="d-flex col-12 col-sm-6 col-xl-4 justify-content-center mb-4">
            <div className="mx-2">
              <p className="usp_heading usp_heading_responsive">
                FULL TIME HIRES
              </p>
              <p className="usp_description usp_description_responsive">
                Select from a pool of immensely talented programmers who are
                learnt, vetted and specially trained to plugin straight into
                your ongoing projects.
              </p>
            </div>
          </div>
          <div className="d-flex col-12 col-sm-6 col-xl-4 justify-content-center mb-4">
            <div className="mx-2">
              <p className="usp_heading usp_heading_responsive">
                DEVELOPERS ON PREMISES
              </p>
              <p className="usp_description usp_description_responsive">
                Developers will be deployed to the partner’s location and work
                directly with their team incase your requirement is temporary,
                programmers stay on our pay roll.
              </p>
            </div>
          </div>
          <div className="d-flex col-12 col-sm-6 col-xl-4 justify-content-center mb-4">
            <div className="mx-2">
              <p className="usp_heading usp_heading_responsive">
                MANAGED REMOTE DEVELOPERS
              </p>
              <p className="usp_description usp_description_responsive">
                Managed developers who work fully integrated in your team,
                according to your processes and your projects. We just manage
                them in our office.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center my-5 px-5">
          <p className="heading">Our most common tech stacks are</p>
          <p className="text_two mb-5">
            React.js, Node.js, Python, Java, PHP, Android and React Native.
            <br />
            We can support additional technologies also depending on scope and
            availability.
          </p>
          <div>
            <div className="container-fluid d-md-block">
              <div className="row">
                <div className="col-12 col-lg-12 mb-5">
                  <div className="row">
                    <div className="col-6 col-sm-6 col-lg mb-3 d-flex justify-content-center">
                      <div className="rounded">
                        <img src="./images/react-2.svg" alt="companies" className="img_placeholder_md"/>
                      </div>
                    </div>
                    <div className="col-6 col-sm-6 col-lg mb-3 d-flex justify-content-center">
                      <div className="rounded">
                        <img src="./images/nodejs-icon.svg" alt="companies" className="img_placeholder_md"/>
                      </div>
                    </div>
                    <div className="col-6 col-sm-6 col-lg mb-3 d-flex justify-content-center">
                      <div className="rounded">
                        <img src="./images/python.png" alt="companies"className="img_placeholder_md"/>
                      </div>
                    </div>
                    <div className="col-6 col-sm-6 col-lg mb-3 d-flex justify-content-center">
                      <div className="rounded">
                        <img src="./images/android-logomark.svg" alt="companies" className="img_placeholder_md"/>
                      </div>
                    </div>
                    <div className="col-6 col-sm-6 col-lg mb-3 d-flex justify-content-center">
                      <div className="rounded">
                        <img src="./images/java-4.svg" alt="companies" className="img_placeholder_md"/>
                      </div>
                    </div>
                    <div className="col-6 col-sm-6 col-lg mb-3 d-flex justify-content-center">
                      <div className="rounded">
                        <img src="./images/php-1.svg" alt="companies" className="img_placeholder_md" style={{marginTop:"28px"}}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
