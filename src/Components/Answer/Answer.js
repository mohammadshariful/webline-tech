import React from "react";
import { Accordion } from "react-bootstrap";
import porpsVSstate from "../../images/propVSstate.jpg";
import reactWork from "../../images/react-work.jpg";
import useStateWork from "../../images/useState-work.png";
const Answer = () => {
  return (
    <div className="my-2">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="1">
          <Accordion.Header> How does React work?</Accordion.Header>
          <Accordion.Body>
            <div className="row">
              <div className="col-lg-12">
                <div>
                  <img src={reactWork} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="my-2">
                  <p>lorem work</p>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How does useState work?</Accordion.Header>
          <Accordion.Body>
            <div className="row">
              <div className="col-lg-12">
                <div>
                  <img src={useStateWork} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="my-2">
                  <p>lorem2</p>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            What is the difference between props vs state?
          </Accordion.Header>
          <Accordion.Body>
            <div className="row">
              <div className="col-lg-12">
                <div>
                  <img src={porpsVSstate} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="my-2">
                  <div>
                    <h1>state</h1>
                  </div>
                  <div>
                    <h1>states</h1>
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Answer;
