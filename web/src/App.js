/*eslint-disable*/
import "./App.css";
import { useState } from "react";
import React, { useEffect } from "react";
import axios from "axios";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const input = (event) => {
    setInputValue(event.target.value);
  };

  const addData = (data) => {
    // console.log(data);
    setTodoList([...data]);
  };

  function addTest() {
    axios
      .post("http://localhost:8080/addData", {
        inputValue,
      })
      .then((response) => {
        addData(response.data);
        // console.log(response.data);
        // console.log(todoList);
        setInputValue("");
      })
      .catch((error) => {
        console.error("Error saving data: ", error);
      });
  }
  function deleteTest(index) {
    console.log(index);
    axios
      .post("http://localhost:8080/deleteData", {
        index,
      })
      .then((response) => {
        // addData(response.data);
        // console.log(todoList);
      })
      .catch((error) => {
        console.error("Error saving data: ", error);
      });
  }
  // function test() {
  //   console.log(todoList);
  // }
  return (
    <div className="App">
      <div className="container">
        <div className="title">ToDo List</div>
        <div className="input">
          <input
            value={inputValue}
            onChange={input}
            placeholder="할 일을 적어주세요"
            type="text"
          />
          <button onClick={addTest}>Submit</button>
          {/* <button onClick={test}>test</button> */}
        </div>
        <div className="todolist">
          {todoList.length === 0 ? (
            <p>No Data</p>
          ) : (
            <ul>
              {todoList.map((item, index) => (
                <li key={item.id}>
                  {index + 1}. {item.text}
                  <button onClick={deleteTest(index)}>X</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
