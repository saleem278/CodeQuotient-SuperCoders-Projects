import React,{useEffect} from "react";
import Section1 from "../Components/LearnersComponents/Section1";
import Section2 from "../Components/LearnersComponents/Section2";
import Section3 from "../Components/LearnersComponents/Section3";
import Section4 from "../Components/LearnersComponents/Section4";
import Section5 from "../Components/LearnersComponents/Section5";
import Section6 from "../Components/LearnersComponents/Section6";
import Section7 from "../Components/LearnersComponents/Section7";
import Section8 from "../Components/LearnersComponents/Section8";
import Section9 from "../Components/LearnersComponents/Section9";
function Learners() {
  useEffect(() => {
    document.title = "CodeQuotient - Learning and career platform for aspiring programmers."
 }, []);
  return (
    <>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Section7/>
        <Section8/>
        <Section9/>
    </>
  );
}

export default Learners;
