import { Footer, SiteNavigation } from "@/components/navigation";
import { Outlet } from "react-router";

export const RootLayout = () => {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <SiteNavigation />
      <div className="flex-1 overflow-x-hidden lg:mt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
