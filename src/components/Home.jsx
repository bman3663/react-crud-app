import React from "react";

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Workout Tracker
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Track your workouts and stay on top of your fitness goals.
        </p>
        <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Getting Started
          </h2>
          <p className="text-gray-600">
            Use the navigation above to add new workouts or view your existing
            ones.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
