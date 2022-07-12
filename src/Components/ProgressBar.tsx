import React, { useEffect } from "react";

interface IProps {
  progress: number;
  total: number;
}

const ProgressBar: React.FunctionComponent<IProps> = (props) => {
  console.log(props.progress, props.total);

  let percent: number = props.progress * 100;
  percent = percent / props.total;

  return (
    <div className="progress-bar rounded bg-mygrey-400 w-[100%]">
      <InnerProgress percent={percent} />
    </div>
  );
};

interface ProgressProps {
  percent: number;
}

const InnerProgress: React.FunctionComponent<ProgressProps> = (props) => {
  useEffect(() => {}, [props.percent]);

  return (
    <div className={`py-0.5 bg-white rounded w-[` + props.percent + `%]`}></div>
  );
};

export default ProgressBar;
