
import styles from "./Button.module.css";

const Button = (props) => {
    return (
        <button type={props.type} className={styles.content}>
            {props.children}
       </button>
    );
}

export default Button;