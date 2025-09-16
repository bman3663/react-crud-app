import React from "react";
import { useWorkout } from "../contexts/workoutContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Form() {
  const { addWorkout } = useWorkout();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();

    if (!name || !description) return;
    const workout = { name, description };

    addWorkout(workout);
    setName("");
    setDescription("");
    navigate("/table");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add Workout</h2>
      <form onSubmit={add}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">User</label>
          <input
            type="text"
            name="user"
            value={name}
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter user name"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Description
          </label>
          <input
            type="text"
            name="description"
            value={description}
            required
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            maxLength="500"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter workout description"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
