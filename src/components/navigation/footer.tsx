export const Footer = () => {
  return (
    <footer
      className="dark:border-goldenbrown-500/20 border-goldenbrown-700/20
        bg-muted flex w-full flex-col items-center justify-center border-t-2
        p-5"
    >
      {/* Bottom: Centered Text */}
      <div className="mt-12 flex w-full flex-col items-center justify-center">
        <div className="text-center text-[0.65rem] md:text-xs">
          &copy; {new Date().getFullYear()} Jacob Paetsch. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
