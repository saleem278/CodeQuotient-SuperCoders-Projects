import React from 'react'
import {Link} from "react-router-dom";

export default function Section7() {
    return (
        <section id="contactSection" className="p-5">
            <div className="row mr-0" style={{height:"inherit"}}>
                <div className="col-10 col-sm-8 col-lg-7 d-flex">
                    <div className="mx-5 my-auto px-5 responsive-contact">
                        <div>
                            <div className="mb-5">
                                <p className="heading mb-1">Intersted in Hiring</p>
                                <p className="subheading" style={{color:"white"}}>Drop us a line, and we'll get back to you within 24 hours.</p>
                            </div>
                            <div className="mb-4">
                                <p className="contact_type mb-1">Email</p>
                                <p className="contact_text">
                                    <Link style={{color:"inherit",textDecoration:"none"}} to="mailto:info@codequotient.com">info@codequotient.com</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2 col-sm-4 col-lg-5 d-flex justify-content-center">
                    <div className="my-auto pb-5">
                        <img src="./images/contact.svg" className="img-thumbnail img-thumbnail-3 " alt="contact"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
