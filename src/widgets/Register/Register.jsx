import React, { useState } from "react";
import styles from "./Register.module.scss";
import RegisterForm from "../../entities/RegisterForm/RegisterForm";
import RegisterButton from "../../shared/RegisterButton/RegisterButton";
import Gender from "../../entities/Gender/Gender";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  // states
  const [showMore, setShowMore] = useState(false);
  const [choosedGender , setChoosedGender] = useState(false);
  const [value , setValue] = useState("");

  // functions
  const handleShowMore = () => setShowMore(!showMore);
  const handleGenderChange = (gender) => {
    setChoosedGender(gender);
  };
  return (
    <div className={styles.register}>
      <div className={styles.register_flex}>
        <h3 className={styles.register_title}>Sign up to Mument</h3>
        {!showMore ? (
        <>
          <RegisterForm
            title={"Email"}
            labelId={"email"}
            placeholder={"Your email"}
            type={"text"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
           <RegisterForm
          title={"Make up your password"}
          labelId={"password"}
          placeholder={"Your password"}
          type={"password"}
        />
        </>
        ) : (
            <>
            <FontAwesomeIcon icon={faArrowLeft} className={styles.icon} onClick={handleShowMore}/>
            <RegisterForm
              title={"Name"}
              labelId={"name"}
              placeholder={"Your name"}
              type={"text"}
            />
             <RegisterForm
              title={"Date of Birth"}
              labelId={"date"}
              placeholder={"Your Date of Birth"}
              type={"date"}
            />
            <Gender onChange={handleGenderChange}/>
            </>
        )}
        {!showMore ? 
        <RegisterButton onClick={handleShowMore}>Move on</RegisterButton>
        :
        <RegisterButton>Sign up</RegisterButton>
        }
      </div>
    </div>
  );
};

export default Register;
