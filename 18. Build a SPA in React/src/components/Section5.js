import React, { Component } from "react";
import img from '../images/coupon.jpg';
export default class FifthSection extends Component {
  render() {
    return (
      <section id="coupon" class="section bg-light">
        <div class="container">
          <div class="gift-cards">
            <div>
              <img src={img} style={{width: '70%', borderRadius: '20%'}} alt="" />
            </div>
            <div>
              <h2>Coupons</h2>
              <p>
                You can apply different coupons to get extra discount on
                selected courses.Certain internet providers exploit the fact
                that fill text cannot be recognized by automatic search engines
                - meaningful information cannot be distinguished from
                meaningless: Target-generated dummy text mixed with a certain
                combination of search terms can lead to an increased frequency
                of visits by search machine users. As a consequence, advertising
                revenues, which rely on website 'hits', are increased.
              </p>
              <p>Already have Coupon?</p>
              <hr />
              <a href="#" class="text-secondary">
                <i class="fas fa-chevron-right"></i> Redeem
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
