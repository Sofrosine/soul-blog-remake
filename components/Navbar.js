import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState, ReactDOM } from "react";

const navbarList = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work Experience",
    href: "/experience",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Blog",
    href: "/blog",
  },

  {
    title: "Skills",
    href: "/skills",
  },
];

const Navbar = () => {
  const router = useRouter();
  const [showResponsiveNavbar, setShowResponsiveNavbar] = useState(false);

  const navbarTextStyle = (item) => {
    return `px-5 mx-4 pb-2 text-center my-auto ${
      router.pathname === item?.href
        ? "text-blueGray-700 border-blue-500 border-b-2"
        : "text-blueGray-500 border-transparent border-b-2 hover:text-blueGray-700 hover:border-blue-500"
    }`;
  };

  return (
    <nav className="pb-5 pt-10">
      <ul className="justify-center font-normal text-2xl hidden md:flex">
        {navbarList.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>
              <a className={navbarTextStyle(item)}>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-end pr-4 md:hidden">
        <button onClick={() => setShowResponsiveNavbar(!showResponsiveNavbar)}>
          <div className={showResponsiveNavbar ? "bar-container change" : "bar-container"}>
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </div>
        </button>
      </div>
      {showResponsiveNavbar && (
        <ul className="flex flex-col font-normal text-2xl gap-4 mt-4">
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
