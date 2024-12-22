const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  label,
  name,
}) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
export default Input;
