import { useEffect, useState } from "react";
import { Dialogue, MessageType } from "../../configs";

const useChat = () => {
  const [chatData, setChatData] = useState<Dialogue[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch chat data from JSON
    const fetchChatData = async () => {
      try {
        const response = await fetch("/mockup.json");
        const data = await response.json();
        setChatData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching chat data:", error);
        setIsLoading(false);
      }
    };

    fetchChatData();
  }, []);

  const updateJsonData = async (data: Dialogue[]) => {
    setIsLoading(true);
    try {
      const response = await fetch("/mockup.json", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("Chat data updated successfully.");
        setIsLoading(false);
      } else {
        console.error("Failed to update chat data:", response.status);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error updating chat data:", error);
      setIsLoading(false);
    }
  };

  const addNewDialogue = (messages: MessageType[] = []) => {
    const newDialogue: Dialogue = {
      id: chatData.length + 1,
      messages: messages,
    };

    setChatData((prevData) => [...prevData, newDialogue]);
    updateJsonData([...chatData, newDialogue]);
  };

  const sendContinuousConversation = ({
    id: urlID,
    content,
    createdOn,
    lastModified,
  }: MessageType) => {
    setChatData((prevData) =>
      prevData.map((dialogue) => {
        if (dialogue.id === urlID) {
          const newMessage: MessageType = {
            id: dialogue.messages.length + 1,
            content: content,
            sender: "Assistant",
            createdOn: createdOn,
            lastModified: lastModified,
          };

          const updatedDialogue: Dialogue = {
            ...dialogue,
            messages: [...dialogue.messages, newMessage],
          };

          updateJsonData(
            prevData.map((d) => (d.id === urlID ? updatedDialogue : d))
          );

          return updatedDialogue;
        }
        return dialogue;
      })
    );
  };

  return {
    chatData,
    addNewDialogue,
    sendContinuousConversation,
    isLoading,
  };
};

export default useChat;
