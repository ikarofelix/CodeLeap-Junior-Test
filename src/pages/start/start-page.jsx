import "./start-page-styles.css";
import CodeLeapLogo from "../../assets/logo/codeleap_logo_black.png";

export const StartPage = () => (
  <div className="start-page">
    <img className="absolute-middle" loading="eager" src={CodeLeapLogo} alt="CodeLeap logo" />
  </div>
);
