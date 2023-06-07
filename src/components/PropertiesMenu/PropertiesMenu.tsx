import React, {useState} from "react";
import { useSelector } from "react-redux";
import Features from "@/components/PropertiesMenu/Features";
import Actions from "@/components/PropertiesMenu/Actions";
import { showCurrentId, showObjs } from "@/features/objSlice";
import { showBg } from "@/features/bgSlice";
import { showHandInfo } from "@/features/handsSlice";
import styles from "./PropertiesMenu.module.scss";
import classNames from "classnames";
import {Tabs} from "@/ui/Tabs";

const PropertiesMenu = () => {
  const objectList = useSelector(showObjs);
  const currentObjectId = useSelector(showCurrentId);
  const mode = useSelector(showHandInfo);
  const backgroundImage = useSelector(showBg);
  const [characteristicsIsOpen, setCharacteristicsIsOpen] = useState(true);

  return (
    <>
      {currentObjectId === null || mode === 1 ? null : (
        <div id="right-menu" className={styles.rightsidepanel}>
          <div className={styles.rightsidepanel__title}>
            {objectList[currentObjectId].name}
          </div>
          <div className={styles.rightsidepanel__content}>
            <Tabs
                options={['СВОЙСТВА','ПОВЕДЕНИЕ']}
                onClick={()=>{setCharacteristicsIsOpen(!characteristicsIsOpen)}}
                tabClassName={styles.rightsidepanel__tab}
                animationTabClassName={styles.rightsidepanel__tab_active}
                optionsClassName={styles.rightsidepanel__tab_options}
            />
            {characteristicsIsOpen ?
                <Features />
            :
                <Actions />
            }
          </div>
        </div>
      )}
    </>
  );
};

export default PropertiesMenu;

// export async function getServerSideProps(context) {
//
// }
