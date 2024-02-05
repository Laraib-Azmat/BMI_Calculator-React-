import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Inputs from "./Inputs";
import Button from "../UI/Button";
import styles from "./CalculatePage.module.css";

const CalculatePage = (props) => {
  return (
    <section className={styles["calculate_page"]}>
      <header className={styles.header}>
        <Link style={{ width: "20%" }} to="/Home">
          <Button>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
        </Link>
        <h1 style={{ fontSize: "1.8rem" }}>Your Information</h1>
      </header>

      <Inputs storeAnswer={props.storeResult} />
    </section>
  );
};

export default CalculatePage;
