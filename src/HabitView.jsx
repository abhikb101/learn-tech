import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HeatMap from "./HeatMap.jsx";

export default function HabitView({ habits, addHabit, completeHabit }) {
  const [newHabit, setNewHabit] = useState("");

  const handleAddHabit = () => {
    if (newHabit) {
      addHabit(newHabit);
      setNewHabit("");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <Input
          type="text"
          placeholder="New habit"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          className="flex-1"
        />
        <Button onClick={handleAddHabit}>Add</Button>
      </div>
      <ScrollArea className="h-[calc(100vh-200px)] pr-4">
        <Accordion type="single" collapsible className="w-full">
          {habits.map((habit) => (
            <AccordionItem key={habit.id} value={`habit-${habit.id}`}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center justify-between w-full">
                  <span className="font-semibold">{habit.name}</span>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>🔥 {habit.streak}</span>
                    <span>💎 {habit.gems}</span>
                    <span>🏆 {habit.trophies}</span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-4 pb-2">
                  <HeatMap habit={habit} />
                </div>
                <Button
                  size="sm"
                  onClick={() => completeHabit(habit.id)}
                  disabled={habit.completed}
                  className="mt-2"
                >
                  {habit.completed ? "Completed" : "Complete"}
                </Button>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollArea>
    </div>
  );
}
