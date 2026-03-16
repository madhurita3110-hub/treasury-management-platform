import { useState } from "react";
import { aiService } from "../services/aiService";

export const useAI = () => {

  const [result,setResult] = useState(null);

  const runAnalysis = async () => {

    const res = await aiService.analyzeTreasury();

    setResult(res);

  };

  return {result,runAnalysis};

};