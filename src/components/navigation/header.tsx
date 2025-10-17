import { ThemeToggle } from "../theme-toggle";

export const Header = () => {
  return (
    <header
      className="dark:border-goldenbrown-500 border-goldenbrown-700
        bg-goldenbrown-600 fixed top-0 left-0 z-50 h-20 w-full border-b-2
        shadow-xl"
    >
      <div className="flex h-full w-full flex-row items-center justify-center">
        <div className="absolute right-0 pr-4">
          <ThemeToggle />
        </div>
        <div className="absolute left-0 pl-4">
          <img src="/logo.png" alt="Logo" className="h-12 w-12" />
        </div>
        <nav className="flex space-x-4">
          <div>Test1</div>
          <div>AnotherTest2</div>
        </nav>
      </div>
    </header>
  );
};
