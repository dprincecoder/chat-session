import { Box, Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import closeIcon from "../../imgs/close.svg";
import promptIcon from "../../imgs/prompts.svg";
import singleUploadIcon from "../../imgs/uploaderSingle.svg";
import PromptActions from "../PromptActions";
interface PromptModalProps {
  handleClose: () => void;
}

const PromptModal: React.FC<PromptModalProps> = ({ handleClose }) => {
  const [returnClick, setReturnClick] = useState("promptModal");
  function ComponentToRender() {
    switch (returnClick) {
      case "prompModal":
        return (
          <div
            style={{
              display: "flex",
              width: "279px",
              padding: "16px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
              borderRadius: "8px",
              background: "#1F3D70",
              bottom: "4.5rem",
              position: "absolute",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <div
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  fontFamily: "Arial",
                  fontWeight: "700",
                  lineHeight: "18px",
                  textTransform: "uppercase",
                }}
              >
                Available actions
              </div>
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
                sx={{ marginRight: "0px" }}
              >
                <img src={closeIcon} />
              </IconButton>
            </Box>
            <Button
              variant="contained"
              startIcon={<img src={singleUploadIcon} />}
              fullWidth
              sx={{
                background: " #4C618C",
              }}
            >
              Upload a new file
            </Button>
            <Button
              sx={{
                background: " #4C618C",
              }}
              variant="contained"
              startIcon={<img src={promptIcon} />}
              fullWidth
              onClick={() => setReturnClick("promptActions")}
            >
              Use Prompt actions
            </Button>
          </div>
        );
      case "promptActions":
        return <PromptActions handleClose={handleClose} />;
      case "uploadModal":
        return <p>uploader</p>;
      default:
        return (
          <div
            style={{
              display: "flex",
              width: "279px",
              padding: "16px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
              borderRadius: "8px",
              background: "#1F3D70",
              bottom: "4.5rem",
              position: "absolute",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <div
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  fontFamily: "Arial",
                  fontWeight: "700",
                  lineHeight: "18px",
                  textTransform: "uppercase",
                }}
              >
                Available actions
              </div>
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
                sx={{ marginRight: "0px" }}
              >
                <img src={closeIcon} />
              </IconButton>
            </Box>
            <Button
              variant="contained"
              startIcon={<img src={singleUploadIcon} />}
              fullWidth
              sx={{
                background: " #4C618C",
              }}
            >
              Upload a new file
            </Button>
            <Button
              sx={{
                background: " #4C618C",
              }}
              variant="contained"
              startIcon={<img src={promptIcon} />}
              fullWidth
              onClick={() => setReturnClick("promptActions")}
            >
              Use Prompt actions
            </Button>
          </div>
        );
    }
  }
  return <ComponentToRender />;
};

export default PromptModal;
