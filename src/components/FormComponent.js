import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const FormComponent = (props) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [formValid, setFormValid] = useState(false);
  const [checkExpense, setCheckExpense] = useState(1);
  const [transactionType, setTransactionType] = useState("income");

  const inputName = (event) => {
    setName(event.target.value);
  };
  const inputAmount = (event) => {
    setAmount(event.target.value);
  };
  // useEffect(() => {
  //   console.log(checkExpense);
  // }, [checkExpense]);
  const checkAmount = (event) => {
    const value = event.target.value;
    setTransactionType(value);
    setCheckExpense(value === "expense" ? -1 : 1);
  };
  const saveItem = (event) => {
    event.preventDefault();
    const itemData = {
      Id: uuidv4(),
      Name: name,
      Amount: Number(amount * checkExpense),
    };
    props.onAddItem(itemData);
    setName("");
    setAmount(0);
    
  };
  useEffect(() => {
    const checkData = name.trim().length > 0 && amount !== 0;
    setFormValid(checkData);
  }, [name, amount]);
  return (
    <div className="container mb-5 p-0 pt-4 shadow">
      <div class="text-center mb-4">
        <i class="fas fa-clipboard-list fa-3x text-primary mb-3"></i>
        <h1 class="h3 fw-bold">บันทึกข้อมูลรายรับ - รายจ่าย</h1>
      </div>
      <form className="container mt-5" onSubmit={saveItem}>
        <div className="form-floating mb-4">
          <input
            onChange={inputName}
            value={name}
            className="form-control"
            type="text"
            placeholder="ระบุชื่อรายการ"
          ></input>
          <label className="form-label">ชื่อรายการ</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            id="income"
            value="income"
            name="incomeorexpense"
            checked={transactionType === "income"} //เอาไว้ set ติ๊กรายรับอัตโนมัติเมื่อเปิดหน้า
            onChange={checkAmount}
            
          />
          <label class="form-check-label" for="income">
            รายรับ
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            id="expense"
            value="expense"
            name="incomeorexpense"
            onChange={checkAmount}
          />
          <label class="form-check-label" for="expense">
            รายจ่าย
          </label>
        </div>
        <div className="form-floating mb-4 mt-1">
          <input
            onChange={inputAmount}
            value={amount}
            className="form-control"
            type="number"
            placeholder="ระบุชื่อจำนวนเงิน"
          ></input>
          <label className="form-label">จำนวนเงิน</label>
        </div>
        <button
          disabled={!formValid}
          className="btn btn-lg btn-primary mb-4 w-100"
          type="submit"
        >
          <i class="fas fa-save me-2"></i> เพิ่มข้อมูล
        </button>
      </form>
    </div>
  );
};
export default FormComponent;
