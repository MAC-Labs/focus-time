import React from "react";
import { Timer } from "./components/Timer";
import { Clock } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center justify-center mb-8">
            <Clock className="text-indigo-600 mr-2" size={28} />
            <h1 className="text-2xl font-bold text-gray-800">Focus Time</h1>
          </div>

          <Timer />

          <div className="mt-8 pt-8 border-t border-gray-100">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Tips for Staying Focused
            </h2>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Find a quiet workspace</li>
              <li>• Put your phone on silent</li>
              <li>• Stay hydrated</li>
              <li>• Take regular breaks</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
