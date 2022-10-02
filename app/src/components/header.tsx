import Link from "next/link";
import Logo from "./logo";

const Header = () => {
  return (
    <div className="sticky top-0 z-10 w-full py-4 bg-white border-b border-gray-100 dark:text-white dark:border-slate-800 dark:bg-slate-900">
      <div className="flex justify-between w-full h-full px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl lg:gap-8">
        <div className="flex items-center col-span-12 lg:col-span-2">
          <img src="/img/superui.png" alt="SuperUI" width="24px" />
          <p className="ml-2 font-medium">SuperUI</p>
        </div>
        <div className="flex items-center justify-end">
          <Link href="/">
            <a className="mr-3 font-medium">Home</a>
          </Link>
          <Link href="/about">
            <a className="px-4 py-2 font-medium">About</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
