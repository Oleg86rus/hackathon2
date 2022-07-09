import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({ percent, color, types, children }) => {
  const circleClass = () => (types === "circle" ? " circle" : "");

  return (
    <div className="progressBar">
      <h2 className="progress__title">{children}</h2>
      <div className={"progress__bar" + circleClass()}>
        {types === "bar" ? (
          <div
            className="progress__inner"
            style={{ backgroundColor: color, width: `${percent}%` }}
          >
            <p className="progres__percent">{percent}%</p>
          </div>
        ) : (
          <div className={"progress__inner" + circleClass()}>
            <p className={"progres__percent" + circleClass()}>{percent}%</p>
          </div>
        )}
      </div>
      {types === "circle" && (
        <svg version="1.1" width="160px" height="160px">
          <defs>
            <linearGradient id="gradientColor">
              <stop offset="0%" stopColor="#e91e63" />
              <stop offset="100%" stopColor="#673ab7" />
            </linearGradient>
          </defs>
          <circle
            strokeDashoffset={472 - (472 / 100) * percent}
            cx="80"
            cy="80"
            r="70"
            strokeLinecap="round"
          />
        </svg>
      )}
    </div>
  );
};

ProgressBar.defaultProps = {
  types: "bar",
};

ProgressBar.propTypes = {
  percent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  types: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default ProgressBar;
