import styles from "./TaskList.module.scss";
import edit from "../Images/icons8-edit.svg";
import deleteIcon from "../Images/icons8-delete.svg";
import { useEffect, useState } from "react";
const TaskList = (props) => {
  return (
    <>
      <ul id="task" className={styles.task}>
        {props.todos !== null &&
          props.todos.map((element, index) => {
            return (
              <li key={element.id} id={element.id}>
                <input
                  type="checkbox"
                  name="check"
                  checked={element.status}
                  className={element.status ? styles.strike : ""}
                  onChange={() => props.strike(element.id)}
                />
                <h4
                  className={element.status ? styles.strike : ""}
                  onClick={() => props.strike(element.id)}
                >
                  {element.task}
                </h4>
                <button
                  className={styles.edit}
                  onClick={() => props.editTodo(element.id)}
                >
                  Edit
                </button>
                <img
                  src={edit}
                  width="30"
                  height="30"
                  onClick={() => props.editTodo(element.id)}
                />
                <img
                  src={deleteIcon}
                  width="30"
                  height="30"
                  onClick={() => props.removeTodo(element.id)}
                />
                <button
                  className={styles.delete}
                  onClick={() => props.removeTodo(element.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
};
export default TaskList;
