// src/pages/ChatBot.js
import React, { useState, useEffect } from "react";
import "./sub.css";

export default function ChatBot() {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("chatMessages");
    return saved
      ? JSON.parse(saved)
      : [{ role: "assistant", content: "무엇을 도와 드릴까요?" }];
  });
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    try {
      const res = await fetch("http://localhost:8003/api/chat/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      if (data?.content) {
        setMessages([...newMessages, data]);
      }
    } catch (err) {
      console.error("❌ 오류:", err);
    }
  };

  const clearMessages = () => {
    localStorage.removeItem("chatMessages");
    setMessages([{ role: "assistant", content: "무엇을 도와드릴까요?" }]);
  };

  return (
    <div className="chatbot-wrapper">
      {!open && (
        <button
          className="btn"
          onClick={() => setOpen(true)}
        >
          <img src="/img/chat-bot.png" alt="챗봇 아이콘" style={{ width: "100px", height: "100px" }} />
        </button>
      )}

      {open && (
        <div className="chatbot-box shadow">
          <div className="chatbot-inner">
            <div className="chatbot-header d-flex justify-content-between align-items-center p-2 bg-primary text-white">
              <strong>🤖 챗봇</strong>
              <button
                className="btn-close btn-close-white btn-sm"
                onClick={() => setOpen(false)}
              ></button>
            </div>

            {/* 👉 구조를 나눔: 메시지영역 + 입력창영역 */}
            <div className="chatbot-body">
              <div className="chatbot-messages">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={
                      msg.role === "user" ? "text-end" : "text-start mt-3 mb-2"
                    }
                  >
                    <span
                      className={
                        "chat-msg " + (msg.role === "user" ? "user" : "bot")
                      }
                    >
                      {msg.content}
                    </span>
                  </div>
                ))}
              </div>

              <div className="chatbot-input px-3 py-3">
                <div className="input-group">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="form-control"
                    placeholder="메시지를 입력하세요..."
                  />
                  <button onClick={sendMessage} className="btn btn-primary">
                    전송
                  </button>
                  <button
                    onClick={clearMessages}
                    className="btn btn-outline-secondary ms-2"
                  >
                    초기화
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
