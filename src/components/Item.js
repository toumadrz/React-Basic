import PropTypes from 'prop-types';

const Item = (props) => {
  const {name,amount} = props;
  const textStyle = amount<0 ? "danger" :"primary";
  const symbol = amount<0 ? "-" :"+";
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  return (
    <li
      className={`text-${textStyle} fs-5 text-decoration-none list-group-item d-flex justify-content-between`}
      style={{ listStyleType: "none" }}
    >
      {name} <span>{symbol}{formatNumber(Math.abs(amount).toFixed(2))}</span>
    </li>
  );
  Item.propTypes={
    name:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
  }
};
export default Item;
