import "./login-page-styles.css";

export const LoginPage = () => {
  const usernameSubmitHandler = (e) => {
    localStorage.setItem("username", e.target.username.value);
  };

  return (
    <div className="login-page absolute-middle">
      <h1 className="login-title">Welcome to CodeLeap network!</h1>
      <form className="login-form" onSubmit={usernameSubmitHandler}>
        <div className="login-group">
          <label className="login-username-label" htmlFor="username">
            Please enter your username
          </label>
          <input
            className="login-username-input"
            required
            id="username"
            type="text"
            placeholder="John Doe"
            maxLength="256"
          />
        </div>
        <div className="login-button">
          <button type="submit">ENTER</button>
        </div>
      </form>
    </div>
  );
};
