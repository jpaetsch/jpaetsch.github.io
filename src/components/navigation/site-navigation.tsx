import { useSidebarStore } from "@/stores/use-sidebar";
import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
import { Header } from "./header";
import { Sidebar } from "./sidebar";

export const SiteNavigation = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const { onCollapse } = useSidebarStore((state) => state);

  // Automatically collapse the sidebar when the screen size reduces
  useEffect(() => {
    if (!isDesktop) {
      onCollapse();
    }
  }, [isDesktop, onCollapse]);

  return isDesktop ? <Header /> : <Sidebar />;
};
