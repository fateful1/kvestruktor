import React from 'react'

import { IIcon } from '@/models/IIcon'

const CardsIcon = (props: IIcon) => {
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
                d="M10 14C10.5523 14 11 14.4477 11 15V21C11 21.5523 10.5523 22 10 22H3C2.44772 22 2 21.5523 2 21V15C2 14.4477 2.44772 14 3 14H10ZM21 9C21.5523 9 22 9.44772 22 10V21C22 21.5523 21.5523 22 21 22H14C13.4477 22 13 21.5523 13 21V10C13 9.44772 13.4477 9 14 9H21ZM10 2C10.5523 2 11 2.44772 11 3V11C11 11.5523 10.5523 12 10 12H3C2.44772 12 2 11.5523 2 11V3C2 2.44772 2.44772 2 3 2H10ZM21 2C21.5523 2 22 2.44772 22 3V6C22 6.55228 21.5523 7 21 7H14C13.4477 7 13 6.55228 13 6V3C13 2.44772 13.4477 2 14 2H21Z"
                fill={color}
            />
        </svg>

    )
}

export default CardsIcon