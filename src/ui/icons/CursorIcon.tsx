import React from "react";

import { IIcon } from "@/models/IIcon";

const CursorIcon = (props: IIcon) => {
  const { width = 24, height = 24, color = "#000000" } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7949 21.4238C12.0257 21.917 12.6087 22.1349 13.1064 21.914L15.9663 20.6446C16.2117 20.5356 16.403 20.3325 16.4971 20.081C16.5912 19.8295 16.5802 19.5507 16.4666 19.3074L14.1268 14.2978L18.0429 14.1295C18.4546 14.1118 18.8132 13.8435 18.9463 13.4536C19.0795 13.0638 18.9599 12.6321 18.6451 12.3663L6.64507 2.23588C6.3477 1.98484 5.93169 1.92912 5.57874 2.09306C5.22578 2.25701 5 2.61083 5 3V18.4561C5 18.863 5.24658 19.2293 5.62357 19.3825C6.00057 19.5357 6.43278 19.4451 6.71661 19.1535L9.42888 16.3669L11.7949 21.4238Z"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CursorIcon;
