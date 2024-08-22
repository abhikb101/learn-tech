import { Card, CardContent } from "@/components/ui/card";
import { emojis, userEmojis } from "./data/constants";

export default function ForestView() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card className="bg-gray-100">
        <CardContent className="p-4">
          <div className="grid grid-cols-6 gap-2">
            {emojis.slice(0, 36).map((emoji, index) => (
              <Card
                key={index}
                className="w-10 h-10 flex items-center justify-center bg-white"
              >
                <span className="text-2xl">{emoji}</span>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold mb-2">Your Forest</h3>
          <div className="grid grid-cols-4 gap-2">
            {userEmojis.map((emoji, index) => (
              <Card
                key={index}
                className="w-10 h-10 flex items-center justify-center bg-white"
              >
                <span className="text-2xl">{emoji}</span>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
