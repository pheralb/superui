import Link from "next/link";
import Logo from "./logo";

const Header = () => {
  return (
    <div className="sticky top-0 z-10 w-full py-4 border-b border-gray-100">
      <div className="flex justify-between w-full h-full px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl lg:gap-8">
        <div className="flex items-center col-span-12 lg:col-span-2">
          <Logo width="39" />
          <p className="ml-2 font-medium">SuperUI</p>
        </div>
        <div className="flex items-center justify-end">
          <Link href="/">
            <a className="font-medium text-gray-500 rounded-md hover:bg-gray-100">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="px-4 py-2 font-medium text-gray-500 rounded-md hover:bg-gray-100">
              About
            </a>
          </Link>
        </div>
        <div>
            <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
