import Link from "next/link";

interface FooterListObjectProps {
  name: string;
  href: string;
}

interface FooterListProps {
  items: FooterListObjectProps[];
  title: string
}

export default function FooterList({ items, title }: FooterListProps) {
  return (
    <ul>
        <h2 className="text-sm font-semibold" >{title}</h2>
      {items.map((item) => (
        <li key={item.href}>
          <Link className="text-sm text-zinc-500" href={item.href}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}
