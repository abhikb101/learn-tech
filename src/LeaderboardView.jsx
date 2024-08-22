import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { leaderboardData, notifications } from "./data/constants";

export default function LeaderboardView() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold mb-2">Leaderboard</h3>
          <ScrollArea className="h-[300px]">
            {leaderboardData.map((user, index) => (
              <div
                key={user.id}
                className="flex items-center justify-between py-2 border-b last:border-b-0"
              >
                <div className="flex items-center">
                  <span className="font-semibold mr-2">{index + 1}.</span>
                  <span>{user.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>💎 {user.gems}</span>
                  <span>🏆 {user.trophies}</span>
                </div>
              </div>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold mb-2">Recent Activity</h3>
          <ScrollArea className="h-[300px]">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="py-2 border-b last:border-b-0"
              >
                <p>
                  <span className="font-semibold">{notification.user}</span>{" "}
                  {notification.action} {notification.emoji}
                </p>
              </div>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
