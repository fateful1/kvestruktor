import React from "react";

import { IIcon } from "@/models/IIcon";

const DeleteIcon = (props: IIcon) => {
  const { width = 24, height = 24, color = "#333333" } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_707_651)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.5625 7.75C19.2874 7.75 19.875 8.25368 19.875 8.875V20.125C19.875 21.989 18.1121 23.5 15.9375 23.5H8.0625C5.88788 23.5 4.125 21.989 4.125 20.125V8.875C4.125 8.25368 4.71263 7.75 5.4375 7.75H18.5625ZM17.625 10H6.375V20.125C6.375 20.7463 7.0046 21.25 7.78125 21.25H16.2188C16.9954 21.25 17.625 20.7463 17.625 20.125V10ZM8.625 2.125C8.625 1.50368 9.12868 1 9.75 1H14.25C14.8713 1 15.375 1.50368 15.375 2.125V3.25H19.875C20.4963 3.25 21 3.75368 21 4.375C21 4.99632 20.4963 5.5 19.875 5.5H4.125C3.50368 5.5 3 4.99632 3 4.375C3 3.75368 3.50368 3.25 4.125 3.25H8.625V2.125Z"
          fill="#D22D25"
        />
        <rect x="8" y="12" width="2" height="7" rx="1" fill="#D22D25" />
        <rect x="11" y="12" width="2" height="7" rx="1" fill="#D22D25" />
        <rect x="14" y="12" width="2" height="7" rx="1" fill="#D22D25" />
      </g>
      <defs>
        <clipPath id="clip0_707_651">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DeleteIcon;
