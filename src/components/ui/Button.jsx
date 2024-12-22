import styles from "./styles/button.module.css";
const Button = ({ onClick, type = "button", children, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={styles.button}
    >
      {children}
    </button>
  );
};
export default Button;
