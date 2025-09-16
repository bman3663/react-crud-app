import React from "react";
import { useWorkout } from "../contexts/workoutContext";
import WorkoutItem from "./WorkoutItem";

function Table() {
  const { workouts, updateWorkout, deleteWorkout } = useWorkout();

  return (
    <div>
      <table>
        <caption>Workout List</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((workout) => (
            <WorkoutItem key={workout.id} workout={workout} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
