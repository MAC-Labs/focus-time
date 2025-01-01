import React, { useState } from 'react';
import { DEFAULT_TIMES } from '../utils/time';
import { Clock } from 'lucide-react';

interface TimeSelectorProps {
  currentTime: number;
  timerState: 'focus' | 'break';
  onTimeSelect: (minutes: number) => void;
  disabled: boolean;
}

export function TimeSelector({ currentTime, timerState, onTimeSelect, disabled }: TimeSelectorProps) {
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customTime, setCustomTime] = useState('');
  const times = DEFAULT_TIMES[timerState];

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const time = parseInt(customTime);
    if (time > 0 && time <= 120) {
      onTimeSelect(time);
      setShowCustomInput(false);
      setCustomTime('');
    }
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex gap-2">
        {times.map((time) => (
          <button
            key={time}
            onClick={() => onTimeSelect(time)}
            disabled={disabled}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              currentTime === time
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {time}m
          </button>
        ))}
        <button
          onClick={() => setShowCustomInput(!showCustomInput)}
          disabled={disabled}
          className={`px-3 py-1 rounded-full text-sm transition-colors
            ${showCustomInput ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <Clock className="w-4 h-4" />
        </button>
      </div>

      {showCustomInput && (
        <form onSubmit={handleCustomSubmit} className="flex items-center gap-2">
          <input
            type="number"
            min="1"
            max="120"
            value={customTime}
            onChange={(e) => setCustomTime(e.target.value)}
            placeholder="Custom minutes"
            className="w-24 px-2 py-1 text-sm border rounded-md"
            disabled={disabled}
          />
          <button
            type="submit"
            disabled={disabled || !customTime}
            className="px-3 py-1 text-sm bg-indigo-600 text-white rounded-md disabled:opacity-50"
          >
            Set
          </button>
        </form>
      )}
    </div>
  );
}