import React from "react";
import "./cprogress.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Cprogress = () => {
  const percentage = 66;
  return <CircularProgressbar value={percentage} text={`${percentage}%`} />;
};
export default Cprogress;
