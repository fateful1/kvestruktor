import React from "react";

import { IIcon } from "@/models/IIcon";

const ImageIcon = (props: IIcon) => {
  const { width = 24, height = 24, color = "#333333" } = props;
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
        d="M19.6667 2C21.3236 2 22.6667 3.34315 22.6667 5V19C22.6667 20.6569 21.3236 22 19.6667 22H5.66675C4.00989 22 2.66675 20.6569 2.66675 19V5C2.66675 3.34315 4.00989 2 5.66675 2H19.6667ZM20.6667 12.302L16.4988 18.5547C16.191 19.0163 15.5731 19.1338 15.1208 18.838L15.0266 18.7682L9.85425 14.458L5.89475 20H19.6667C20.219 20 20.6667 19.5523 20.6667 19V12.302ZM19.6667 4H5.66675C5.11446 4 4.66675 4.44772 4.66675 5V18.278L8.85301 12.4188C9.16692 11.9793 9.76624 11.8737 10.208 12.159L10.3069 12.2318L15.452 16.5193L20.6667 8.696V5C20.6667 4.44772 20.219 4 19.6667 4ZM8.66675 6C9.77132 6 10.6667 6.89543 10.6667 8C10.6667 9.10457 9.77132 10 8.66675 10C7.56218 10 6.66675 9.10457 6.66675 8C6.66675 6.89543 7.56218 6 8.66675 6Z"
        fill={color}
      />
    </svg>
  );
};

export default ImageIcon;
