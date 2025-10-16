import { ThemeProvider } from "@/providers/theme";
import { ThemeToggle } from "./components/theme-toggle";
import "./globals.css";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-background text-foreground min-h-screen p-4">
        <h1 className="text-2xl">Hello World</h1>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
