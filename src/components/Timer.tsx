import React, { useState, useEffect } from "react";
import { Coffee } from "lucide-react";
import { TimeSelector } from "./TimeSelector";
import { TimerControls } from "./TimerControls";
import { formatTime } from "../utils/time";
import { playTimerEndSound, playBreakEndSound } from "../utils/sound";

type TimerState = "focus" | "break";

export function Timer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [timerState, setTimerState] = useState<TimerState>("focus");
  const [sessionsCompleted, setSessionsCompleted] = useState(0);

  useEffect(() => {
    let interval: number | undefined;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            setIsActive(false);
            if (timerState === "focus") {
              setSessionsCompleted((prev) => prev + 1);
              setTimerState("break");
              setMinutes(5);
              playTimerEndSound();
            } else {
              setTimerState("focus");
              setMinutes(25);
              playBreakEndSound();
            }
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds, timerState]);

  const toggleTimer = () => setIsActive(!isActive);

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(0);
  };

  const handleTimeSelect = (newMinutes: number) => {
    setIsActive(false);
    setMinutes(newMinutes);
    setSeconds(0);
  };

  return (
    <div className="flex flex-col items-center space-y-8">
      <TimeSelector
        currentTime={minutes}
        timerState={timerState}
        onTimeSelect={handleTimeSelect}
        disabled={isActive}
      />

      <div className="text-6xl font-bold tracking-widest text-gray-800">
        {formatTime(minutes, seconds)}
      </div>

      <TimerControls
        isActive={isActive}
        onToggle={toggleTimer}
        onReset={resetTimer}
      />

      <div className="flex items-center space-x-2 text-gray-600">
        {timerState === "focus" ? (
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-2" />
            Focus Time
          </div>
        ) : (
          <div className="flex items-center">
            <Coffee className="mr-2" />
            Break Time
          </div>
        )}
      </div>

      <div className="text-sm text-gray-500">
        Sessions completed today: {sessionsCompleted}
      </div>
    </div>
  );
}
