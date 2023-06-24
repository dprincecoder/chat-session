import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Dialogue, MessageType } from "../../configs";

const useChat = () => {
  const [chatData, setChatData] = useState<Dialogue[]>([]);
  const { id } = useParams<{ id: string }>();
  console.log(chatData);

  useEffect(() => {
    // Fetch chat data from JSON
    const fetchChatData = async () => {
      try {
        const response = await fetch("/mockup.json");
        const data = await response.json();
        setChatData(data);
        console.log("Chat data fetched successfully.", data);
      } catch (error) {
        console.error("Error fetching chat data:", error);
      }
    };

    fetchChatData();
  }, []);

  const addNewDialogue = (messages: MessageType[] = []) => {
    const newDialogue: Dialogue = {
      id: chatData.length + 1,
      messages: messages,
    };

    setChatData((prevData) => [...prevData, newDialogue]);
  };

  const sendContinuousConversation = ({ content }: any) => {
    setChatData((prevData) => {
      const newData = [...prevData];
      const existingDialogueIndex = newData.findIndex(
        (dialogue) => dialogue.id === Number(id)
      );

      if (existingDialogueIndex > -1) {
        const existingDialogue = newData[existingDialogueIndex];
        const newMessage: MessageType = {
          id: existingDialogue.messages.length + 1,
          content: content,
          sender: "user",
          createdOn: new Date().toISOString(),
          lastModified: new Date().toISOString(),
        };

        newData[existingDialogueIndex] = {
          ...existingDialogue,
          messages: [...existingDialogue.messages, newMessage],
        };
      } else {
        const newDialogue: Dialogue = {
          id: Number(id),
          messages: [
            {
              id: 1,
              content: content,
              sender: "user",
              createdOn: new Date().toISOString(),
              lastModified: new Date().toISOString(),
            },
          ],
        };

        newData.push(newDialogue);
      }

      return newData;
    });
  };

  return {
    chatData,
    addNewDialogue,
    sendContinuousConversation,
  };
};

export default useChat;
