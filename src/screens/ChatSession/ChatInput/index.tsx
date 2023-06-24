import {
  CheckCircle as CheckCircleIcon,
  Clear as ClearIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  IconButton,
  LinearProgress,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useChat from "../../../components/useChat";
import addIcon from "../imgs/addIcon.svg";
import closeIcon from "../imgs/close.svg";
import InsertDriveFileIcon from "../imgs/file.svg";
import SendIcon from "../imgs/sendIcon.svg";
import InsertDriveSuccessFileIcon from "../imgs/successFile.svg";
import CloudUploadIcon from "../imgs/uploader.svg";
import PromptModal from "./PromptModal";

const ChatInput: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [userText, setUserText] = useState<string>("");
  const navigate = useNavigate();
  const [toggleBox, setToggleBox] = useState<boolean>(true);
  const [openModal, setOpenModal] = useState(false);
  const { chatData, sendContinuousConversation, addNewDialogue } = useChat();
  const { id } = useParams<{ id: string }>();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setProgress(0);
      setCompleted(false);
      setUploading(true);
    }
  };

  const handleInputChange = (event: any) => {
    setUserText(event.target.value);
  };
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      handleFileChange({
        target: { files: [files[0]] },
      } as unknown as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const handleCancelUpload = () => {
    setFile(null);
    setProgress(0);
    setCompleted(false);
    setUploading(false);
  };

  const handleUpload = () => {
    if (file) {
      // Perform upload logic here
      // Simulating upload progress for demonstration
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 10;
        if (currentProgress > 100) {
          clearInterval(interval);
          setCompleted(true);
        }
        setProgress(currentProgress);
      }, 500);
    }
  };
  useEffect(() => {
    if (file) {
      handleUpload();
    }
  }, [file]);

  const handleSubmit = () => {
    if (userText) {
      const newMessage = {
        content: userText,
      };
      sendContinuousConversation(newMessage);
    }
    setUserText("");
  };
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setToggleBox(!toggleBox);
  };
  const conversation = chatData.find((item) => item.id === Number(id));

  return (
    <Container sx={{ margin: "1rem 0 0 0" }}>
      {toggleBox ? (
        <React.Fragment>
          {conversation?.messages.length === undefined && (
            <Box
              sx={{
                border: completed ? "2px dashed #6DC24B" : "2px dashed #4282FE",
                backgroundColor: "#F4FBFF",
                padding: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: "8px",
                position: "absolute",
                bottom: "4.5rem",
                width: "1000px",
              }}
              onDrop={handleDrop}
              onDragOver={(event) => event.preventDefault()}
            >
              {!file && (
                <>
                  <Box display="flex" alignItems="center">
                    <img src={CloudUploadIcon} />
                    <Box>
                      <Typography variant="body1">
                        Drag and drop your file here
                      </Typography>
                      <Typography variant="body2">
                        Limit 15MB per file. Supported files: .PDF, .DOCX,
                        .PPTX, .TXT, .XLSX
                      </Typography>
                    </Box>
                  </Box>
                  <Button
                    variant="outlined"
                    color="primary"
                    component="label"
                    sx={{
                      border: "2px solid #4282FE",
                      borderRadius: "15px",
                      height: 30,
                    }}
                  >
                    Browse Now
                    <input
                      type="file"
                      hidden
                      onChange={handleFileChange}
                      accept=".pdf,.docx,.pptx,.txt,.xlsx"
                    />
                  </Button>
                </>
              )}

              {file && !completed && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Box display="flex" alignItems="center">
                    <img src={InsertDriveFileIcon} />
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <Box>
                      <Typography variant="body1">{file.name}</Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={progress}
                      color="primary"
                    />
                    <Typography variant="body2">{`${progress}%`}</Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <IconButton color="primary" onClick={handleCancelUpload}>
                      <ClearIcon />
                    </IconButton>
                  </Box>
                </div>
              )}

              {file && completed && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img src={InsertDriveSuccessFileIcon} />
                    <Typography variant="body1">{file.name}</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <CheckCircleIcon sx={{ color: "#6DC24B", mr: 1 }} />
                    {/* <IconButton color="primary" onClick={handleCancelUpload}>
                <ClearIcon />
              </IconButton> */}
                  </Box>
                </Box>
              )}
            </Box>
          )}
        </React.Fragment>
      ) : (
        <PromptModal handleClose={handleCloseModal} />
      )}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid  #D4D4D4",

          marginTop: "1rem",
          padding: "8px",
          justifyContent: "space-between",
          // gap: "4px",
          alignSelf: "stretch",
          borderRadius: "8px",
          backgroundColor: "#fff",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <img
            src={toggleBox ? addIcon : closeIcon}
            onClick={() => {
              setToggleBox(!toggleBox);
            }}
          />
          <input
            type="text"
            value={userText}
            onChange={handleInputChange}
            placeholder="Ex: Can you summarize the background verification clause from the uploaded document"
            style={{
              border: "none",
              flex: 1,
              outline: "none",
              marginLeft: "5px",
            }}
          />
        </Box>
        <Button disabled={!userText.trim()} onClick={handleSubmit}>
          <img src={SendIcon} />
        </Button>
      </div>
    </Container>
  );
};

export default ChatInput;
