import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
 {day:"Mon",balance:10000},
 {day:"Tue",balance:12000},
 {day:"Wed",balance:9000},
 {day:"Thu",balance:15000},
];

export default function CashChart(){

 return(

  <LineChart width={500} height={300} data={data}>

   <XAxis dataKey="day" />

   <YAxis />

   <Tooltip />

   <Line type="monotone" dataKey="balance" />

  </LineChart>

 )
}