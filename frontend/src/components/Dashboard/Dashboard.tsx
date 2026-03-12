import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../../features/transactions/transactionSlice";
import { RootState } from "../../app/store";

export default function Dashboard(){

 const dispatch = useDispatch();
 const transactions = useSelector(
  (state:RootState)=>state.transactions.list
 );

 useEffect(()=>{
  dispatch(fetchTransactions() as any);
 },[]);

 return(

  <div>

   <h1>Treasury Dashboard</h1>

   {transactions.map((t:any)=>(
    <div key={t.id}>
     {t.amount}
    </div>
   ))}

  </div>

 )
}