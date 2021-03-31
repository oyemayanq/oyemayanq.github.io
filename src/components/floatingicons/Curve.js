import React from "react";

const Curve = ({
  colStart = 0,
  colEnd = 0,
  rowStart = 0,
  rowEnd = 0,
  color,
  speed,
}) => {
  let gridCol = "auto";
  let gridRow = "auto";
  if (colStart) {
    gridCol = `${colStart}/${colEnd}`;
  }
  if (rowStart) {
    gridRow = `${rowStart}/${rowEnd}`;
  }
  return (
    <svg
      data-speed={speed}
      data-rotate={0}
      height="2.2rem"
      width="2.2rem"
      style={{
        gridColumn: gridCol,
        gridRow: gridRow,
        justifySelf: "center",
        alignSelf: "center",
      }}
      className="layer"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 511.999 511.999"
    >
      <path
        fill={color}
        d="M498.524,246.289c37.946-67.933-8.537-149.5-85.88-157.205l-28.232-2.813c-20.648-2.059-39.019-11.017-54.264-28.128
       c-53.11-59.611-152.169-45.064-184.82,26.765c-7.941,17.466-22.298,31.44-40.428,39.344l-39.773,17.34
       c-63.457,27.666-84.861,104.38-44.848,159.184c26.809,36.718,32.583,42.522,37.129,59.229l12.532,46.073
       c8.074,29.679,28.956,54.59,57.294,68.344c29.496,14.319,63.739,15.172,93.948,2.349l5.35-2.271
       c15.901-6.75,33.991-8.387,50.932-4.616l82.048,18.269c79.989,17.811,150.375-51.635,132.539-127.826l-10.384-44.351
       c-4.203-17.954-1.524-36.781,7.544-53.012L498.524,246.289z M472.337,231.663l-9.314,16.675
       c-12.722,22.776-16.473,49.226-10.562,74.477l10.384,44.35c13.028,55.651-39.265,104.524-96.815,91.71l-82.047-18.269
       c-23.661-5.27-48.205-2.617-69.173,6.286l-5.35,2.271c-22.235,9.44-47.43,8.81-69.13-1.722
       c-20.542-9.97-35.65-27.916-41.448-49.234L86.35,352.136c-6.233-22.923-15.073-32.375-41.847-69.045
       c-28.723-39.343-13.176-94.04,32.61-114l39.774-17.34c24.937-10.873,44.734-30.203,55.746-54.429
       c23.658-52.047,96.394-62.688,135.118-19.225c20.444,22.948,45.808,35.245,73.686,38.022l28.232,2.813
       C466.029,124.547,499.494,183.05,472.337,231.663z"
      />
    </svg>
  );
};

export default Curve;