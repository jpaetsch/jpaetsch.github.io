import { ThemeProvider } from "@/providers/theme";
import "./globals.css";

function App() {
  return (
    <ThemeProvider>
      <div className="p-4">
        <h1 className="text-2xl">Hello World</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
