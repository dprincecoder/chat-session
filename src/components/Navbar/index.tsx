import {
  HelpOutline as HelpOutlineIcon,
  Search as SearchIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import dummyAvtar from "./avatar.svg";
const Navbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: "0px 6px 24px 0px rgba(0, 0, 0, 0.10);",
        backgroundColor: "#FFF",
        height: "64px",
        padding: "0 16px",
        color: "#000",
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ChatMate
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #F3F2F9",
              borderRadius: "6px",
              marginRight: "16px",
              paddingLeft: "8px",
              width: "421px",
            }}
          >
            <InputBase
              placeholder="Global Search"
              sx={{ ml: "8px", width: "160px" }}
              inputProps={{ "aria-label": "search" }}
            />
            <IconButton size="small" color="inherit" sx={{ p: "8px" }}>
              <SearchIcon />
            </IconButton>
          </div>
          <IconButton size="large" color="inherit">
            <SettingsIcon />
          </IconButton>
          <IconButton size="large" color="inherit">
            <HelpOutlineIcon />
          </IconButton>
          <Avatar alt="User Avatar" src={dummyAvtar} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
