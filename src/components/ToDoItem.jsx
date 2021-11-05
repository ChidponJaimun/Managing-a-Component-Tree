import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);
  function crossOut() {
    setIsDone((prevValue) => !prevValue);
  }

  return (
    <li
      style={{ textDecorationLine: isDone ? "line-through" : "none" }}
      onClick={crossOut}
    >
      {props.text}
    </li>
  );
}

export default ToDoItem;
