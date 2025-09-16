import React from "react";
import { Link } from "react-router-dom";

function Help() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Help & Support</h2>

      <h3 className="text-xl font-semibold text-gray-700 mb-3">
        How to use this app:
      </h3>
      <ul className="space-y-4 text-gray-600">
        <li>
          <span className="font-medium">Create workouts:</span> Go to the{" "}
          <Link to="/form" className="text-blue-600 hover:underline">
            Form
          </Link>{" "}
          page
        </li>
        <li>
          <span className="font-medium">View/edit workouts:</span> Visit the{" "}
          <Link to="/table" className="text-blue-600 hover:underline">
            Table
          </Link>{" "}
          page
        </li>
        <li>
          <span className="font-medium">Delete workouts:</span> Click the delete
          button in the table view
        </li>
      </ul>

      <p className="mt-6 text-gray-600">
        For additional help, contact:{" "}
        <a
          href="mailto:support@workoutapp.com"
          className="text-blue-600 hover:underline"
        >
          support@workoutapp.com
        </a>
      </p>
    </div>
  );
}

export default Help;
