import React from "react";

import { IIcon } from "@/models/IIcon";

const RedoIcon = (props: IIcon) => {
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
        d="M15 16.0001C14.1478 16.0001 13.7026 15.0145 14.2168 14.3775L14.2929 14.2929L16.584 12.0007C15.3147 10.7976 13.3017 10.0001 11 10.0001C7.08172 10.0001 4 12.3113 4 15.0001C4 15.5523 3.55228 16.0001 3 16.0001C2.44772 16.0001 2 15.5523 2 15.0001C2 11.0613 6.08172 8.00005 11 8.00005C13.8067 8.00005 16.341 8.99699 17.9997 10.585L20.2929 8.29294C20.8955 7.69037 21.9072 8.07238 21.994 8.88642L22 9.00005V15.0001C22 15.5129 21.614 15.9356 21.1166 15.9933L21 16.0001H15Z"
        fill={color}
      />
    </svg>
  );
};

export default RedoIcon;
