import "./styles/button.css";

const Button = ({ onClick, type = "button", disabled = false, children }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="button"
    >
      {children}
    </button>
  );
};
export default Button;
