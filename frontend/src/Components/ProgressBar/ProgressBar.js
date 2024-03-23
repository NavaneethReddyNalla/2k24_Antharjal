import React from "react";

function ProgressBar({ bgcolor, progress, height }) {
  const Parentdiv = {
    height: height,
    width: "80%",
    backgroundColor: "whitesmoke",
    borderRadius: 20,
    margin: 20,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 20,
    textAlign: "right",
  };

  const progresstext = {
    padding: 2,
    color: "black",
    fontWeight: 900,
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
  );
}

export default ProgressBar;
