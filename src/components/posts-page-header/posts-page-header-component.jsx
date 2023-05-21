import LogoutIcon from "../../assets/logout/logout-icon.svg";

export const PostsPageHeaderComponent = () => {
  const logoutUser = () => {
    localStorage.removeItem("username");
    window.location.reload();
  };

  return (
    <div className="page-header">
      <h1 className="page-header-title">CodeLeap Network</h1>
      <div onClick={logoutUser} className="option page-header-logout-container">
        <h4>Logout</h4>
        <img src={LogoutIcon} alt="Logout icon" />
      </div>
    </div>
  );
};
