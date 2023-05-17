import React from "react";

import { IIcon } from "@/models/IIcon";

const LayersDownIcon = (props: IIcon) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.2929 17.7088L11.293 20.7088L11.4049 20.8054L11.5158 20.8769L11.629 20.9306L11.7342 20.966L11.8253 20.9864L11.9411 21L12.0592 21L12.1748 20.9865L12.3129 20.9519L12.3668 20.9323L12.454 20.8931L12.5208 20.8557L12.6018 20.8006L12.6656 20.7482L12.7072 20.7088L15.7073 17.7088L15.7905 17.6146C16.0701 17.255 16.0701 16.7484 15.7905 16.3888L15.7073 16.2946L15.6131 16.2114C15.2535 15.9318 14.7469 15.9318 14.3873 16.2114L14.2931 16.2946L13 17.5867L13.0001 8.00173C13.0001 7.4889 12.6141 7.06623 12.1168 7.00846L12.0001 7.00173L11.8835 7.00846C11.4244 7.06178 11.0601 7.42603 11.0068 7.88511L11.0001 8.00173L11 17.5867L9.70715 16.2946L9.61294 16.2114C9.22064 15.9064 8.65339 15.9341 8.2929 16.2946C7.93241 16.6551 7.90468 17.2223 8.20971 17.6146L8.2929 17.7088Z"
        fill={color}
      />
      <path
        d="M8 11.5L4.1991 8.83937C3.62248 8.43573 3.63221 7.57852 4.21787 7.18809L11.4453 2.3698C11.7812 2.14587 12.2188 2.14587 12.5547 2.3698L19.7821 7.18809C20.3678 7.57852 20.3775 8.43573 19.8009 8.83937L16 11.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LayersDownIcon;