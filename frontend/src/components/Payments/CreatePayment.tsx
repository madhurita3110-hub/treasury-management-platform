import { useState } from "react";
import api from "../../services/api";

export default function CreatePayment(){

 const [amount,setAmount] = useState("");

 const submit = async ()=>{

  await api.post("/payments",{
   amount
  });

 };

 return(

  <div>

   <h2>Create Payment</h2>

   <input
    value={amount}
    onChange={(e)=>setAmount(e.target.value)}
   />

   <button onClick={submit}>
    Send Payment
   </button>

  </div>

 )
}