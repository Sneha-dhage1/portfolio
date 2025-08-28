import React from "react";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center p-6 bg-white shadow-lg rounded-2xl w-96">
        <img
          src="/profile.jpg"
          alt="My Profile"
          className="w-32 h-32 mx-auto rounded-full shadow-md"
        />
        <h1 className="text-2xl font-bold mt-4">Nikhil Gorade</h1>
        <p className="text-gray-600 mt-2">DevOps Engineer | Cloud Enthusiast</p>
        <p className="mt-4 text-gray-700">
          Welcome to my portfolio! I specialize in DevOps, AWS Cloud, and CI/CD
          automation. Explore my projects and experience below.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="https://github.com/niks1212"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nikhil-gorade-74b015216/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
