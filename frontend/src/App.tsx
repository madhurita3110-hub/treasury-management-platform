import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import AIChat from "./components/AIChat/AIChat";

function App(){

 return(

  <BrowserRouter>

   <Routes>

    <Route path="/" element={<Dashboard/>} />

    <Route path="/ai" element={<AIChat/>} />

   </Routes>

  </BrowserRouter>

 )

}

export default App;