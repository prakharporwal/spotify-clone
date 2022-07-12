import React, { useState } from "react";
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

  const [part, setPart] = useState(percent.toString());
  let item = "w-[" + part + "%]";
  return (
    <div className="progress-bar bg-mygrey-800 rounded h-1 w-full">
      <div className={`inner-bar rounded bg-white h-1 ${item}`}></div>
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
