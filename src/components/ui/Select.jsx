const Select = ({ children, defaultValue = "1", onChange }) => {
  return (
    <select defaultValue={defaultValue} onChange={onChange}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
        <option key={number} value={number}>
          {number}
        </option>
      ))}
    </select>
  );
};
export default Select;
