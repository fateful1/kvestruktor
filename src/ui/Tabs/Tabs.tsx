import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import classNames from 'classnames'
import styles from './Tabs.module.scss'

interface ITabs {
	options: string[]
	containerClassName?: string
	labelClassName?: string
	label?: string
	defaultValue?: number
	labelHint?: string | JSX.Element
	onChange: Dispatch<SetStateAction<number>>
	onBlur?: () => void
}

const Tabs = (props: ITabs) => {
	const { options, defaultValue, containerClassName, labelClassName, label, labelHint, onChange } =
		props

	const [activeTab, setActiveTab] = useState(
		defaultValue && (defaultValue > options.length || defaultValue < options.length)
			? defaultValue
			: 0
	)

	useEffect(() => {
		onChange(activeTab)
	}, [activeTab])

	return (
		<div className={classNames(styles.root, containerClassName)}>
			{label && (
				<div className={styles.labelContainer}>
					<label className={classNames(styles.label, labelClassName)}>{label}</label>
					{labelHint && labelHint}
				</div>
			)}
			<div className={styles.options}>
				{options.map((x, index) => {
					return (
						<div
							key={index}
							className={classNames(styles.tab, activeTab === index ? styles.active : '')}
							onClick={() => setActiveTab(index)}
							style={{
								width: `${100 / options.length}%`,
								color: activeTab === index ? '#FFFFFF' : '',
							}}
						>
							{x}
						</div>
					)
				})}
				<div
					className={styles.activeTab}
					style={{
						width: `calc(${100 / options.length}% - 8px)`,
						transform:
							activeTab !== 0 ? `translateX(calc(${activeTab} * 100% + (${activeTab} * 8px)))` : '',
					}}
				></div>
			</div>
		</div>
	)
}

export default Tabs
