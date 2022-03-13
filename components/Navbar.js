import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState, ReactDOM } from "react";
import Moon from "../public/moon.svg";
import Sun from "../public/sun.svg";

const navbarList = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Journey",
    href: "/journey",
  },
  // {
  //   title: "Skills",
  //   href: "/skills",
  // },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "FYI",
    href: "/fyi",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

const Navbar = () => {
  const router = useRouter();
  const [showResponsiveNavbar, setShowResponsiveNavbar] = useState(false);

  const { theme, setTheme } = useTheme();

  const navbarTextStyle = (item) => {
    return `px-5 mx-2 pb-2 text-center my-auto ${
      router.pathname === item?.href
        ? "text-blueGray dark:text-white border-blue border-b-2"
        : "text-blueGray dark:text-white border-transparent border-b-2 hover:text-black dark:hover:text-white hover:border-blue"
    }`;
  };

  return (
    <nav className="pb-5 pt-10 z-50">
      <div className="flex row justify-center items-center">
        <ul className="justify-center font-normal text-2xl hidden lg:flex">
          {navbarList.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>
                <a className={navbarTextStyle(item)}>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="absolute right-16 hidden lg:flex"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "light" ? (
            <Moon width={32} height={32} fill={"rgb(82 82 82)"} />
          ) : (
            <Sun width={32} height={32} fill={"#fafafa"} />
          )}
        </button>
      </div>

      <div className="flex justify-between items-center pr-4 pl-8 lg:hidden">
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "light" ? (
            <Moon width={32} height={32} fill={"rgb(82 82 82)"} />
          ) : (
            <Sun width={32} height={32} fill={"#fafafa"} />
          )}
        </button>
        <button
          aria-label="hamburger-navbar"
          onClick={() => setShowResponsiveNavbar(!showResponsiveNavbar)}
        >
          <div
            className={
              showResponsiveNavbar ? "bar-container change" : "bar-container"
            }
          >
            <div className="bar1 bg-barColor dark:bg-white" />
            <div className="bar2 bg-barColor dark:bg-white" />
            <div className="bar3 bg-barColor dark:bg-white" />
          </div>
        </button>
      </div>
      {showResponsiveNavbar && (
        <ul className="flex flex-col font-normal text-xl gap-4 mt-4">
          {navbarList.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>
                <a className={navbarTextStyle(item)}>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
