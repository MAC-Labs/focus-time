const timerEndSound = new Audio("/sounds/end-sound.wav");
const breakEndSound = new Audio("/sounds/end-sound.wav");

export const playTimerEndSound = () => {
  timerEndSound.play().catch((err) => console.log("Audio play failed:", err));
};

export const playBreakEndSound = () => {
  breakEndSound.play().catch((err) => console.log("Audio play failed:", err));
};
