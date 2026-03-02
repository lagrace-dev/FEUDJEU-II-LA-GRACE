import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
  
<ul className="menu bg-base-200 min-h-full w-80 p-4">
    <li className="menu-title">Catégories</li>
        <li><Link href="/" className="hover:bg-blue-300">Shojo</Link></li>
        <li><Link href="/" className="hover:bg-red-300">Seinen</Link></li>
        <li><Link href="/" className="hover:bg-green-300">Shonen</Link></li>
        <li><Link href="/" className="hover:bg-purple-300">Isekai</Link></li>
      </ul>
    </div>
  );
}