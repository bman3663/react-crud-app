import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorBoundary() {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Oops! Something went wrong.
        </h1>
        <p className="text-gray-700 mb-2">
          We encountered an unexpected error.
        </p>
        <p className="text-sm text-gray-500 mb-6">
          {error.statusText || error.message}
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
}

export default ErrorBoundary;
