import React from "react";
import { useWorkout } from "../contexts/workoutContext";
import { useState } from "react";
function WorkoutItem({ workout }) {
  const [description, setDescription] = useState(workout.description);
  const [editable, setEditable] = useState(false);
  const { updateWorkout, deleteWorkout } = useWorkout();

  const editWorkout = () => {
    updateWorkout(workout.id, { ...workout, description });
    setEditable(false);
  };
  return (
    <tr>
      <td>{workout.name}</td>
      <td>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          readOnly={!editable}
        />
      </td>
      <td>
        <button
          onClick={() => {
            if (editable) {
              editWorkout();
            } else setEditable((prev) => !prev);
          }}
        >
          {" "}
          {editable ? "save" : "edit"}
        </button>
      </td>
      <td>
        <button className="" onClick={() => deleteWorkout(workout.id)}>
          delete
        </button>
      </td>
    </tr>
  );
}

export default WorkoutItem;
