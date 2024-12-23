import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import "./App.css";

const App = () => {
  return (
    <div className="size-full bg-zinc-950 h-screen text-white flex justify-center items-center gap-2 font-sans">
      <Switch id="dark-mode" />
      <Label htmlFor="dark-mode">Dark Mode</Label>
    </div>
  );
};

export default App;
