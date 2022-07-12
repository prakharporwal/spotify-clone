import React from "react";
import "./ProgressBar.css";

interface IProps {
  progress: number;
  total: number;
}

const ProgressBar: React.FunctionComponent<IProps> = (props) => {
  console.log(props.progress, props.total);

  let percent: number = props.progress * 100;
  percent = percent / props.total;
  console.log(percent, props);
  return (
    <div className="progress-bar border">
      <span
        className="inner-bar border"
        style={{
          display: "inline-block",
          width: "60% !important",
        }}
      ></span>
    </div>
  );
};

// interface ProgressProps {
//   percent: number;
// }

// const InnerProgress: React.FunctionComponent<ProgressProps> = (props) => {
//   useEffect(() => {}, [props.percent]);

//   return (
//
// };

export default ProgressBar;
