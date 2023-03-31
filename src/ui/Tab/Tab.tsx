import React from "react";
import styles from './Tab.module.scss'
import classNames from "classnames";

interface ITab {
    title: string
    icon: JSX.Element
    disabled?: boolean
    onClick: () => void
    isActive: boolean
}

const Tab = (props: ITab) => {
    const { title, icon, disabled = false, onClick, isActive } = props
    return (
        <div className={classNames(
            styles.tab,
            { [styles.disabled]: disabled },
            { [styles.tab__active]: isActive }
        )} onClick={onClick}>
            <div className={styles.tab__icon}>{icon}</div>
            <div className={styles.tab__title}>{title}</div>
        </div>
    )
}

export default Tab