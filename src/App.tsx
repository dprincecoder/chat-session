import { Route, Routes } from "react-router-dom";
import { ChatSession, LoginScreen, MainScreen } from "./screens";

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={LoginScreen} />
      <Route path="/main" Component={MainScreen} />
      <Route path="/chat-sessions" Component={MainScreen} />
      <Route
        path="/chat-sessions/:id"
        element={
          <MainScreen>
            <ChatSession />
          </MainScreen>
        }
      />
    </Routes>
  );
};

export default App;
