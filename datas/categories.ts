export interface Category {
  name: string;
  color: string;
  href: string;
}

export const categories: Category[] = [
  {
    name: "Tous",
    color: "hover:bg-gray-300",
    href: "/articles",
  },
  {
    name: "Shojo",
    color: "hover:bg-blue-300",
    href: "/articles?category=Shojo",
  },
  {
    name: "Seinen",
    color: "hover:bg-red-300",
    href: "/articles?category=Seinen",
  },
  {
    name: "Shonen",
    color: "hover:bg-green-300",
    href: "/articles?category=Shonen",
  },
  {
    name: "Isekai",
    color: "hover:bg-purple-300",
    href: "/articles?category=Isekai",
  },
];