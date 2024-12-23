import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="size-full bg-background h-screen text-white flex justify-center items-center space-x-2">
        <ModeToggle />
        <h2 className="scroll-m-20 text-lg font-semibold tracking-tight text-foreground transition-all duration-300">
          Dark Mode
        </h2>
      </div>
    </ThemeProvider>
  );
};

export default App;
