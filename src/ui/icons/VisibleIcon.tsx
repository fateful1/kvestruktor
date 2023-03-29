import React from 'react'

import { IIcon } from '@/models/IIcon'

const VisibleIcon = (props: IIcon) => {
    const { width = 25, height = 24, color = '#006666' } = props
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.5 4C16.0878 4 19.2554 6.43241 22.0113 11.1435L22.2172 11.5011L22.5 12L22.0113 12.8565C19.2554 17.5676 16.0878 20 12.5 20C8.91215 20 5.74464 17.5676 2.98874 12.8565L2.78282 12.4989L2.5 12L2.78282 11.5011C5.58652 6.55556 8.82245 4 12.5 4ZM12.5 6C9.79692 6 7.22829 7.91554 4.80532 12C7.22829 16.0845 9.79692 18 12.5 18C15.1297 18 17.6289 16.1901 19.987 12.3447L20.1948 12.0001L19.9867 11.6553C17.6249 7.80768 15.1259 6 12.5 6ZM12.5 9C14.1569 9 15.5 10.3431 15.5 12C15.5 13.6569 14.1569 15 12.5 15C10.8431 15 9.5 13.6569 9.5 12C9.5 10.3431 10.8431 9 12.5 9Z"
                fill={color}
            />
        </svg>
    )
}

export default VisibleIcon