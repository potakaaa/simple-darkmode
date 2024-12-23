import { useTheme } from "@/components/theme-provider";
import { Switch } from "./ui/switch";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <Switch
      onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      className="shadow-sm"
    />
  );
}
