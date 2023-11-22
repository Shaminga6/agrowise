import React from "react";

const MySVGComponent = () => {
  return (
    <>
      <div class="box">
        <div></div>
      </div>

      <svg
        style={{ visibility: "visible", position: "relative" }}
        width="100"
        height="100"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="round">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
        {/* Add other SVG elements or components here */}
      </svg>
    </>
  );
};

export default MySVGComponent;
