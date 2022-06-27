import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "./redux";

const TaskItem = (props) => {
  const { task } = props;

  const dispatch = useDispatch();

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => dispatch(toggleTask(task.id))} // <= toggleTask() est dans redux.js (action creator)
        />
        {task.text}

        <span
          onClick={() => dispatch(deleteTask(task.id))}
          role="button"
          style={{ padding: "5px", marginLeft: "20px" }}
        >
          X
        </span>
      </label>
    </div>
  );
};

export default TaskItem;
