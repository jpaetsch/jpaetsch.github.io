import NotFoundPage from "@/components/pages/not-found";
import { ThemeToggle } from "@/components/theme-toggle";
import { ThemeProvider } from "@/providers/theme";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./globals.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="bg-background text-foreground min-h-screen p-4">
        <h1 className="text-2xl">Hello World</h1>
        <ThemeToggle />
      </div>
    ),
  },
  {
    path: "/test",
    element: <div>Test</div>,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
