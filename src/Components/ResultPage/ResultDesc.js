import { useState, useEffect } from "react";
import styles from "./ResultDesc.module.css";

import underweight_man from "../../assets/underweight_man.png";
import normal_man from "../../assets/normal_man.png";
import overweight_man from "../../assets/overweight_man.png";
import obesed_man from "../../assets/obesed_man.png.png";
import underweight_woman from "../../assets/underweight_women.png";
import normal_woman from "../../assets/normal_woman.png";
import overweight_woman from "../../assets/overweight_woman.png";
import obesed_woman from "../../assets/obesed_woman.png.png";

const ResultDesc = (props) => {
  const [genderImg, setGenderImge] = useState(normal_man);
  const [desc, setDesc] = useState("Awesome job! Your BMI says you are normal");

  useEffect(() => {
    if (props.gender === "male"){
     
      if(props.Result <= 18.5) {
       
        setGenderImge(underweight_man);
        setDesc(
          " Warning: You're officially a lightweight champ! Time to add some snacks to your training routine. It's essential to maintain a balanced diet for overall health. Consider consulting with a nutritionist."
        );
      } else if (props.Result > 18.5 && props.Result <= 24.9) {
        setGenderImge(normal_man);
        setDesc(
          "Awesome job! Your BMI is in the normal range.You're in the healthy weight range. Keep up the good work with a balanced diet and regular exercise."
        );
      } else if (props.Result >= 25 && props.Result <= 29.9) {
        setGenderImge(overweight_man);
        setDesc(
          "Breaking news: Your BMI says you're overweight.'A small adjustment in lifestyle can make a big difference. Consider incorporating more physical activity and making mindful food choices"
        );
      } else {
        setGenderImge(obesed_man);
        setDesc(
          "Guess what? Your BMI just called you 'fluffy' – it's time to embrace the fluffiness revolution!. Its never too late to make positive changes. Consider consulting with a healthcare  to create a personalized plan for a healthier lifestyle."
        );
      }
    } else {
      console.log(props.Result);
      if (props.result <= 18.5) {
        setGenderImge(underweight_woman);
        setDesc(
          "Warning: You're officially a lightweight champ! Time to add some snacks to your training routine. It's essential to maintain a balanced diet for overall health. Consider consulting with a nutritionist."
        );
      } else if (props.Result > 18.5 && props.Result <= 24.9) {
        setGenderImge(normal_woman);
        setDesc(
          "Awesome job! Your BMI is in the normal range.You're in the healthy weight range. Keep up the good work with a balanced diet and regular exercise."
        );
      } else if (props.Result >= 25 && props.Result <= 29.9) {
        setGenderImge(overweight_woman);
        setDesc(
          "Breaking news: Your BMI says you're 'overweight.'A small adjustment in lifestyle can make a big difference. Consider incorporating more physical activity and making mindful food choices"
        );
      } else {
        setGenderImge(obesed_woman);
        setDesc(
          "Guess what? Your BMI just called you 'fluffy' – it's time to embrace the fluffiness revolution!. Its never too late to make positive changes. Consider consulting with a healthcare  to create a personalized plan for a healthier lifestyle."
        );
      }
    }
  }, [props.gender, props.result]);

  return (
    <div className={styles.bmi_results}>
      <div className={styles.bmi_gender_img}>
        <img src={genderImg} alt="" />
      </div>

      <h5 className={styles.bmi_answer}>{desc}</h5>
    </div>
  );
};

export default ResultDesc;
