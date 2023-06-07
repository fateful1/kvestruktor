import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./Tabs.module.scss";

interface ITabs {
  options: string[];
  containerClassName?: string;
  labelClassName?: string;
  optionsClassName?: string;
  tabClassName?: string;
  activeTabClassName?: string;
  animationTabClassName?: string;
  label?: string;
  defaultValue?: number;
  labelHint?: string | JSX.Element;
  onClick: Dispatch<SetStateAction<number>>;
  onBlur?: () => void;
}

const Tabs = (props: ITabs) => {
  const {
    options,
    defaultValue = 0,
    containerClassName,
    labelClassName,
    optionsClassName,
    tabClassName,
    activeTabClassName,
    animationTabClassName,
    label,
    labelHint,
    onClick,
  } = props;

  const [activeTab, setActiveTab] = useState(
    defaultValue &&
      (defaultValue > options.length || defaultValue < options.length)
      ? defaultValue
      : 0
  );

  const changeTabHandler = (index: number) => {
    onClick?.(index);
    setActiveTab(index);
  };

  useEffect(() => {
    //onClick(activeTab)
  }, [activeTab]);

  return (
    <div className={classNames(styles.root, containerClassName)}>
      {label && (
        <div className={styles.labelContainer}>
          <label className={classNames(styles.label, labelClassName)}>
            {label}
          </label>
          {labelHint && labelHint}
        </div>
      )}
      <div className={classNames(styles.options, optionsClassName)}>
        {options.map((x, index) => {
          return (
            <div
              key={index}
              className={classNames(
                styles.tab,
                tabClassName,
                activeTab === index ? styles.active : "",
                activeTab === index ? activeTabClassName : ""
              )}
              onClick={() => changeTabHandler(index)}
              style={{
                width: `${100 / options.length}%`,
                color: activeTab === index ? "#FFFFFF" : "",
              }}
            >
              {x}
            </div>
          );
        })}
        <div
          className={classNames(styles.activeTab, animationTabClassName)}
          style={{
            width: `calc(${100 / options.length}% - 8px)`,
            transform:
              activeTab !== 0
                ? `translateX(calc(${activeTab} * 100% + (${activeTab} * 8px)))`
                : "",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Tabs;
