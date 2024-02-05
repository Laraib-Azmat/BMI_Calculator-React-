import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
    return (
        <div className={styles.notFound}>
        <h1>404 - Page Not Found</h1>
        <p>Oops! It seems like the page you are looking for does not exist.</p>
        <p>
          Return to <Link to="/">Home</Link>
        </p>
      </div>
    );
}

export default NotFound;