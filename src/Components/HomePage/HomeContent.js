import image from "../../assets/image.jpg";
import styles from "./HomeContent.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const HomeContent = () => {
  return (
    <section className={styles.homepage}>
      <div className={styles["bmi_img"]}>
        <img src={image} alt="BMI-Calculato" />
      </div>

      <div className={styles["bmi_text"]}>
        <h1 className={styles.heading}>Calculate Your BMI</h1>
        <p className={styles.text}>
          Enter you height and weight to get valueable insights into your
          health. Let's calculate your BMI
        </p>
        <Link to={"/Calculate"} className={styles["start_btn"]}>
          Start <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </section>
  );
};

export default HomeContent;
