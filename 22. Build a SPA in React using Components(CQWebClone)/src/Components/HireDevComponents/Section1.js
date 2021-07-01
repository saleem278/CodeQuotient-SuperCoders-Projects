import React from 'react'
export default function Section1() {
    return (
        <section id="topSection" className="px-5 mx-md-5 py-5">
            <div className="row my-5 py-4 mr-0 margin-bottom-none-mobile" style={{height:"inherit"}}>
                <div className="col-12 col-lg-7 d-flex order-2 order-lg-1 mt-4 mt-lg-4 pr-xl-5 hire-talent-responsive">
                    <div className="my-auto">
                        <div className="text-center text-md-left">
                            <p className="heading" color="#DE6834">
                                Hire top tech talent.
                            </p>
                            <p className="subheading">
                            We are solving the problem of tech talent shortage by preparing the top students from colleges to become highly valuable tech professionals. We have built tools and processes to identify and train the extraordinary talent from these colleges.
                            </p>
                        </div>
                        <div className="text-center text-md-left my-5">
                            <button className="btn btn_custom btn-large">
                                <span className="header_btn_text">Get in touch</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-5 d-flex order-1 order-lg-2 responsive-heading-img-hide">
                    <div className="my-auto">
                        <img src="./images/p3.svg" className="img-thumbnail image_custom" alt="HireFirst"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
