import Navbar from "./components/Navbar";
import { useState, useEffect, useReducer } from "react";
import DataContext from "./data/DataContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page404 from "./pages/Page404";
import PageAdd from "./pages/PageAdd";
import PageSummary from "./pages/PageSummary";
import axios from 'axios';

function App() {
  const initData = [];
  const [items, setItems] = useState(initData);
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);
  const onAddNewItem = async (newItem) => {
    const { Id,Name,Amount} = newItem
    try {
      // Api
      const response = await fetch(`http://localhost:5000/storedata`,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Id: Id, Name: Name ,Amount: Amount}),
      });
      //refresh หน้า
      if (response.ok) {
        fetchData();
      } else {
        console.error("Failed to save data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };
  useEffect(() => {
    const Amounts = items.map((items) => items.Amount);
    const income = Amounts
      .filter((e) => e > 0)
      .reduce((total, e) => (total += e), 0); 
    const expense =
      -1 * Amounts.filter((e) => e < 0).reduce((total, e) => (total += e), 0);
    setReportIncome(income);
    setReportExpense(expense);
    
  }, [items]);
  //api ดึงข้อมูล
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getalldata");
      setItems(response.data);
      
    } catch (err) {
      console.error("Error fetching data:", err.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  
  
  return (
    <DataContext.Provider
      value={{
        income: reportIncome,
        expense: reportExpense,
      }}
    >
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={
              <PageSummary />
            } />
              
            <Route path="/add" element={
              <PageAdd items={items} onAddNewItem={onAddNewItem} />
            } />

            <Route path="*" element={
              <Page404 />
            } />
              
          </Routes>
        </Router>
       
      </div>
    </DataContext.Provider>
  );
}

export default App;
