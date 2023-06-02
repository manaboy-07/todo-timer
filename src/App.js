/** @format */

import "./App.css";
import Hero from "./Components/Hero";
import Timer from "./Components/Timer";
import { useState, useEffect } from "react";
import Todo from "./Components/Todo";
import TodoList from "./Components/TodoList";
import Alert from "./Components/Alert";
import Edit from "./Components/Edit";

function App() {
  const initialTodo = [];
  //** STATE VALUES **//
  const [todos, SetTodos] = useState(initialTodo);
  const [alert, SetAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [id, setID] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [editText, setEditText] = useState("");
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);
  useEffect(() => {
    const storedTodos = localStorage.getItem("todoList");
    if (storedTodos) {
      SetTodos(JSON.parse(storedTodos));
    }
  }, []);
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const setAndSaveItems = (newItem) => {
    SetTodos((prevState) => newItem);
    localStorage.setItem("todoList", JSON.stringify(newItem));
  };
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (edit) {
      if (editText !=="") {
        let tempTodo = todos.map((todo) => {
          return todo.id === id ? { ...todo, text: editText } : todo;
        });
        setAndSaveItems(tempTodo);
        setEdit(false);
        setInputValue("");
        handleAlert({ type: "warning", text: "item has been edited" });
      } else {
        handleAlert({ type: "danger", text: "items cant be empty" });
        return
      }
    } else {
      if (inputValue.trim() !== "") {
        const newTodo = {
          completed,
          text: inputValue,
          id: Date.now(),
        };
        const todoLists = [...todos, newTodo];
        //adding list and updating localstorage
        setAndSaveItems(todoLists);
        setInputValue("");
      }
      handleAlert({
        type: "success",
        text: "Item has been added successfully",
      });
    }
  };
  const handleCompleted = (id) => {
    const newTodo = todos.map((todo) => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });

    //completed list and updating localstorage
    setAndSaveItems(newTodo);
  };
  const handleAlert = ({ type, text }) => {
    SetAlert({ show: true, type, text });
    setTimeout(() => {
      SetAlert({ show: false });
    }, 4000);
  };
  const handleDelete = (id) => {
    let tempTodo = todos.filter((todo) => todo.id !== id);
    setAndSaveItems(tempTodo);
    //delte a list and updating localstorage
    handleAlert({ type: "danger", text: "Item has now been deleted" });
  };
  const handleEdit = (id) => {
    let editTodo = todos.find((todo) => todo.id === id);
    let { text } = editTodo;

    setEditText(text);
    setEdit(true);
    setID(id);
  };

  const handleEditText = (e) => {
    setEditText(e.target.value);
  };

  return (
    <div className='App'>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <Hero />
      {/* <Timer /> */}
      {edit && (
        <Edit
          handleEditText={handleEditText}
          closeEdit={handleAddTodo}
          editText={editText}
          edit={edit}
        />
      )}
      <Todo
        // handleSubmit={handleSubmit}
        edit={edit}
        inputValue={inputValue}
        handleInput={handleInput}
        handleAddTodo={handleAddTodo}
      />
      <TodoList
        todos={todos}
        handleEdit={handleEdit}
        handleCompleted={handleCompleted}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
