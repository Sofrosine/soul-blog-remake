import Link from 'next/link';
import {useState} from 'react';

const Navbar = () => {
  const [showResponsiveNavbar, setShowResponsiveNavbar] = useState(false);
  const navbarList = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Projects',
      href: '/projects',
    },
    {
      title: 'Work Experience',
      href: '/experience',
    },
    {
      title: 'Blog',
      href: '/blog',
    },

    {
      title: 'Skills',
      href: '/skills',
    },
  ];
  return (
    <nav className="pb-5 pt-10">
      <ul className="justify-center font-normal text-2xl hidden md:flex">
        {navbarList.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>
              <a className="px-5 mx-4 text-blueGray-500 hover:text-blueGray-700 pb-2 border-b-2 border-transparent hover:border-blue-500 text-center my-auto">
                {item.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-end pr-4 md:hidden">
        <button onClick={() => setShowResponsiveNavbar(!showResponsiveNavbar)}>
          <p>Menu</p>
        </button>
      </div>
      {showResponsiveNavbar && (
        <ul className="flex flex-col font-normal text-2xl gap-4 mt-4">
          {navbarList.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>
                <a className="px-5 mx-4 text-blueGray-500 hover:text-blueGray-700 pb-2 border-b-2 border-transparent hover:border-blue-500 text-center my-auto">
                  {item.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
