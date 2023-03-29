import React,{useState} from "react";
import AddProduct from "./components/AddProduct";
import Card from "./components/Card";
import Product from "./components/Product";
import "./style.css";

export default function App() {
  const [data,setData]=useState([
    {
      itemName: "Maggie",
      itemDate: "20",
      itemMonth: "June",
      itemyear: "1998",
    },
    {
      itemName: "Yippee",
      itemDate: "5",
      itemMonth: "May",
      itemyear: "1982",
    },
    {
      itemName: "Nirma",
      itemDate: "20",
      itemMonth: "June",
      itemyear: "1993",
    },
  ])

function handelData(newData){
setData([...data,newData])
}
  
  return (
    <div className="wrapper">
      <AddProduct fn={handelData}/>
      <Card>
        <Product data={data}/>
      </Card>
    </div>
  );
}
