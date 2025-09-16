import React from "react";

function About() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        About Workout Tracker
      </h2>
      <p className="text-gray-600 mb-6">
        A simple application to track your workout sessions and progress.
      </p>

      <h3 className="text-xl font-semibold text-gray-700 mb-3">Features</h3>
      <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
        <li>Create new workout sessions</li>
        <li>Edit existing workouts</li>
        <li>Track your training progress</li>
        <li>Your data stays saved in your browser</li>
      </ul>
    </div>
  );
}

export default About;
