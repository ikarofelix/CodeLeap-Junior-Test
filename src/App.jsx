import "./App.css";
import { StartPage } from "./pages/start/start-page";
import { LoginPage } from "./pages/login/login-page";
import { PostsPage } from "./pages/posts/posts-page";

import { selectUser } from "./redux/selectors/posts-selector";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(selectUser);

  return (
    <div>
      {!user && <StartPage />}
      {user ? <PostsPage /> : <LoginPage />}
    </div>
  );
}

export default App;
