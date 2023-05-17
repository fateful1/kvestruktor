import React from 'react'
import classNames from 'classnames'

import styles from './Button.module.scss'

interface IButtonProps {
    className?: string
    backgroundColor?: 'green' | 'lightgreen'
    onClick?: (e: React.MouseEvent) => void
    title: string
    icon?: JSX.Element
    size?: 'large'|'small'
    type?: null | 'submit'
    disabled?: boolean
    id?: string
    style?: Object
}
const Button = (props: IButtonProps) => {
    const {
        className,
        backgroundColor,
        onClick,
        title,
        icon,
        size = 'large',
        type,
        id,
        disabled = false,
        style,
    } = props

    return (
        <button
            className={classNames(
                styles.rootButton,
                className,
                styles[backgroundColor],
                { [styles.large]: size === 'large' },
                { [styles.small]: size === 'small' },
                { [styles.disabled]: disabled },
            )}
            style={style}
            type={type}
            onClick={!disabled ? onClick : null}
            disabled={disabled}
            id={id}
        >
            {icon && icon}
            {title}
        </button>
    )
}

export default Button