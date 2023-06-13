import AddTask from "./AddTask";
import styles from "./TodoWrapper.module.scss";
import TaskList from "./TaskList";
import { useEffect, useState } from "react";
const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [updateItem, setUpdateItem] = useState("");
  const [btnText, setbtnText] = useState();
  const [updateId, setUpdateId] = useState(0);
  useEffect(() => {
    let tp = JSON.parse(localStorage.getItem("task"));
    if (tp !== "undefined" && tp !== null) {
      localStorage.setItem("task", JSON.stringify(tp));
      setTodos(tp);
    }
    setbtnText("Add");
  }, []);

  useEffect(() => {
    if (todos.length != 0) {
      localStorage.setItem("task", JSON.stringify(todos));
    }
  }, [todos]);
  const addTodo = (data) => {
    setTodos([...todos, data]);
    setbtnText("Add");
  };
  // useEffect(() => {
  //   todos.forEach((element) => {
  //     if (element.id === updateId) {
  //       element.task = updateItem;
  //     }
  //   });
  // }, [updateId]);
  const editTodo = (data) => {
    todos.forEach((element) => {
      if (element.id === data) {
        setbtnText("Edit");
        setUpdateItem(element.task);
        setUpdateId(element.id);
      }
    });
  };
  const removeTodo = (id) => {
    todos.forEach((element, index) => {
      if (element.id == id) {
        todos.splice(index, 1);
        if (todos.length === 0) {
          setTodos([]);
          localStorage.removeItem("task");
        } else {
          setTodos([...todos]);
        }
      }
    });
  };
  const strike = (id) => {
    todos.forEach((element, index) => {
      if (element.id == id) {
        element.status = !element.status;
      }
    });
    setTodos([...todos]);
  };
  const updateTodo = (data) => {
    setbtnText("Add");
    todos.forEach((element) => {
      if (element.id === updateId) {
        element.task = data;
      }
    });
    setTodos([...todos]);
  };
  return (
    <>
      <div className={styles.main}>
        <AddTask
          addTodo={addTodo}
          updateItem={updateItem}
          btnText={btnText}
          updateTodo={updateTodo}
        />
      </div>
      <div className={styles.tasks}>
        <TaskList
          todos={todos}
          removeTodo={removeTodo}
          strike={strike}
          editTodo={editTodo}
        />
      </div>
    </>
  );
};
export default TodoWrapper;
