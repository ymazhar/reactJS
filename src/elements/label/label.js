import "./label.scss";

const Label = ({ id, children }) => (
  <label className={"label"} htmlFor={id}>
    {children}
  </label>
);

export default Label;
