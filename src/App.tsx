import { ContactPage, HomePage, NotFoundPage } from "@/components/pages";
import { createBrowserRouter, RouterProvider } from "react-router";
import { RootLayout } from "./components/layouts";
import "./globals.css";
import { ThemeProvider } from "./providers/theme";

const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "contact", Component: ContactPage },
      { path: "*", Component: NotFoundPage },
    ],
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
