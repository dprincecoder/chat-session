import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dialogue } from "../../../configs";
import "./ChatSessionTable.css";
import arrUpdown from "./imgs/arrUpDown.svg";
import createdOn from "./imgs/createdOn.svg";

interface ChatSessionTableProps {
  tableData: Dialogue[];
  page: number;
  rowsPerPage: number;
}

const ChatSessionTable: React.FC<ChatSessionTableProps> = ({
  tableData,
  page,
  rowsPerPage,
}) => {
  const [orderBy, setOrderBy] = useState("chatSummary");
  const [order, setOrder] = useState<"asc" | "desc">("asc");

  const handleSort = (column: string) => {
    if (orderBy === column) {
      setOrder(order === "asc" ? "desc" : "asc");
    } else {
      setOrderBy(column);
      setOrder("asc");
    }
  };
  const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return new Date(date).toLocaleString("en-US", options);
  };
  const sortedData = [...tableData].sort((a, b) => {
    const aValue = new Date(a.messages[a.messages.length - 1].lastModified);
    const bValue = new Date(b.messages[b.messages.length - 1].lastModified);

    if (aValue < bValue) return order === "asc" ? -1 : 1;
    if (aValue > bValue) return order === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className="chat-table">
      <div className="table-header">
        <div
          className="table-cell chatsum"
          onClick={() => handleSort("chatSummary")}
        >
          Chat Summary
          <img src={arrUpdown} alt="arrUpdown" />
        </div>
        <div
          className="table-cell created"
          onClick={() => handleSort("createdOn")}
        >
          Created On
          <img src={createdOn} alt="createdOn" />
        </div>
        <div
          className="table-cell lastMod"
          onClick={() => handleSort("lastModified")}
        >
          Last Modified
          <img src={arrUpdown} alt="arrUpdown" />
        </div>
      </div>
      <div className="overFlowdiv">
        <div className="table-body">
          {sortedData
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((dialogue, index) => {
              const recentMessage =
                dialogue.messages[dialogue.messages.length - 1];
              return (
                <Link
                  to={`/chat-sessions/${dialogue.id}`}
                  key={index}
                  className={`tbody-row ${
                    index % 2 === 0 ? "even-row" : "odd-row"
                  }`}
                >
                  <div className="table-cell cellvalue">
                    {recentMessage.content}
                  </div>
                  <div className="table-cell cellvalue">
                    {formatDate(recentMessage.createdOn)}
                  </div>
                  <div className="table-cell cellvalue">
                    {formatDate(recentMessage.lastModified)}
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ChatSessionTable;
