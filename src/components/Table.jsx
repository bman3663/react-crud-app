import React from "react";
import { useWorkout } from "../contexts/workoutContext";
import WorkoutItem from "./WorkoutItem";
function Table() {
  const { workouts, updateWorkout, deleteWorkout } = useWorkout();

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {workouts.map((workout) => (
          <WorkoutItem
            key={workout.id}
            workout={workout}
            onEdit={updateWorkout}
            onDelete={deleteWorkout}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
