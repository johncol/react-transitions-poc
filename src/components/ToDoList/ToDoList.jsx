import React, { useState } from "react";
import { CSSTransitionGroup } from "react-transition-group";

import "./ToDoList.css";

export const ToDoList = ({}) => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addNewItem = () => {
    const itemToAdd = {
      id: Date.now(),
      description: newItem,
    };
    setItems([...items, itemToAdd]);
    setNewItem("");
  };

  const deleteItem = (itemToDelete) => {
    setItems((items) => items.filter((item) => item.id !== itemToDelete.id));
  };

  return (
    <div className="todo-list">
      <h1>Another ToDo List</h1>
      <input
        placeholder="Add an item.."
        value={newItem}
        onChange={(event) => setNewItem(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            addNewItem();
          }
        }}
      />
      <ul>
        <CSSTransitionGroup
          transitionName="items"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {items.map((item) => (
            <li key={item.id}>
              {item.description}{" "}
              <button onClick={() => deleteItem(item)}>&times;</button>
            </li>
          ))}
        </CSSTransitionGroup>
      </ul>
    </div>
  );
};
