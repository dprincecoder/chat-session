import {
  ChevronRight as ChevronRightIcon,
  Home as HomeIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useChat from "../useChat";
import BarChartIcon from "./imgs/analytics.svg";
import ChatIcon from "./imgs/chat.svg";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addNewDialogue, chatData } = useChat();

  const sidebarItems = [
    {
      path: "/main",
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      path: "/chat-sessions",
      text: "Chat Sessions",
      icon: <img src={ChatIcon} alt="Chat Icon" />,
    },
    {
      path: "",
      text: "Analytics",
      icon: <img src={BarChartIcon} alt="Analytics Icon" />,
    },
    {
      path: "",
      text: "Settings",
      icon: <SettingsIcon />,
    },
  ];
  const handleNewChat = () => {
    let messages: any = [];
    addNewDialogue(messages);
    navigate(`/chat-sessions/${chatData.length + 1}`);
  };
  return (
    <Box
      sx={{
        backgroundColor: "#1F1C61",
        color: "#FFF",
        height: "100%",
        width: "260px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "6px",
      }}
    >
      <Box>
        <List>
          {sidebarItems.map((item, index) => (
            <ListItem
              key={index}
              button={true}
              component={Link}
              to={item.path}
              sx={{
                borderBottom: "1px solid #FFF",
                color: location.pathname === item.path ? "#FFCD2E" : "#fff",
                padding: "12px 0",
              }}
            >
              <ListItemIcon
                sx={{
                  color: location.pathname === item.path ? "#FFCD2E" : "#fff",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
              {location.pathname === item.path && (
                <ChevronRightIcon
                  sx={{
                    color: location.pathname === item.path ? "#FFCD2E" : "#fff",
                  }}
                />
              )}
            </ListItem>
          ))}
        </List>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          padding: "16px 0",
        }}
      >
        {window.location.pathname !== "/main" && (
          <Button
            variant="contained"
            sx={{
              background: "#4282fe",
              color: "#FFF",
              borderRadius: "25px",
              width: "100%",
            }}
            onClick={handleNewChat}
          >
            New Chat
          </Button>
        )}
        <Typography
          variant="body2"
          align="center"
          sx={{ paddingBottom: "8px" }}
        >
          Powered by ChatMate
        </Typography>
      </Box>
    </Box>
  );
};

export default Sidebar;
