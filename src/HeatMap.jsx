import React from "react";

const HeatMap = ({ habit }) => {
  const getColor = (value) => {
    const colors = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];
    return colors[value];
  };

  return (
    <div className="flex flex-wrap gap-1">
      {Object.entries(habit.history).map(([date, value]) => (
        <div
          key={date}
          className="w-3 h-3 rounded-sm"
          style={{ backgroundColor: getColor(value) }}
          title={`${date}: ${value ? "Completed" : "Not completed"}`}
        />
      ))}
    </div>
  );
};

export default HeatMap;
