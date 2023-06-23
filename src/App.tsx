import { Route, Routes } from "react-router-dom";
import { LoginScreen, MainScreen } from "./screens";

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={LoginScreen} />
      <Route path="/main" Component={MainScreen} />
      <Route path="/chat-sessions" Component={MainScreen} />
      <Route path="/chat-sessions/:id" Component={MainScreen} />
    </Routes>
  );
};

export default App;
