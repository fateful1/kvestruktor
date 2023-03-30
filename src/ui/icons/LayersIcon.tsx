import React from 'react'

import { IIcon } from '@/models/IIcon'

const LayersIcon = (props: IIcon) => {
    const { width = 24, height = 24, color = '#333333' } = props
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
                d="M12.3336 19.7983L20.7789 14.1681C21.2384 13.8617 21.8593 13.9859 22.1657 14.4454C22.4501 14.8721 22.3634 15.4379 21.9816 15.7619L21.8883 15.8322L12.8883 21.8322C12.5897 22.0312 12.2108 22.0533 11.8944 21.8985L11.7789 21.8322L2.7789 15.8322C2.31937 15.5258 2.1952 14.9049 2.50155 14.4454C2.78602 14.0187 3.34168 13.8812 3.78754 14.109L3.8883 14.1681L12.3336 19.7983L20.7789 14.1681L12.3336 19.7983ZM12.8883 2.16795L21.8883 8.16795C22.482 8.56377 22.482 9.43623 21.8883 9.83205L12.8883 15.8321C12.5524 16.056 12.1148 16.056 11.7789 15.8321L2.7789 9.83205C2.18517 9.43623 2.18517 8.56377 2.7789 8.16795L11.7789 2.16795C12.1148 1.94402 12.5524 1.94402 12.8883 2.16795ZM12.3336 4.20185L5.13638 9L12.3336 13.7981L19.5308 9L12.3336 4.20185Z"
                fill={color}
            />

        </svg>

    )
}

export default LayersIcon