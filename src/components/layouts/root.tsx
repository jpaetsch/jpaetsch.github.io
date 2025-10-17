import { Outlet } from "react-router";
import { ThemeToggle } from "../theme-toggle";

export const RootLayout = () => {
  return (
    <div className="bg-background text-foreground min-h-screen p-4">
      <ThemeToggle />
      <Outlet />
    </div>
  );
};
