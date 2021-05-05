import { useState, useEffect } from "react";

export const useDate = () => {
  const [today, setDate] = useState(new Date()); // Save the current date to be able to trigger an update

  useEffect(() => {
    const interval = setInterval(() => {
      // Creates an interval which will update the current data every second
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(interval); // Return a function to clear the timer so that it will stop being called on unmount
    };
  }, []);

  const time = today.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const hour = today.getHours();
  const greeting = `Good ${
    (hour > 3 && hour <= 12 && "morning") ||
    (hour > 12 && hour <= 17 && "afternoon") ||
    (hour > 17 && hour <= 22 && "evening") ||
    "night"
  }`;

  return {
    time,
    greeting,
  };
};
