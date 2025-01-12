import { useState, useEffect, useRef } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      user: "John Doe",
      message: "Hey, I love your music!",
      timestamp: "10:15 AM",
    },
    {
      user: "You",
      message: "Thanks!",
      timestamp: "10:21 AM",
    },
  ]);
  const [message, setMessage] = useState("");
  
  // Explicitly type the ref to HTMLDivElement
  const messageContainerRef = useRef<HTMLDivElement | null>(null);

  // Scroll to the bottom when a new message is added
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Handle new message submission
  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (!message) {
      alert("Please enter a message");
      return;
    }

    // Add new message to the state
    const newMessage = {
      user: "You",
      message,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages([...messages, newMessage]);
    setMessage(""); // Clear the input field after sending the message
  };

  return (
    <div className="chat-container">
      <div className="sidebar bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white">
        <h2>Profiles</h2>
        <ul>
          <li>John Doe</li>
          <li>Jane Smith</li>
          <li>Michael Johnson</li>
          <li>Emily Davis</li>
        </ul>
      </div>

      <div className="chat-box">
        <h1 className="chat-header">John Doe</h1>
        <div ref={messageContainerRef} className="messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.user === "You" ? "sent" : "received"}`}
            >
              <div className="message-content">
                <strong>{msg.user}: </strong>{msg.message}
              </div>
              <span className="timestamp">{msg.timestamp}</span>
            </div>
          ))}
        </div>
        <form onSubmit={sendMessage} className="message-form">
          <textarea
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>

      <style jsx>{`
        .chat-container {
          display: flex;
          height: 100vh;
          background-color: #f8f9fa;
        }
        .sidebar {
          width: 250px;
          color: white;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
        }
        .sidebar h2 {
          color: #fff;
          font-size: 22px;
          margin-bottom: 15px;
        }
        .sidebar ul {
          list-style: none;
          padding: 0;
        }
        .sidebar ul li {
          margin-bottom: 10px;
          cursor: pointer;
        }
        .sidebar ul li:hover {
          color: #007bff;
        }
        .chat-box {
          flex-grow: 1;
          padding: 20px;
          background-color: white;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }
        .chat-header {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 20px;
          color: black;  /* Set header text color to black */
          text-align: center;
        }
        .messages {
          flex-grow: 1;
          overflow-y: auto;
          padding-right: 15px;
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .message {
          display: flex;
          flex-direction: column;
          padding: 12px;
          border-radius: 10px;
          box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
          position: relative;
          max-width: 80%;
        }
        .sent {
          align-self: flex-end;
          background-color: #d4edda;
        }
        .received {
          align-self: flex-start;
          background-color: #f8d7da;
        }
        .message-content {
          font-size: 16px;
          line-height: 1.4;
          color: black;  /* Set message text color to black */
        }
        .timestamp {
          font-size: 12px;
          color: #868e96;
          margin-top: 5px;
          text-align: right;
        }
        .message-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
          padding: 10px;
          align-items: center;
        }
        .message-form textarea {
          width: 100%;
          padding: 12px;
          font-size: 16px;
          border-radius: 8px;
          border: 1px solid #ccc;
          color: black;  /* Set input text color to black */
        }
        .message-form button {
          padding: 12px 20px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .message-form button:hover {
          background: #0056b3;
        }
      `}</style>
    </div>
  );
}
