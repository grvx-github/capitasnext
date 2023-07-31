import Link from "next/link";
import styles from "@/app/styles/services.module.css";
import Image from "next/image";
import { useState } from "react";

export const ServiceCard = (props) => {
  const [bgColor, setBgColor] = useState("white");
  const [bgOp, setBgOp] = useState("white")
  const [btnBg, setBtnBg] = useState("block");
  const [dp, setDp] = useState("block");

  function handleMouseEnter() {
    setBgColor("#2f3e65d6");
		setBtnBg("white");
    setDp("none");
    setBgOp("")
  }

  function handleMouseLeave() {
    setBgColor("white");
    setBtnBg("linear-gradient(90deg, #2f3e65d6 100%, #2f3e65d6 50%) var(--_p, 50%)");
    setDp("block")
  }

  return (
    <div className={`col-lg-4 col-sm-12`}>
      <div className={styles.serviceCard}>
        <div
          className={styles.serviceCardItem}
          onMouseEnter={handleMouseEnter}
          style={{ backgroundColor: bgColor }}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={styles.serviceCardIcon}
            style={{ backgroundColor: bgColor }}
          >
            <Image
              className={styles.hoverIcon}
              src={props.hiddenIcon}
              alt=""
              height={50}
              width={50}
            />
            <Image
              src={props.icon}
              style={{ display: dp }}
              alt=""
              height={50}
              width={50}
            />
          </div>
          <div className={styles.cardContent}>
            <div className={`${styles.title} formula`}>
              <h3>{props.title}</h3>
            </div>
            <div className="content">
              <p>{props.content}</p>
            </div>
            <div className={styles.vmBtn}>
              <button
                className="btn2"
                style={{ background: btnBg, color: bgColor }}
              >
                <Link href="">READ MORE</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
