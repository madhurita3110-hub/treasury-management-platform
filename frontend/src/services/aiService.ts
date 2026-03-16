import axios from "axios";

const AI_API = "http://localhost:5000";

export const aiService = {

  analyzeTreasury: async () => {
    const res = await axios.post(`${AI_API}/ai/analysis`);
    return res.data;
  },

  detectAnomalies: async () => {
    const res = await axios.get(`${AI_API}/ai/anomalies`);
    return res.data;
  },

  chat: async (question: string) => {
    const res = await axios.post(`${AI_API}/ai/chat`, { question });
    return res.data;
  }

};