import Link from "next/link";
import styles from "@/app/styles/services.module.css";
import Image from "next/image";
import { useState } from "react";

export const ServiceCard = (props) => {
  const [bgColor, setBgColor] = useState("white");
  const [btnBg, setBtnBg] = useState("block");

  function handleMouseOver() {
    setBgColor("#0b2464");
		setBtnBg("#35426453");
  }

  function handleMouseOut() {
    setBgColor("white");
		setBtnBg("linear-gradient(90deg, #0b2464 100%, #0b2464 50%) var(--_p, 50%)")
  }

  return (

    <div className={`col-lg-4 col-sm-12`}>
      <div className={styles.serviceCard}>
        <div
          className={styles.serviceCardItem}
          onMouseOver={handleMouseOver}
          style={{ backgroundColor: bgColor }}
          onMouseOut={handleMouseOut}
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
            <Image src={props.icon} alt="" height={50} width={50} />
          </div>
          <div className={styles.cardContent}>
            <div className={styles.title}>
              <h3>{props.title}</h3>
            </div>
            <div className="content">
              <p>{props.content}</p>
            </div>
            <div className={styles.vmBtn}>
              <button className="btn2" style={{background: btnBg}}>
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
