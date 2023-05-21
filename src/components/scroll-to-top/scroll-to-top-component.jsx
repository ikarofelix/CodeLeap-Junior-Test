import ScrollToTopIcon from "../../assets/scroll-to-top/scroll-to-top-icon.svg";

export const ScrollToTopComponent = () => (
  <div
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="option scroll-to-top-container"
  >
    <img src={ScrollToTopIcon} alt="Scroll-to-top icon" />
  </div>
);
