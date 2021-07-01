import React, { useEffect } from "react";
import {Link} from "react-router-dom";

export default function Blog() {
  useEffect(() => {
    document.title = "Blog | CodeQuotient";
  }, []);
  return (
    <div
      class="heading_one text-center"
      style={{ color: "#de6834", marginTop: "50px", fontSize: "40px" }}
    >
      Under Development <br />
      <Link to="/" className="btn btn_custom">
        Go Home
      </Link>
    </div>
  );
}
