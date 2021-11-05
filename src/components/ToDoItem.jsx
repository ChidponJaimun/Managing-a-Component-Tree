import React from "react";

function ToDoItem(props) {
  function handleClick() {}

  return <li onClick={props.onChecked(props.id)}>{props.text}</li>;
}

export default ToDoItem;
