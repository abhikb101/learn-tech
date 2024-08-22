import { MenuIcon, Gem } from "lucide-react";

export default function Header({
  sidebarOpen,
  setSidebarOpen,
  currentView,
  totalGems,
}) {
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center px-6">
      <div className="flex items-center flex-1">
        <button
          className="md:hidden mr-4 text-gray-500 hover:text-gray-700 transition-colors"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <MenuIcon className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-semibold text-gray-800">
          {currentView === "habits"
            ? "My Habits"
            : currentView === "forest"
            ? "Forest"
            : "Leaderboard"}
        </h1>
      </div>
      <div className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-full">
        <Gem className="h-5 w-5 text-purple-500" />
        <span className="font-medium text-gray-700">{totalGems}</span>
      </div>
    </header>
  );
}
