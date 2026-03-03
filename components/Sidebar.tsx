import Link from "next/link";

export default function Sidebar() {
  const categories = [
    { name: "Tous", color: "hover:bg-gray-300", href: "/Articles" },
    { name: "Shojo", color: "hover:bg-blue-300", href: "/Articles?category=Shojo" },
    { name: "Seinen", color: "hover:bg-red-300", href: "/Articles?category=Seinen" },
    { name: "Shonen", color: "hover:bg-green-300", href: "/Articles?category=Shonen" },
    { name: "Isekai", color: "hover:bg-purple-300", href: "/Articles?category=isekai" },
    { name: "Hentai", color: "hover:bg-pink-300", href: "/Articles?category=Hentai" },
  ];

  return (
    <div className="drawer-side z-60 bg-gradient-to-b from-pink-100 to-pink-200">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="menu bg-base-200 min-h-full w-80 p-4">
        <li className="menu-title">Catégories</li>
        {categories.map((cat) => (
          <li key={cat.name}>
            <Link href={cat.href} className={cat.color}>
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


// import Link from "next/link";
// import { categories } from "../datas/categories";

// export default function Sidebar() {
//   return (
//     <div className="drawer-side bg-gradient-to-b from-pink-100 to-pink-200">
//       <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

//       <ul className="menu bg-base-200 min-h-full w-80 p-6 space-y-2">
//         <li className="menu-title text-lg font-bold text-primary">
//           Catégories
//         </li>

//         {categories.map((cat) => (
//           <li key={cat.name}>
//             <Link
//               href={cat.href}
//               className={`rounded-lg transition-all duration-200 ${cat.color}`}
//             >
//               {cat.name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }