import React from "react";
import { useWorkout } from "../contexts/workoutContext";
import { useState } from "react";
function Form() {
  const { addWorkout } = useWorkout();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const add = (e) => {
    e.preventDefault();

    if (!name || !description) return;
    const workout = { name, description };

    addWorkout(workout);
    setName("");
    setDescription("");
    //redirect to table
    // maybe even popup alert???
  };

  return (
    <>
      <div>
        <form onSubmit={add}>
          <div className="border">
            <label>User</label>
            <input
              type="text"
              name="user"
              value={name}
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="border">
            <label>Description</label>
            <input
              type="text"
              name="description"
              value={description}
              required
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>

          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
}

export default Form;
