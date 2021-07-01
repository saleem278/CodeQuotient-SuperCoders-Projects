import React from "react";

export default function Section8() {
  return (
    <>
    <section id="batches-section" className="py-4 py-md-5">
      <div className="container text-center my-5">
        <p className="section_heading_one_1 mb-0">Program Fees and Batches</p>
      </div>
      <div className="container-fluid px-md-5 my-5">
        <div className="row d-flex align-items-end justify-content-around">
          <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
            <div style={{ minWidth: "60%", overflow: "auto" }}>
              <table className="table table-borderless table-hover">
                <thead>
                  <tr>
                    <th
                      className="table_heading pl-2 pl-lg-5"
                      style={{ color: "#333333" }}
                    >
                      Batches
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-2 py-3 pl-lg-5">
                      January 11, 2021
                    </td>
                    <td className="px-2 py-3">3 months</td>
                    <td className="px-2 py-3 text-success">Started</td>
                  </tr>
                  <tr className="table-active">
                    <td className="px-2 py-3 pl-lg-5">
                      February 15, 2021
                    </td>
                    <td className="px-2 py-3">3 months</td>
                    <td className="px-2 py-3 text-warning">Filling Fast</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-3 pl-lg-5">
                      March 22,2021
                    </td>
                    <td className="px-2 py-3">3 months</td>
                    <td className="px-2 py-3 text-success">Seats Available</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
            <div style={{ minWidth: "75%" }}>
              <div className="card shadow border-light">
                <div className="card-body px-3 py-4 p-md-5 text-center text-md-left">
                  <p className="card-title mb-0">FEE</p>
                  <div className="text-center text-md-left">
                    <span className="program_price mr-3">Rs 9,999* + GST</span>
                  </div>
                  <p className="batch_session">*Only for Februrary 15, Batch</p>
                  <div className="mt-4">
                    <a target="_blank" href="/apply">
                      <button class="btn btn_custom">Apply Now</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="horizontal_divider after_batches mx-5"></div>
    </>
  );
}
