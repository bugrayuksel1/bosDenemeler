import LoginForm from "../forms/LoginForm";
import styles from "./styles/card.module.css";
import Button from "../ui/Button";
const Card = ({ children, title }) => {
  return (
    <div className={styles.container}>
      {title && <h2>{title}</h2>}
      {children}
      <div className={styles.ustKat}>
        <h2>Join the movement</h2>
        <h5>
          Bring Change with your Code. Contribute to the open-source community.
        </h5>
        <Button>Sign In</Button>
      </div>
      <div>
        <LoginForm />
      </div>
      <div></div>
    </div>
  );
};
export default Card;
