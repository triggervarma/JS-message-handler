import React, { useState, useEffect } from "react";
import "./NewWindow.css";

const NewWindow = ({ heading }) => {
  const [messages, setMessages] = useState([]);
  console.log("messages", messages);

  useEffect(() => {
    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const handleMessage = (event) => {
    const newMessage = event.data;
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <div className="new-window">
      <h2>{heading}</h2>
      <div className="message-history">
        <ul>
          {messages.slice(1).map((element) => {
            return <li className="message">{element}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default NewWindow;
