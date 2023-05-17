import React, { useState } from "react";
import styles from "./Objects.module.scss";
import { PixiObjects } from "@/components/Objects/index";
import Image from "next/image";

// @ts-ignore
function Objects({ title, content }) {
  const [isActive, setIsActive] = useState(false);
  return isActive ? (
    <div>
      <div
        className={styles.active_button}
        onClick={() => setIsActive(!isActive)}
      >
        <div>{title}</div>
        <div>
          <Image src={"/icons/arrow_up.svg"} width={18} height={10} alt={""} />
        </div>
      </div>
      <div className={styles.answer}>
        {content.map((e: any) => (
          <PixiObjects props={e} key={e.id} />
        ))}
      </div>
    </div>
  ) : (
    <div>
      <div className={styles.button} onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>
          <Image
            src={"/icons/arrow_down.svg"}
            width={18}
            height={10}
            alt={""}
          />
        </div>
      </div>
    </div>
  );
}
export default Objects;
