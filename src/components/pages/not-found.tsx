import { House, Unplug } from "lucide-react";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="mt-40 flex flex-col items-center justify-center">
      <span className="flex items-center justify-center">
        <Unplug className="h-8 w-8" />
        <div className="border-foreground/50 mx-6 h-6 border-l" />
        <h1 className="font-eb-garamond text-5xl">404</h1>
      </span>
      <div className="mt-6" />
      <p className="text-xl">
        Couldn&apos;t find the page you are looking for...
      </p>
      <div className="mt-12" />
      <Link
        to="/"
        className="bg-primary flex cursor-pointer items-center justify-center
          rounded-lg px-4 py-2 hover:opacity-70"
      >
        <House className="text-background h-6 w-6" />
        <div className="border-background/50 mx-3 h-4 border-l" />
        <span className="text-background text-lg font-semibold">Home Page</span>
      </Link>
    </div>
  );
};

export default NotFoundPage;
