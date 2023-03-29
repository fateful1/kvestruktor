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
        disabled = false,
    } = props

    return (
        <button
            className={classNames(
                styles.rootButton,
                className,
                styles[backgroundColor],
                { [styles.large]: size === 'large' },
                { [styles.small]: size === 'small' },
                { [styles.disabled]: disabled }
            )}
            type={type}
            onClick={!disabled ? onClick : null}
            disabled={disabled}
        >
            {icon && icon}
            {title}
        </button>
    )
}

export default Button