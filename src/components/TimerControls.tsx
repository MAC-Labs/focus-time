import React from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface TimerControlsProps {
  isActive: boolean;
  onToggle: () => void;
  onReset: () => void;
}

export function TimerControls({ isActive, onToggle, onReset }: TimerControlsProps) {
  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={onToggle}
        className="p-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
      >
        {isActive ? <Pause size={24} /> : <Play size={24} />}
      </button>
      <button
        onClick={onReset}
        className="p-4 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors"
      >
        <RotateCcw size={24} />
      </button>
    </div>
  );
}