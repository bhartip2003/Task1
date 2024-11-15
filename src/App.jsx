import { useEffect } from "react";
import "./App.css";
import Table from "./components/Table/Table";
import axios from "axios";

const headers = ["Company", "Contact", "Country"];

const data = [
  {
    Company: "Alfreds Futterkiste",
    Contact: "Maria Anders",
    Country: "Germany",
  },
  {
    Company: "Centro comercial Moctezuma",
    Contact: "Francisco Chang",
    Country: "Mexico",
  },
  { Company: "Ernst Handel", 
    Contact: "Roland Mendel", 
    Country: "Austria" 
  },
  { Company: "Island Trading", 
    Contact: "Maria Anders", 
    Country: "UK" 
  },
  {
    Company: "Laughing Bacchus Winecellars",
    Contact: "Maria Anders",
    Country: "Canada",
  },
  {
    Company: "Magazzini Alimentari Riuniti",
    Contact: "Giovanni Rovelli",
    Country: "Italy",
  },
];

const API_KEY = import.meta.env.VITE_API_STOCK;

function App() {

   useEffect(() => {
    async function stockAPI() {
      const response = await axios.get(`https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${API_KEY}`);
      console.log("gainers",response.data.top_gainers);
      console.log("losers",response.data.top_losers);
    }
    stockAPI();
  })
  return (
      <div className="text-sm h-screen w-screen flex flex-col items-center justify-center gap-4">
        <h1 className="font-semibold text-2xl">Table Component</h1>
        <Table headers={headers} data={data} />
      </div>
  );
}

export default App;
