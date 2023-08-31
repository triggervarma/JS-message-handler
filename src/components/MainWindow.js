import React, { useState } from "react";
import "./MainWindow.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainWindow = () => {
  const [message, setMessage] = useState("");
  const [windows, setWindows] = useState([]);

  const openNewWindow = () => {
    const newWindow = window.open("/new-window", "_blank");
    setWindows((prevWindows) => [...prevWindows, newWindow]);
  };

  const sendMessage = () => {
    if (message.length > 0) {
      const timestamp = new Date().toLocaleTimeString();
      const newMessage = `[${timestamp}] - ${message}`;

      windows.forEach((win) => {
        win.postMessage(newMessage);
      });
      setMessage("");
      successToast();
    } else {
      errorToast();
    }
  };

  const errorToast = () =>
    toast.error("Enter Some Message!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  const successToast = () => toast.success("Successfully Sent Message!");

  return (
    <div className="main-window">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={openNewWindow}>Open New Window</button>
      <button onClick={sendMessage}>Send Message</button>
      <ToastContainer />
    </div>
  );
};

export default MainWindow;
