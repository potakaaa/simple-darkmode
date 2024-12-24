import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import "./App.css";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="size-full bg-background h-screen text-white flex flex-col justify-center items-center space-x-2">
        <div className="flex space-x-2">
          <ModeToggle />
          <h2 className="scroll-m-20 text-lg font-semibold tracking-tight text-foreground transition-all duration-300">
            Dark Mode
          </h2>
        </div>
        <div className="fixed bottom-10 p-4">
          <Drawer>
            <DrawerTrigger className="text-sm text-foreground font-medium rounded-lg py-1 px-3 transition duration-300 hover:bg-zinc-600 hover:bg-opacity-15">
              Open
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Hello, I'm Rald!</DrawerTitle>
                <DrawerDescription>
                  A 2nd Year Computer Science Student learning shadcn {":))"}
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
