import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/assets/logo.svg";

const Navbar = () => {
  return (
    <header className="bg-base-100 shadow-sm sticky z-50 top-0 left-0 w-full">
      <nav className="section my-0 navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <LinkComponent />
            </ul>
          </div>
          <Link href="/">
            <Image src={logo} alt="logo" className="size-16" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <LinkComponent />
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <p><Search /></p>
          <button className="btn btn-outline text-main">Appointment</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

const LinkComponent = () => {
  const links: { name: string; path: string }[] = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return links.map((link) => (
    <li key={link.path}>
      <Link href={link.path}>{link.name}</Link>
    </li>
  ));
};
