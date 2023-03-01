import axios from "axios";
import '../Styles/ChatGPTStyles.css'
import React, { useState } from "react";
import Header from "./Header";

function ChatGPT() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a request to the server with the prompt
    axios
    .post("http://localhost:8080/chat", { prompt })
    .then((res) => {
      // Update the response state with the server's response
      setResponse(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
  };

  return (
    <div>
     <Header />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ask Me Something!"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <br/>
        <br/>
        <button type="submit">See What You Get</button>
      </form>
      <br/>
      <p className="response-box">{response}</p>
    </div>
  );
}
export default ChatGPT;