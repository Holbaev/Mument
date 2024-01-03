import React from "react";
import Popup from "reactjs-popup";
import styles from "./ModalWindow.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const ModalWindow = ({ buttun, positions, children, title }) => {   

  return (
    <Popup
      trigger={buttun}
      position={positions || ["top", "bottom", "left", "right"]}
      modal
      nested
    >
        {(close) =>(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.modal_head}>
          <h3 className={styles.modal_title}>{title}</h3>
          <button className={styles.modal_close} onClick={close}>
            <FontAwesomeIcon className={styles.icon} icon={faClose} />
          </button>
        </div>
        <div className={styles.modal_body}>
        {children}
        </div>
      </div>
    </div>
        )}
    </Popup>
  );
};

export default ModalWindow;
