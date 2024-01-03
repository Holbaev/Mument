import React from "react";
import { useState } from "react";
import styles from "./Gender.module.scss";

const Gender = ({onChange}) => {
  // states
  const [isCheckedMale, setIsCheckedMale] = useState(false);
  const [isCheckedFemale, setIsCheckedFemale] = useState(false);
  // functions

  const handleCheckboxChange = (gender) => {
    if (gender === "M") {
      setIsCheckedMale(!isCheckedMale);
      setIsCheckedFemale(false);
    } else if (gender === "F") {
      setIsCheckedFemale(!isCheckedFemale);
      setIsCheckedMale(false);
    }
    onChange(gender);
  };

  return (
    <div className={styles.gender}>
        <h3 className={styles.gender_title}>Choose your gender</h3>
    <div className={styles.gender_container}>
      <label>
        <input
          type="checkbox"
          checked={isCheckedMale}
          onChange={() => handleCheckboxChange("M")}
        />
        Man
      </label>
      <label>
        <input
          type="checkbox"
          checked={isCheckedFemale}
          onChange={() => handleCheckboxChange("F")}
        />
        Woman
      </label>
    </div>
    </div>
  );
};

export default Gender;
