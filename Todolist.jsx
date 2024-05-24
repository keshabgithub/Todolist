import React, { useState } from "react";
import "./Todolist.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [todos, setTodos] = useState([]);
  const [dueDate, setDueDate] = useState(null); 
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      setTodos([...todos, { text: inputValue, completed: false, dueDate: dueDate }]);
      setInputValue("");
      setDueDate(null); 
    }
  };

  const handleDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleCheckboxChange = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleDateChange = (date) => {
    setDueDate(date);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const showSearchButton = filteredTodos.length > 0;

  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 0.1, 2)); 
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.1, 0.5)); 
  };

  return (
    <div>
      <div className="App" style={{ transform: `scale(${zoomLevel})` }}>
        <h1>To-Do List</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter a to-do item"
          />
          <button type="submit">Add</button>
        </form>
        <input
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Search to-dos"
        />
        {showSearchButton && (
          <button onClick={() => setSearchValue("")}>Clear Search</button>
        )}
        <ul>
          {filteredTodos.map((todo, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleCheckboxChange(index)}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              {todo.dueDate && <span> - Due: {todo.dueDate.toLocaleDateString()}</span>}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="calendar-container">
        {showDatePicker && (
          <DatePicker
            selected={dueDate}
            onChange={handleDateChange}
            placeholderText="Select due date"
            dateFormat="dd/MM/yyyy"
            inline
            className="date-picker"
          />
        )}
        <button onClick={() => setShowDatePicker(!showDatePicker)}>
          {showDatePicker ? "Hide Calendar" : "Show Calendar"}
        </button>
      </div>
      <div className="zoom-buttons">
        <button onClick={handleZoomIn}>+</button>
        <button onClick={handleZoomOut}>-</button>
      </div>
    </div>
  );
}

export default App;
