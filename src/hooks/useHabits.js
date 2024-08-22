import { useState, useEffect } from "react";

export default function useHabits() {
  const [totalGems, setTotalGems] = useState(125);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({ type: "", value: 0 });
  const [popupStep, setPopupStep] = useState(0);
  const [habits, setHabits] = useState([
    {
      id: 1,
      name: "Morning Meditation",
      streak: 5,
      gems: 20,
      trophies: 1,
      completed: false,
      history: {
        "2023-05-01": 1,
        "2023-05-02": 1,
        "2023-05-03": 0,
        // ... more dates
      },
    },
    {
      id: 2,
      name: "Evening Workout",
      streak: 3,
      gems: 15,
      trophies: 0,
      completed: false,
      history: {
        "2023-05-01": 1,
        "2023-05-02": 0,
        "2023-05-03": 1,
        // ... more dates
      },
    },
  ]);

  const addHabit = (name) => {
    setHabits([
      ...habits,
      {
        id: habits.length + 1,
        name,
        streak: 0,
        gems: 0,
        trophies: 0,
        completed: false,
        history: {},
      },
    ]);
  };

  const completeHabit = (id) => {
    setHabits(
      habits.map((habit) => {
        if (habit.id === id && !habit.completed) {
          const newStreak = habit.streak + 1;
          const newGems = habit.gems + 5;
          const newTrophies = habit.trophies + (newStreak % 7 === 0 ? 1 : 0);

          setTotalGems((prevGems) => prevGems + 5);

          if (newStreak % 7 === 0) {
            setPopupContent({ type: "trophy", value: newTrophies });
            setShowPopup(true);
          } else {
            setPopupContent({ type: "gems", value: newGems });
            setShowPopup(true);
          }

          return {
            ...habit,
            streak: newStreak,
            gems: newGems,
            trophies: newTrophies,
            completed: true,
          };
        }
        return habit;
      })
    );
  };

  const resetCompletedHabits = () => {
    setHabits(habits.map((habit) => ({ ...habit, completed: false })));
  };

  useEffect(() => {
    const now = new Date();
    const midnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      0,
      0,
      0
    );
    const timeUntilMidnight = midnight.getTime() - now.getTime();

    const timer = setTimeout(() => {
      resetCompletedHabits();
    }, timeUntilMidnight);

    return () => clearTimeout(timer);
  }, [habits]);

  return {
    totalGems,
    habits,
    addHabit,
    completeHabit,
    showPopup,
    setShowPopup,
    popupContent,
    popupStep,
    setPopupStep,
  };
}
