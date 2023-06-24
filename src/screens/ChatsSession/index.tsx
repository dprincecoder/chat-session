import { Search as SearchIcon } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  IconButton,
  InputBase,
  TablePagination,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CommonTable from "../../components/CommonTable";
import useChat from "../../components/useChat";

const ChatsSession: React.FC = () => {
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const { chatData, addNewDialogue, isLoading } = useChat();
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  const handleSort = (property: string) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (
    _: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleNewChat = () => {
    let messages: any = [];
    addNewDialogue(messages);
    navigate(`/chat-sessions/${chatData.length + 1}`);
  };

  return (
    <Container
      sx={{
        margin: "1rem auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "64",
          padding: "16px 32px",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
          background: "#FFF",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#2A2A2A",
            fontSize: "24px",
            fontFamily: "Arial",
            fontWeight: 700,
            lineHeight: "28px",
            textTransform: "uppercase",
          }}
        >
          Chat Sessions
        </Typography>
        <Button
          variant="contained"
          sx={{
            background: "#4282fe",
            color: "#FFF",
            borderRadius: "25px",
          }}
          onClick={handleNewChat}
        >
          New Chat
        </Button>
      </Box>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid #D4D4D4",
          borderRadius: "6px",
          marginRight: "16px",
          paddingLeft: "8px",
          width: "421px",
          background: "#FFF",
          margin: "16px 0",
        }}
      >
        <InputBase
          placeholder="Search"
          sx={{ ml: "8px", width: "160px" }}
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <IconButton size="small" color="inherit" sx={{ p: "8px" }}>
          <SearchIcon
            sx={{
              color: "#2A2A2A",
            }}
          />
        </IconButton>
      </div>
      <Box>
        <CommonTable
          tableData={chatData}
          page={page}
          rowsPerPage={rowsPerPage}
          searchKeyword={search}
        />
      </Box>

      <TablePagination
        component="div"
        rowsPerPageOptions={[5, 10, 25]}
        count={chatData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Container>
  );
};

export default ChatsSession;
