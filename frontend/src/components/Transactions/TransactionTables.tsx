import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export default function TransactionTable(){

 const transactions = useSelector(
  (state:RootState)=>state.transactions.list
 );

 return(

  <table>

   <thead>
    <tr>
     <th>ID</th>
     <th>Amount</th>
    </tr>
   </thead>

   <tbody>

    {transactions.map((t:any)=>(
     <tr key={t.id}>
      <td>{t.id}</td>
      <td>{t.amount}</td>
     </tr>
    ))}

   </tbody>

  </table>

 )
}