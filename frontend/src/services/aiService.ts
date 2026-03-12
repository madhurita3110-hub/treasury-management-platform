import axios from "axios";

export const askAI = async (question: string) => {

 const response = await axios.post(
  "http://localhost:8000/ai/chat",
  { question }
 );

 return response.data.response;
};