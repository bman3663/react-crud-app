import "./app.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Help from "./components/Help";
import Form from "./components/Form";
import Table from "./components/Table";
import { useState } from "react";
import { useEffect } from "react";
import { WorkoutProvider } from "./contexts/workoutContext";

import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

function App() {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (workout) => {
    console.log(`Adding this workout: ${workout.description}`);
    setWorkouts((prev) => [{ id: Date.now(), ...workout }, ...prev]);
    console.log(`new workouts array: ${workouts.length}`);
  };

  const updateWorkout = (id, newDescription) => {
    console.log(`WorkoutS b4: ${workouts}`);
    setWorkouts((prev) =>
      prev.map((prevWorkout) =>
        prevWorkout.id === id
          ? { ...prevWorkout, description: newDescription }
          : prevWorkout
      )
    );

    console.log(`WorkoutS after: ${workouts}`);
  };

  const deleteWorkout = (id) => {
    setWorkouts((prev) => prev.filter((workout) => workout.id !== id));
  };

  useEffect(() => {
    const savedWorkouts = JSON.parse(localStorage.getItem("workouts"));
    if (savedWorkouts && savedWorkouts.length > 0) {
      setWorkouts(savedWorkouts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts));
  }, [workouts]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="table" element={<Table />} />
        <Route path="form" element={<Form />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<Help />} />
      </Route>
    )
  );

  return (
    <WorkoutProvider
      value={{
        workouts,
        addWorkout,
        updateWorkout,
        deleteWorkout,
      }}
    >
      <RouterProvider router={router} />
    </WorkoutProvider>
  );
}

export default App;
