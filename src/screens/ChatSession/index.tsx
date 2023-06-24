import { ArrowBack } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import useChat from "../../components/useChat";
import ChatInput from "./ChatInput";

const ChatsSession: React.FC = () => {
  const { chatData, isLoading } = useChat();
  const { id } = useParams<{ id: string }>();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const conversation = chatData.find((item) => item.id === Number(id));

  return (
    <Container
      sx={{
        margin: "1rem auto",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "84px",
          padding: "10px 16px",
          flexShrink: 0,
          background: "#FFF",
        }}
      >
        <Box sx={{ display: "", alignItems: "center", gap: "8px" }}>
          <Link
            to="/chat-sessions"
            style={{
              display: "flex",
              padding: "4px 12px 4px 8px",
              alignItems: "center",
              gap: "4px",
              borderRadius: "50px",
              background: "#F4F4F4",
              width: "fit-content",
              marginBottom: "8px",
              fontSize: "14px",
            }}
          >
            <ArrowBack sx={{ color: "#2A2A2A" }} />
            All Chat Sessions
          </Link>
          <Typography
            variant="h4"
            sx={{
              color: "#2A2A2A",
              fontSize: "18px",
              fontFamily: "Arial",
              fontWeight: 700,
              lineHeight: "28px",
              textTransform: "uppercase",
            }}
          >
            Chat Session
          </Typography>
        </Box>
      </Box>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          height: "calc(65vh - 84px)",
          margin: "8px 0",
          width: "100%",
        }}
      >
        <Box
          sx={{
            overflow: "auto",
            height: "100%",
          }}
        >
          {conversation ? (
            conversation.messages.map((message: any) => (
              <div
                key={message.id}
                style={{
                  display: "flex",
                  padding: "4px 8px 4px 16px",
                  background: message.sender === "user" ? "#E5EAEB" : "#D6EBF8",
                  borderRadius: "8px",
                  width: "300px",
                  marginLeft: message.sender === "user" ? "auto" : "0",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "#2A2A2A",
                    fontSize: "14px",
                    fontFamily: "Arial",
                    lineHeight: "22px",
                  }}
                >
                  {message.content}
                </Typography>
              </div>
            ))
          ) : (
            <Typography variant="body1"></Typography>
          )}
        </Box>
      </div>
      <ChatInput />
    </Container>
  );
};

export default ChatsSession;
