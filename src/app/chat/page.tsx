"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

// Define the type for message objects
type Message = {
  role: "user" | "ai";
  content: string;
};

const Hero = () => {
  const searchParams = useSearchParams();
  const aiName = searchParams.get("name") || "SoundMate AI";
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage: Message = { role: "user", content: input };

    try {
      const response = await axios.post("/api/cohere-chat", { message: input });
      const aiMessage: Message = {
        role: "ai",
        content: response.data.content,
      };

      setMessages((prev) => [...prev, userMessage, aiMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [...prev, userMessage]);
    }

    setInput("");
  };

  return (
    <div className="w-full antialiased overflow-x-hidden mx-auto relative z-10 min-h-screen flex flex-col justify-between bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white">
      <div className="max-w-lg mx-auto flex flex-col h-full">
        <h1 className="text-3xl font-bold text-center py-4">Chat with {aiName}</h1>
        <div className="flex-grow bg-white/10 rounded-lg p-4 overflow-y-scroll shadow-lg">
          {messages.map((msg, index) => (
            <div key={index} className="mb-4">
              <p
                className={`font-semibold ${
                  msg.role === "user" ? "text-blue-200" : "text-green-200"
                }`}
              >
                {msg.role === "user" ? "You" : aiName}:
              </p>
              <p className="mt-1">{msg.content}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message here..."
            className="flex-grow px-4 py-2 rounded-md border border-white/20 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring focus:ring-purple-400"
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-2 bg-purple-600 rounded-md text-white font-bold hover:bg-purple-700 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
