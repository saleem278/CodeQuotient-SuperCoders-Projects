import React,{useEffect} from 'react'
import Section1 from '../Components/HireDevComponents/Section1';
import Section2 from '../Components/HireDevComponents/Section2';
import Section3 from '../Components/HireDevComponents/Section3';
import Section4 from '../Components/HireDevComponents/Section4';
import Section5 from '../Components/HireDevComponents/Section5';
import Section6 from '../Components/HireDevComponents/Section6';
import Section7 from '../Components/HireDevComponents/Section7';
export default function HireDevPage() {
  useEffect(() => {
    document.title = "Hire Top developers | Codequotient"
 }, []);
    return (
        <>
          <Section1/>
          <div
            className="horizontal_divider mx-4"
            style={{ marginTop: "0px !important" }}
          ></div>
          <Section2/>
          <div
            className="horizontal_divider mx-4"
            style={{ marginTop: "0px !important" }}
          ></div>
          <Section3/>
          <div
            className="horizontal_divider mx-4"
            style={{ marginTop: "0px !important" }}
          ></div>
          <Section4/>
          <Section5/>
          <Section6/>

          <Section7/>
        </>
    )
}
