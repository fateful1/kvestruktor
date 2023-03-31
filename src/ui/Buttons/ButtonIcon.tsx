import React from 'react'
import classNames from 'classnames'
import styles from './Button.module.scss'

interface IButtonIconProps {
    className?: string
    icon: React.ReactNode
    type?: 'submit'
    disabled?: boolean
    isClamping?: boolean
    onClick?: (e: React.MouseEventHandler<HTMLButtonElement>) => void
    isActive?: boolean
}

const ButtonIcon = (props: IButtonIconProps) => {
    const {
        className,
        onClick,
        icon,
        type,
        isClamping,
        disabled = false,
        isActive
    } = props

    return (
        <button
            className={classNames(
                styles.rootButton,
                styles.rootButtonIcon,
                className,
                { [styles.clamping]: isClamping },
                { [styles.rootButton__active]: isActive },
                { [styles.disabled]: disabled }
            )}
            type={type}
            onClick={!disabled ? onClick : null}
            disabled={disabled}
        >
            {icon}
        </button>
    )
}

export default ButtonIcon
