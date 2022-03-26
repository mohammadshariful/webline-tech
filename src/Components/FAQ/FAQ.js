import React from "react";
import reactImg from "../../images/react-img.jpg";
import Answer from "../Answer/Answer";
const FAQ = () => {
  return (
    <div className="faq-container mb-5">
      <h2 className="text-center">Frequency Ask Question</h2>
      <div className="container py-5">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6">
            <img src={reactImg} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6">
            <Answer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
