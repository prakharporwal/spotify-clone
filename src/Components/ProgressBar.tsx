import React, { useEffect } from "react";
import "./ProgressBar.css";

interface IProps {
  progress: number;
  total: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProgressBar: React.FunctionComponent<IProps> = (props) => {
  useEffect(() => {
    console.log(props.progress.toString());
  });

  return (
    // <div className="progress-bar bg-mygrey-400 rounded h-1 w-full overflow-hidden">
    //   <div
    //     className={`inner-bar rounded bg-white h-1`}
    //     style={{ width: `${props.progress.toString()}%` }}
    //   ></div>
    // </div>
    <>
      <input
        type={"range"}
        className="bg-transparent cursor-pointer relative w-full hidden"
        onChange={props.onChange}
      ></input>
      <div className="progress-bar relative bg-mygrey-400 rounded h-1 w-full box-border overflow-hidden">
        <span
          className="inner-bar absolute bg-white hover:bg-mygreen rounded h-1"
          style={{ width: `${props.progress.toString()}%` }}
          onChange={props.onChange}
        ></span>
      </div>
    </>
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
