import Item from "./Item";

const Transaction = (props) => {
  const {items} = props
  return (
    <div className="card mb-5">
      <div className="card-body p-0">
        <ul className="list-group">
          <li
            className="text-white bg-success fs-5 text-decoration-none list-group-item d-flex justify-content-between"
            style={{ listStyleType: "none" }}
          >
            รายการ <span>จำนวนเงิน</span>
          </li>
          
          {items.map((e) => (
            <Item key={e.Id} name={e.Name} amount={e.Amount} />  
            // <Item {...e}/> Spread Operator
          ))}
          
        </ul>
      </div>
    </div>
    
  );
};
export default Transaction;
