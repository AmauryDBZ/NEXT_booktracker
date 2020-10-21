import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import SearchBar from './components/SearchBar';


const App = () => {
  return (
    <div>
      <div><SearchBar /></div>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"));
