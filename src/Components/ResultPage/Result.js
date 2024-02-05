import ResultDesc from "./ResultDesc";

import styles from "./Result.module.css";

const Result = (props) => {
  return (
    <section className={styles["section_2"]}>
      <h1>Here is your calculated BMI</h1>
      <div className={styles.figure}>
        <div className={styles["speedometer_container"]}>
          <div className={styles.center_point}></div>
          <div className={styles.bottom_hide}></div>
          <div className={styles.arrow_container}>
            <div
              className={styles["arrow-wrapper"]}
              style={{ transform: `rotate(${props.result}deg)` }}
            >
              <div className={styles.arrow}></div>
            </div>
          </div>
          <div className={styles.center_hide}></div>
          <div
            className={`${styles.speedometer_scale} ${styles["scale-1"]}`}
          ></div>
          <div
            className={`${styles.speedometer_scale} ${styles["scale-2"]}`}
          ></div>
          <div
            className={`${styles.speedometer_scale} ${styles["scale-3"]}`}
          ></div>
          <div
            className={`${styles.speedometer_scale} ${styles["scale-4"]}`}
          ></div>
          <div
            className={`${styles.speedometer_scale} ${styles["scale-5"]}`}
          ></div>
          <div
            className={`${styles.speedometer_scale} ${styles["scale-6"]}`}
          ></div>
          <div
            className={`${styles.speedometer_scale} ${styles["scale-7"]}`}
          ></div>
          <div
            className={`${styles.speedometer_scale} ${styles["scale-8"]}`}
          ></div>
          <div
            className={`${styles.speedometer_scale} ${styles["scale-9"]}`}
          ></div>
          <div
            className={`${styles.speedometer_scale} ${styles["scale-10"]}`}
          ></div>
          <div
            className={`${styles.speedometer_scale} ${styles["scale-11"]}`}
          ></div>
          <div
            className={`${styles.speedometer_scale} ${styles["scale-12"]}`}
          ></div>
          <div
            className={`${styles.speedometer_scale} ${styles["scale-13"]}`}
          ></div>
          <div
            className={`${styles.speedometer_scale} ${styles["scale-14"]}`}
          ></div>
          <div
            className={`${styles.speedometer_scale} ${styles["scale-15"]}`}
          ></div>
          <div
            className={`${styles.speedometer_scale} ${styles["scale-16"]}`}
          ></div>
          <div
            className={`${styles.speedometer_scale} ${styles["scale-17"]}`}
          ></div>
          <div
            className={`${styles.speedometer_scale} ${styles["scale-18"]}`}
          ></div>
          <div
            className={`${styles.speedometer_scale} ${styles["scale-19"]}`}
          ></div>
        </div>
        <h4>
          Your BMI is: <span className={styles.bmi_value}>{props.result}</span>
          kg/m^2
        </h4>
      </div>

      <ResultDesc gender={props.gender} Result={props.result} />
    </section>
  );
};

export default Result;
