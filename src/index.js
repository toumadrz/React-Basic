import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GetExternalComponent from './components/GetExternalComponent';

//Functional Component
function GetFunctionalComponent() {
  return <h1>Functional Component</h1>
}
//Class Component
class GetClassComponent extends React.Component{
  render(){
    return <h1>Class Component</h1>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
