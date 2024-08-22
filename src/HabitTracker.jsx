import { useState } from "react";
import Sidebar from "./Sidebar.jsx";
import Header from "./Header";
import HabitView from "./HabitView";
import ForestView from "./ForestView";
import LeaderboardView from "./LeaderboardView";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import useHabits from "./hooks/useHabits";
import { Button } from "@/components/ui/button";

export default function HabitTracker() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState("habits");
  const {
    totalGems,
    habits,
    addHabit,
    completeHabit,
    showPopup,
    setShowPopup,
    popupContent,
    popupStep,
    setPopupStep,
  } = useHabits();

  const renderView = () => {
    switch (currentView) {
      case "habits":
        return (
          <HabitView
            habits={habits}
            addHabit={addHabit}
            completeHabit={completeHabit}
          />
        );
      case "forest":
        return <ForestView />;
      case "leaderboard":
        return <LeaderboardView />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen w-screen bg-gray-100">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        setCurrentView={setCurrentView}
      />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          currentView={currentView}
          totalGems={totalGems}
        />
        <main className="flex-1 overflow-y-auto bg-white p-6">
          {renderView()}
        </main>
      </div>
      <Dialog open={showPopup} onOpenChange={setShowPopup}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center">
              {popupStep === 0 ? (
                <div className="flex flex-col items-center justify-center">
                  {popupContent.type === "gems" ? (
                    <>
                      <span className="text-6xl mb-4">💎</span>
                      <span className="text-3xl">+5 Gems!</span>
                    </>
                  ) : (
                    <>
                      <span className="text-6xl mb-4">🏆</span>
                      <span className="text-3xl">New Trophy!</span>
                    </>
                  )}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <span className="text-6xl mb-4">🔥</span>
                  <span className="text-3xl">
                    Streak: {popupContent.value} days!
                  </span>
                </div>
              )}
            </DialogTitle>
          </DialogHeader>
          <DialogFooter>
            <Button
              onClick={() => {
                if (popupStep === 0) {
                  setPopupStep(1);
                } else {
                  setShowPopup(false);
                  setPopupStep(0);
                }
              }}
              className="w-full"
            >
              {popupStep === 0 ? "Next" : "Close"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
