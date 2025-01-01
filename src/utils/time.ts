export const formatTime = (minutes: number, seconds: number): string => {
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

export const DEFAULT_TIMES = {
  focus: [5, 10, 25],
  break: [5, 10, 15]
} as const;