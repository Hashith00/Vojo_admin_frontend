import React, { useState } from "react";

// Individual Message Component
const Message = ({ sender, text }) => {
  return (
    <div className={`text-${sender}-message mb-2 p-2 rounded-lg max-w-md`}>
      <p className="text-sm">{text}</p>
    </div>
  );
};

// Chat Window Component
const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleMessageSubmit = () => {
    if (inputText.trim() !== "") {
      setMessages([...messages, { sender: "user", text: inputText }]);
      setInputText("");
      // You can add logic here to send the message to the server
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      {/* Messages */}
      <div className="flex flex-col space-y-2">
        {messages.map((message, index) => (
          <Message key={index} sender={message.sender} text={message.text} />
        ))}
      </div>

      {/* Input */}
      <div className="mt-4 flex items-center">
        <input
          type="text"
          className="flex-1 border rounded-l-lg p-2 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Type your message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={handleMessageSubmit}
        >
          Send
        </button>
      </div>
    </div>
  );
};

// Chat Application Component
function ChatApp() {
  return (
    <div className="flex flex-col h-screen">
      {/* Chat Header */}
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-lg font-semibold">Chat Application</h1>
      </header>
      {/* Chat Window */}
      <main className="flex-1 p-4">
        <ChatWindow />
      </main>
    </div>
  );
}

export default ChatApp;
