import Link from 'next/link';

const Navbar = () => {
  const navbarList = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Blog',
      href: '/blog',
    },
    {
      title: 'Portofolio',
      href: '/portofolio',
    },
    {
      title: 'Skills',
      href: '/skills',
    },
  ];
  return (
    <div className="pb-5 pt-10 flex justify-center font-normal text-2xl">
      {navbarList.map((item, index) => (
        <Link href={item.href} key={index}>
          <a className="px-5 mx-4 text-blueGray-500 hover:text-blueGray-700 pb-2 border-b-2 border-transparent hover:border-blue-500">
            {item.title}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
