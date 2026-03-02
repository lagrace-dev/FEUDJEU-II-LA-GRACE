"use client";

import Link from "next/link";
import Sidebar  from "./Sidebar";

export default function Navbar() {
  return (
    <div className="drawer">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      {/* CONTENU PRINCIPAL */}
      <div className="drawer-content flex flex-col">

        {/* NAVBAR */}
        <div className="navbar bg-base-100 shadow-sm w-full">

          {/* MOBILE BURGER */}
          <div className="navbar-start">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-2"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
            </div>

            <Link href="/" className="btn btn-ghost text-xl">
              daisyUI
            </Link>
          </div>

          {/* MENU DESKTOP */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><Link href="/">Item 1</Link></li>

              <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2 bg-base-100 w-40">
                    <li><Link href="/sub1">Submenu 1</Link></li>
                    <li><Link href="/sub2">Submenu 2</Link></li>
                  </ul>
                </details>
              </li>

              <li><Link href="/item3">Item 3</Link></li>
            </ul>
          </div>

          {/* BOUTON DROITE */}
          <div className="navbar-end gap-3">
            <Link href="/" className="btn btn-primary-btn btn-sm">Accueil</Link>
            <Link href="/Creer" className="btn btn-outline btn-sm">Creer</Link>
            <Link href="/Articles" className="btn btn-outline btn-sm">Articles</Link>
          </div>

        </div>

      </div>
<Sidebar/>
    </div>
  );
}