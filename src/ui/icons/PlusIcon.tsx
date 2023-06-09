import React from "react";

import { IIcon } from "@/models/IIcon";

const PlusIcon = (props: IIcon) => {
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
        d="M19.521 13.228C20.0733 13.228 20.521 12.7802 20.521 12.228C20.521 11.6757 20.0733 11.228 19.521 11.228L12.5209 11.228L12.5209 4.22804C12.5209 3.67575 12.0732 3.22804 11.5209 3.22804C10.9686 3.22804 10.5209 3.67575 10.5209 4.22804L10.5209 11.228L3.52097 11.228C2.96869 11.228 2.52097 11.6757 2.52097 12.228C2.52097 12.7802 2.96869 13.228 3.52097 13.228L10.5209 13.228L10.5209 20.228C10.5209 20.7803 10.9686 21.228 11.5209 21.228C12.0732 21.228 12.5209 20.7803 12.5209 20.228L12.5209 13.228H19.521Z"
        fill={color}
      />
    </svg>
  );
};

export default PlusIcon;
