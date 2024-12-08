import { useContext } from "react";
import DataContext from "../data/DataContext";

const ReportComponent = () => {
  const { income, expense } = useContext(DataContext);
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  return (
    <div className="card container mb-4 shadow">
      <div className="card-body">
        <div className="text-center text-success fs-2 mb-2"><i class="fas fa-money-bill-wave me-2" />ยอดคงเหลือ: ฿{formatNumber((income-expense).toFixed(2))}</div>
        <div className="container fs-3  d-flex flex-row justify-content-center">
          <div className="text-primary border-end border-dark px-4">
            <i class="fas fa-plus me-2" />
            รายรับ: ฿{formatNumber(income.toFixed(2))}
          </div>
          <div className="text-danger px-4">
            <i class="fas fa-minus me-2" />
            รายจ่าย: ฿{formatNumber(expense.toFixed(2))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReportComponent;
