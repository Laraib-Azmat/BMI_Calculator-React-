import React, { useRef, useState } from "react";

import manImg from "../../assets/men_img.png";
import womenImg from "../../assets/woman_img.png";

import Button from "../UI/Button";
import styles from "./Inputs.module.css";
import { useNavigate } from "react-router-dom";

const Inputs = (props) => {
  const heightRef = useRef();
  const weightRef = useRef();

  const [gender, setGender] = useState("male");

  let navigate = useNavigate();
  const malehandler = () => {
    setGender("male");
  };

  const femaleHandler = () => {
    setGender("female");
  };

  const formHandler = (e) => {
    e.preventDefault();


    if (weightRef.current.value !== "" && heightRef.current.value !== "") {
      const height = heightRef.current.value / 100;
    const weight = weightRef.current.value;
      let results = weight / Math.pow(height, 2);
      let ansr = results.toFixed(1);

      props.storeAnswer(gender, ansr);

      navigate("/Calculate/result");
      weightRef.current.value="";
      heightRef.current.value="";
    } else {
      alert("Inputs can't be empty. Please Enter some data!!");
    }
  };
  return (
    <form onSubmit={formHandler}>
      <h2 className={styles["gender_text"]}>Select your Gender</h2>

      <div className={styles.gender}>
        <div
          onClick={malehandler}
          className={gender === "male" ? styles.colorDiv : ""}
        >
          <img
            className={`${styles.male} ${styles.gender_img}`}
            src={manImg}
            alt="ManImage"
          />
        </div>
        <div
          onClick={femaleHandler}
          className={gender === "female" ? styles.colorDiv : ""}
        >
          <img
            className={`${styles.female} ${styles.gender_img}`}
            src={womenImg}
            alt="womenImage"
          />
        </div>
      </div>

      <div className={styles.weight}>
        <label>
          Enter your weight in Kg
          <input
            ref={weightRef}
            type="number"
            min={0}
            className={styles.weightInput}
          />
        </label>
      </div>

      <div className={styles.height}>
        <label>
          Enter your height in cm
          <input
            ref={heightRef}
            type="number"
            min={0}
            className={styles.heightInput}
          />
        </label>
      </div>

      <div className={styles.btns}>
        <Button type="submit">Calculate</Button>

        <Button type="reset">Reset</Button>
      </div>
    </form>
  );
};

export default Inputs;
