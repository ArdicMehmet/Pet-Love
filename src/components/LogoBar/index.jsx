import Icon from "../../components/Icons/index";
import "./styles.css";

const LogoBar = ({ textSize = "sm", textColor = "white", iconSize = "sm" }) => {
  return (
    <div className="logobar-container">
      <span className={`logobar-text-${textSize}`} style={{ color: textColor }}>
        petl
      </span>
      <div className="logobar-icon-container">
        <Icon name="heart" size={iconSize} />
      </div>

      <span className={`logobar-text-${textSize}`} style={{ color: textColor }}>
        ve
      </span>
    </div>
  );
};

export default LogoBar;
