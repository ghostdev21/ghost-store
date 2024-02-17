import Menu from "./menu";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Nabvar() {
  return (
    <nav className="w-full z-50 fixed top-0 bg-background flex justify-between px-5 items-center h-16 border-b-2">
      <div className="flex-1">
      <DropdownMenu>
        <DropdownMenuTrigger>menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Navegacion</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/">Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/search">Search</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/cart">
              Cart
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/account">
             Account
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
      <Link href="/">
        <h2 className="text-xl font-medium text-zinc-600">GHOST STORE</h2>
      </Link>
      <Menu />
    </nav>
  );
}
