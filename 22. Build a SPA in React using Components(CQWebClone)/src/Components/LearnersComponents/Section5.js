import React from "react";
import {Link} from "react-router-dom";
export default function Section5() {
  return (
    <section id="presentationSection">
      <div className="container text-center my-5">
        <p className="heading_two mb-0">Best way to learn is by building Projects</p>
        <p className="text_one">These are the kind of projects you'll build in this program!</p>
      </div>
      <div className="projects-showcase-container">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-sm-6 col-md-4 col-xl-3 projects-res-mobile">
            <Link style={{textDecoration:"none"}}>
              <div className="img_placeholder rounded">
                <img src="./images/pac-man-2.jpg" alt="pac-man"/>
              </div>
              <div className="mt-3">
                <p className="project_title mb-1">Pac-Man</p>
                <p className="project_details">Build the legendary game for the old age of computers</p>
              </div>
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-xl-3 projects-res-mobile">
          <Link style={{textDecoration:"none"}}>
              <div className="img_placeholder rounded">
                <img src="./images/pportfolio.jpg" alt="portfolio"/>
              </div>
              <div className="mt-3">
                <p className="project_title mb-1">A personal portfolio</p>
                <p className="project_details">A beautiful portfolio to show off to potential employers.</p>
              </div>
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-xl-3 projects-res-mobile">
          <Link style={{textDecoration:"none"}}>
              <div className="img_placeholder rounded">
                <img src="./images/netflixclone.jpg" alt="netflixclone"/>
              </div>
              <div className="mt-3">
                <p className="project_title mb-1">Netflix Clone</p>
                <p className="project_details">Build a full blown Netflix clone in React JS.</p>
              </div>
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-xl-3 projects-res-mobile">
          <Link style={{textDecoration:"none"}}>
              <div className="img_placeholder rounded">
                <img src="./images/Jeopardy.jpg" alt="jeopardy"/>
              </div>
              <div className="mt-3">
                <p className="project_title mb-1">Jeopardy</p>
                <p className="project_details">Build a Jeopardy with CSS Grid and an API.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0 projects-showcase-description-container">
        <div className="row my-3 my-lg-3 py-4 mx-0 projects-showcase-description">
          <div className="col-xs-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-center px-4 px-sm-5 order-2 order-md-1 homepage-points-left-side">
            <div className="text-left text-lg-left">
              <h3 className="product_heading mb-1">Showcase your projects</h3>
              <p className="product_info">Increase your hiring potential via our unique live-profile.</p>
              <ul className="product_key_points text-left text-md-justify pl-4">
                <li>
                  Start building your Live-Profile from the first project you
                  code.
                </li>
                <li>
                  Allow recruiters to view and execute your projects instantly.
                </li>
                <li>
                  Show your work to our network of exclusive hiring partners.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-6 mb-3 mb-lg-0 pr-lg-4 d-flex align-items-center justify-content-center justify-content-lg-end order-1 order-md-2 pl-5 home-page-right-img-responsive">
            <img className="img-thumbnail image_custom p-0" src="./images/user_profile_3.png" alt="user"/>
          </div>
        </div>
      </div>
      <section className="bg_primary" id="highlightSection">
        <div className="container py-5 px-2">
          <div className="row">
            <div className="col-md-6">
              <div className="highlight-card-container">
                <div className="highlight-logo">
                  <img src="./images/group.svg" alt="group"/>
                </div>
                <div className="highlight-description">
                  <p className="text_one">Learn from Industry Professionals</p>
                  <p className="text_two">Our faculty has engineers from Google & Amazon.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="highlight-card-container">
                <div className="highlight-logo">
                  <img src="./images/certified.svg" alt="certified"/>
                </div>
                <div className="highlight-description">
                <p className="text_one">100% Certified Courses</p>
                  <p className="text_two">All our courses comes with a certification</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="highlight-card-container">
                <div className="highlight-logo">
                  <img src="./images/data.svg" alt="data"/>
                </div>
                <div className="highlight-description">
                <p className="text_one">Deep Analytics for Smarter Learning</p>
                  <p className="text_two">Measure your performance, and master your technique.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="highlight-card-container">
                <div className="highlight-logo">
                  <img src="./images/communication.svg" alt="communication"/>
                </div>
                <div className="highlight-description">
                <p className="text_one">Community Support</p>
                  <p className="text_two">Seek support from fellow coders, mentors. 24x7.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="presentationsection" className="py-1 pt-5">
        <div className="container text-center my-5">
          <p className="section_heading_one_1 mb-0">
            CodeQuotient is for dedicated learners only.
          </p>
        </div>
        <div className="container-fluid presentation_content mt-5 pt-lg-5">
          <div className="row">
            <div className="d-flex col-12 col-md-6 col-xl-4 justify-content-center pr-lg-5 mb-4">
              <div className="mx-2">
                <p className="usp_title mb-0">PROGRAMMING<br/> FUNDAMENTALS</p>
                <p className="usp_details">Our curriculum does not start at the beginner level, so we expect a potential student to be familiar with the basics of coding (loops, conditions, arrays, objects, functions) and be able to apply that knowledge to solve problems.</p>
              </div>
            </div>
            <div className="d-flex col-12 col-md-6 col-xl-4 justify-content-center pl-lg-5 mb-4">
            <div className="mx-2">
                <p className="usp_title mb-0">SINCERE <br/> LEARNERS</p>
                <p className="usp_details">We are looking for learners who can bring in creative attitude towards problem solving, and who don’t give up when faced with problems they can’t solve immediately.</p>
              </div>
            </div>
            <div className="d-flex col-12 col-md-6 col-xl-4 justify-content-center mb-4">
            <div className="mx-2">
                <p className="usp_title mb-0">TEAM <br/>PLAYERS</p>
                <p className="usp_details">From pair programming to working in a group, we are lookingfor learners who like to grow together with their batch,take on challenges, and solve problems collectively.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="divider_div1">
        <div>
          <div
            className="horizontal_divider my-4 my-lg-5 mx-4"
            style={{ marginTop: "0px !important" }}
          ></div>
        </div>
      </div>
    </section>
  );
}
