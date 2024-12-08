import FormComponent from "../components/FormComponent";
import Transaction from "../components/Transaction";
const PageAdd = (props) => {
    const {items,onAddNewItem} = props
  return (
    <div>
        
      <FormComponent onAddItem={onAddNewItem} />
      <div className="container">
        <Transaction items={items} />
      </div>
    </div>
  );
};
export default PageAdd;
