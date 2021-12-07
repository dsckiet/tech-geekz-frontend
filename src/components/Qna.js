import React from "react";
import "./qna.css";

function Qna() {
  return (
    <>
      <div>
        <h1 className="Qtitle">Question-n-answer</h1>
        <div className="Qcard">
          <h1 className="Question">What the fcuk is react?</h1>
          <div className="Qinfo">
            <div className="Qcircle"></div>
            <div>
              <span>bcsjdcb | </span>
              <span>category</span>
              <h2>Category</h2>
            </div>
          </div>
          <div className="answer">
            <input
              placeholder="Your answer"
              className="ans"
              type="text"
            ></input>
            <i class="far fa-paper-plane send"></i>
          </div>
        </div>
      </div>
      <div>
        <div className="Qcard">
          <h1 className="Question">What the fcuk is react?</h1>
          <div className="Qinfo">
            <div className="Qcircle"></div>
            <div>
              <span>bcsjdcb | </span>
              <span>category</span>
              <h2>Category</h2>
            </div>
          </div>
          <div className="answer">
            <input
              placeholder="Your answer"
              className="ans"
              type="text"
            ></input>
            <i class="far fa-paper-plane send"></i>
          </div>
        </div>
      </div>
      <div>
        <div className="Qcard">
          <h1 className="Question">What the fcuk is react?</h1>
          <div className="Qinfo">
            <div className="Qcircle"></div>
            <div>
              <span>bcsjdcb | </span>
              <span>category</span>
              <h2>Category</h2>
            </div>
          </div>
          <div className="answer">
            <input
              placeholder="Your answer"
              className="ans"
              type="text"
            ></input>
            <i class="far fa-paper-plane send"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Qna;
