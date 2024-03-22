import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [items, setItems] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();
    setItems([...items, e.target.item.value]);
    e.target.reset();
  };
  const onRemoveItem = ({ index1 }) => {
    setItems(items.filter((item, index) => index !== index1));
  };
  return (
    <>
      <h1>Project4:Todo list</h1>
      <div className="shoppingList">
        <h3>Items To Buy</h3>
        <form onSubmit={onSubmit}>
          <input type="text" name="item" placeholder="Add a task" required />
          <button type="submit">Add</button>
        </form>
        <ul>
          {items.map((item, index) => {
            return (
              <>
                <li key={index}>
                  {item}
                  <button
                    className="delete"
                    onClick={() => onRemoveItem({ index1: index })}
                  >
                    x
                  </button>
                </li>{" "}
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
