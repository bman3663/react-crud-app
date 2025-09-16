import { useWorkout } from "../contexts/workoutContext";
import { useState, useCallback } from "react";
function WorkoutItem({ workout }) {
  const [description, setDescription] = useState(workout.description);
  const [editable, setEditable] = useState(false);
  const { updateWorkout, deleteWorkout } = useWorkout();

  const editWorkout = useCallback(() => {
    updateWorkout(workout.id, { ...workout, description });
    setEditable(false);
  }, [workout, description, updateWorkout]);

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {workout.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          readOnly={!editable}
          className={`w-full px-2 py-1 border rounded ${
            editable ? "border-gray-300" : "border-transparent"
          }`}
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <div className="flex space-x-2">
          <button
            onClick={() => {
              if (editable) {
                editWorkout();
              } else setEditable((prev) => !prev);
            }}
            className={`px-3 py-1 rounded text-sm ${
              editable
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {editable ? "Save" : "Edit"}
          </button>
          <button
            className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
            onClick={() => deleteWorkout(workout.id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

export default WorkoutItem;
