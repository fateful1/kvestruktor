import React from 'react'

import { IIcon } from '@/models/IIcon'

const DragDotsIcon = (props: IIcon) => {
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
                d="M8 18C9.10457 18 10 18.8954 10 20C10 21.1046 9.10457 22 8 22C6.89543 22 6 21.1046 6 20C6 18.8954 6.89543 18 8 18ZM16 18C17.1046 18 18 18.8954 18 20C18 21.1046 17.1046 22 16 22C14.8954 22 14 21.1046 14 20C14 18.8954 14.8954 18 16 18ZM8 10C9.10457 10 10 10.8954 10 12C10 13.1046 9.10457 14 8 14C6.89543 14 6 13.1046 6 12C6 10.8954 6.89543 10 8 10ZM16 10C17.1046 10 18 10.8954 18 12C18 13.1046 17.1046 14 16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10ZM8 2C9.10457 2 10 2.89543 10 4C10 5.10457 9.10457 6 8 6C6.89543 6 6 5.10457 6 4C6 2.89543 6.89543 2 8 2ZM16 2C17.1046 2 18 2.89543 18 4C18 5.10457 17.1046 6 16 6C14.8954 6 14 5.10457 14 4C14 2.89543 14.8954 2 16 2Z" fill="#BDBDBD"/>
        </svg>

    )
}

export default DragDotsIcon