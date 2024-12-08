import Description from "../components/Description";
import ReportComponent from "../components/ReportComponent";
import { useReducer } from "react";
const PageSummary = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SHOW":
        return true;
      case "HIDE":
        return false;
    }
  };
  const [showReport, dispatch] = useReducer(reducer, true);
  return (
    <div>
      <Description />
      <div className="container justify-content-end mb-3 gap-2 d-flex">
        <button
          className="btn btn-primary text-light"
          onClick={() => dispatch({ type: "SHOW" })}
        >
          Show
        </button>
        <button
          className="btn btn-dark text-light"
          onClick={() => dispatch({ type: "HIDE" })}
        >
          HIDE
        </button>
      </div>
      {showReport && <ReportComponent />}
    </div>
  );
};
export default PageSummary;
