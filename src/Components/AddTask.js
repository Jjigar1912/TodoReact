import Styles from "../Components/AddTask.module.scss";
import { useEffect, useState } from "react";
const AddTask = (props) => {
  const [task, setTask] = useState("");
  const [error, setError] = useState(false);
  const [btn, setBtn] = useState(props.btnText);
  const addData = (e) => {
    e.preventDefault();
    if (task.trim() === "") {
      setError(true);
    } else {
      setError(false);
      let obj = {
        id: Date.now(),
        task,
        status: false,
      };
      props.addTodo(obj);
      setTask("");
    }
  };
  const updateData = (e) => {
    e.preventDefault();
    setTask("");
    setBtn("Add");
    props.updateTodo(task);
  };
  useEffect(() => {
    setBtn(props.btnText);
  }, [props.btnText]);
  useEffect(() => {
    setTask(props.updateItem);
  }, [props.updateItem]);
  return (
    <>
      <form method="POST" onSubmit={btn == "Add" ? addData : updateData}>
        <input
          type="text"
          name="task"
          value={task}
          placeholder="What you have planned ? "
          onChange={(e) => setTask(e.target.value)}
        />
        <input type="submit" value={btn} title="Click Here To Add Your Task" />
      </form>
      {error && (
        <span id="error" className={Styles.error}>
          Enter Valid Input
        </span>
      )}
    </>
  );
};
export default AddTask;
