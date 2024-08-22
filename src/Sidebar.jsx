import { Home, TreeDeciduous, Users } from "lucide-react";

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
  setCurrentView,
}) {
  const NavButton = ({ icon: Icon, label, view }) => (
    <button
      className="w-full flex items-center bg-gray-100 px-4 py-3 text-gray-700 hover:bg-gray-300 transition-colors rounded-lg mb-4"
      onClick={() => {
        setCurrentView(view);
        setSidebarOpen(false);
      }}
    >
      <Icon className="mr-3 h-5 w-5" />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );

  return (
    <div
      className={`fixed border-r bg-white border-gray inset-y-0 left-0 z-20 w-64 transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}
    >
      <div className="flex flex-col h-full">
        <div className="p-5">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">
            HabitQuest
          </h2>
        </div>
        <nav className="flex-1 px-2">
          <NavButton icon={Home} label="My Habits" view="habits" />
          <NavButton icon={TreeDeciduous} label="Forest" view="forest" />
          <NavButton icon={Users} label="Leaderboard" view="leaderboard" />
        </nav>
      </div>
    </div>
  );
}
