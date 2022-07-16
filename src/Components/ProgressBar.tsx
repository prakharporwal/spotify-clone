import React, { useEffect } from "react";
import "./ProgressBar.css";

interface IProps {
  progress: number;
  total: number;
}

const ProgressBar: React.FunctionComponent<IProps> = (props) => {
  useEffect(() => {
    console.log(props.progress.toString());
  });

  return (
    <div className="progress-bar bg-mygrey-400 rounded h-1 w-full overflow-hidden">
      <div
        className={`inner-bar rounded bg-white h-1`}
        style={{ width: `${props.progress.toString()}%` }}
      ></div>
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
