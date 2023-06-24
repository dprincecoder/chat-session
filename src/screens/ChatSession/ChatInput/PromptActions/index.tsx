import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import closeIcon from "../../imgs/close.svg";
interface PromptModalProps {
  handleClose: () => void;
}

const PromptActions: React.FC<PromptModalProps> = ({ handleClose }) => {
  const styles = {
    heading: {
      color: "#FFF",
      fontSize: "11px",
      fontFamily: "Arial",
      fontWight: "700",
      lineHight: "12px",
      letterSpacing: "1px",
      textTransform: "uppercase",
    },
    heading2: {
      color: "#FFF",
      fontSize: "11px",
      fontFamily: "Arial",
      fontWight: "700",
      lineHight: "12px",
    },
    p: {
      fontSize: "12px",
      fontFamily: "Arial",
      lineHight: "18px",
      color: "#FFF",
    },
  };
  return (
    <div
      style={{
        display: "flex",
        width: "350px",
        padding: "16px",
        height: "65vh",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "16px",
        borderRadius: "8px",
        background: "#1F3D70",
        bottom: "4.5rem",
        position: "absolute",
        zIndex: "50",
      }}
    >
      <Box
        sx={{
          height: "100%",
          overflow: "auto",
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
            Prompt actions
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
        <div style={{ marginBottom: "5px" }}>
          <Typography sx={styles.heading}>Generate</Typography>
          <Box
            sx={{
              background: " #4C618C",
              width: "100%",

              borderRadius: "8px",
              marginBottom: "5px",
              padding: "4px 8px",
            }}
          >
            <Typography sx={styles.heading2}>/summary</Typography>
            <Typography sx={styles.p}>
              Get a summary of your current query
            </Typography>
          </Box>
          <Box
            sx={{
              background: " #4C618C",
              width: "100%",

              borderRadius: "8px",
              marginBottom: "5px",
              padding: "4px 8px",
            }}
          >
            <Typography sx={styles.heading2}>/extract</Typography>
            <Typography sx={styles.p}>
              Get an extract of your current query
            </Typography>
          </Box>
          <Box
            sx={{
              background: " #4C618C",
              width: "100%",

              borderRadius: "8px",
              marginBottom: "5px",
              padding: "4px 8px",
            }}
          >
            <Typography sx={styles.heading2}>/image</Typography>
            <Typography sx={styles.p}>
              Get an image of your current query
            </Typography>
          </Box>
        </div>
        <div style={{ marginBottom: "5px" }}>
          <Typography sx={styles.heading}>analyze</Typography>
          <Box
            sx={{
              background: " #4C618C",
              width: "100%",

              borderRadius: "8px",
              marginBottom: "5px",
              padding: "4px 8px",
            }}
          >
            <Typography sx={styles.heading2}>/documents</Typography>
            <Typography sx={styles.p}>
              Get a document of your current query
            </Typography>
          </Box>
          <Box
            sx={{
              background: " #4C618C",
              width: "100%",

              borderRadius: "8px",
              marginBottom: "5px",
              padding: "4px 8px",
            }}
          >
            <Typography sx={styles.heading2}>/data</Typography>
            <Typography sx={styles.p}>
              Get a data of your current query
            </Typography>
          </Box>
          <Box
            sx={{
              background: " #4C618C",
              width: "100%",

              borderRadius: "8px",
              marginBottom: "5px",
              padding: "4px 8px",
            }}
          >
            <Typography sx={styles.heading2}>/other</Typography>
            <Typography sx={styles.p}>
              Get other complement of your current query
            </Typography>
          </Box>
        </div>
        <div style={{ marginBottom: "5px" }}>
          <Typography sx={styles.heading}>Synthesize</Typography>
          <Box
            sx={{
              background: " #4C618C",
              width: "100%",

              borderRadius: "8px",
              marginBottom: "5px",
              padding: "4px 8px",
            }}
          >
            <Typography sx={styles.heading2}>/documents</Typography>
            <Typography sx={styles.p}>
              Get a document of your current query
            </Typography>
          </Box>
          <Box
            sx={{
              background: " #4C618C",
              width: "100%",

              borderRadius: "8px",
              marginBottom: "5px",
              padding: "4px 8px",
            }}
          >
            <Typography sx={styles.heading2}>/data</Typography>
            <Typography sx={styles.p}>
              Get a data of your current query
            </Typography>
          </Box>
          <Box
            sx={{
              background: " #4C618C",
              width: "100%",

              borderRadius: "8px",
              marginBottom: "5px",
              padding: "4px 8px",
            }}
          >
            <Typography sx={styles.heading2}>/av</Typography>
            <Typography sx={styles.p}>
              Get a n AV of your current query
            </Typography>
          </Box>
        </div>
      </Box>
    </div>
  );
};

export default PromptActions;
