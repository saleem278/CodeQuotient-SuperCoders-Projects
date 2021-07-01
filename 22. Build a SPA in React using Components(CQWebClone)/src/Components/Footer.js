import React from "react";
import {Link} from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div id="footer">
        <footer>
          <div className="container py-4">
            <div className="row">
              <div className="col-md-5 col-sm-12 text-center text-md-left">
                <div>
                  <Link to="/" className="logo_link">
                    <span className="logo_text_part_one">code</span>
                    <span className="logo_text_part_two">quotient</span>
                  </Link>
                </div>
                <div>
                  <span>
                    All rights reserved<span id="currentYear">2021</span>.
                  </span>
                </div>
                <div style={{marginTop:"5px"}}>
                  <Link
                    target="_blank" rel="noopener noreferrer"
                    className="social_link"
                    href="https://www.facebook.com/codequotient"
                  >
                      <img src="./images/facebook.svg" className="social_link" alt="fb"/>
                  </Link>
                  <Link
                    target="_blank" rel="noopener noreferrer"
                    className="social_link"
                    href="https://www.youtube.com/channel/UCSMAqbYZ-VlNMcQa8eCF18w"
                  >
                      <img src="./images/youtube.svg" className="social_link" alt="utube"/>
                  </Link>
                  <Link
                    target="_blank" rel="noopener noreferrer"
                    className="social_link"
                    href="https://www.linkedin.com/company/codequotient/"
                  >
                        <img src="./images/linkedin.svg" className="social_link" alt="linkedin"/>
                  </Link>
                </div>
              </div>
              <div style={{zIndex:1}} className="col-md-7 col-sm-12 mt-4 py-md-auto text-center text-md-left">
                <div className="pull-right">
                    <Link href="/about" className="nav_link">
                        <span>About</span>
                    </Link>
                    <span className="link_separator mx-2">|</span>
                    <Link style={{cursor:"pointer"}} className="nav_link" href="/about">
                        <span>Contact</span>
                    </Link>
                    <span className="link_separator mx-2">|</span>
                    <Link href="#" className="nav_link">
                        <span>Privacy Policy</span>
                    </Link>
                    <span className="link_separator mx-2">|</span>
                    <Link href="#" className="nav_link">
                        <span>Terms and Conditions</span>
                    </Link>
                    <span className="link_separator mx-2">|</span>
                    <Link href="https://www.linkedin.com/company/codequotient" className="nav_link">
                        <span>We're Hiring!</span>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}