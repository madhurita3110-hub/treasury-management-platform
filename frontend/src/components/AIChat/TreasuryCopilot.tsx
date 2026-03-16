import React, { useState } from "react";
import { aiService } from "../../services/aiService.ts";

const TreasuryCopilot = () => {

  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const askAI = async () => {

    const res = await aiService.chat(question);

    setResponse(res.response);
  };

  return (

    <div>

      <h2>Treasury AI Copilot</h2>

      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button onClick={askAI}>Ask</button>

      <p>{response}</p>

    </div>

  );
};

export default TreasuryCopilot;