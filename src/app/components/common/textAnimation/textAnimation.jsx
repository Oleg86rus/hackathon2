import React from "react";

const TextAnimation = ({text}) => {
  const textLength = text.length;
  const styleAnimation = {
    width: `${textLength}ch`,
    animation: `typing 2s steps(${textLength}), blink .5s step-end alternate`
  };

  return (
    <div className="typing-demo mt-5" style={styleAnimation}>
      {text}
    </div>
  );
};

export default TextAnimation;