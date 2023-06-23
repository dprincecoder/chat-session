import { Box, Container } from "@mui/material";
import React from "react";
import { Navbar, Sidebar } from "../../components";
import ChatSession from "../ChatSession";
import ChatsSession from "../ChatsSession";
import HomeScreen from "./HomeScreen";
interface MainScreenProps {
  children?: React.ReactNode;
}
const MainScreen: React.FC = ({ children }: MainScreenProps) => {
  function componentToRender() {
    switch (location.pathname) {
      case "/main":
        return <HomeScreen />;
      case "/chat-sessions":
        return <ChatsSession />;
      case "/chat-sessions/:id":
        return <ChatSession />;
      case "/analytics":
        return;
      case "/settings":
        return;
      default:
        return <HomeScreen />;
    }
  }

  return (
    <Box>
      {/* Navbar */}
      <Navbar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          height: "calc(100vh - 64px)",
          background: "#F8F9FA;",
        }}
      >
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <Container sx={{ overflow: "auto", height: "calc(100vh - 64px)" }}>
          {/* Dynamic content goes here */}
          {children ? children : componentToRender()}
        </Container>
      </Box>
    </Box>
  );
};

export default MainScreen;
