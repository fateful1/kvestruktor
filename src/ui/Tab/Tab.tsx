import React from "react";
import styles from './Tab.module.scss'
import classNames from "classnames";

interface ITab {
    title: string
    icon: JSX.Element
    disabled?: boolean
}

const Tab = (props: ITab) => {
    const { title, icon, disabled = false } = props
    return (
        <div className={classNames(styles.tab, { [styles.disabled]: disabled })}>
            <div className={styles.tab__icon}>{icon}</div>
            <div className={styles.tab__title}>{title}</div>
        </div>
    )
}

export default Tab