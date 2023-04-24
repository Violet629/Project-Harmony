/*eslint-disable*/
import "./App.css";
import { useState } from "react";
import axios from "axios";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [inputValue, setInputValue] = useState("");
  const input = (event) => {
    setInputValue(event.target.value);
    // console.log(event.target.value);
  };
  // axios
  //   .get("/users")
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // axios.post('/api/users', {
  //   firstName: 'John',
  //   lastName: 'Doe'
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
  return (
    <div className="App">
      <div className="container">
        <div className="title">ToDo List</div>
        <div className="input">
          <input
            value={inputValue}
            onChange={input}
            placeholder="text"
            type="text"
          />
          <button>Submit</button>
          <p>{inputValue}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
