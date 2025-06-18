import "./styles.css";
const Icon = ({ name, size = "sm" }) => {
  return (
    <svg className={`icon-${size}`} aria-hidden="true">
      <use xlinkHref={`#icon-${name}`} />
    </svg>
  );
};

export default Icon;
