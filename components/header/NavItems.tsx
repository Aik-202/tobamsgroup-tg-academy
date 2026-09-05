import { navList } from "@/constant";
import Link from "next/link";
import { ChevronDown } from "../icons/ChevronDown";

export default function NavItems() {
  return (
    <ul>
      {navList.map((item => <li key={item.text}
      aria-haspopup={item.dropdown ? "true" : undefined} 
      aria-expanded={item.dropdown ? "false" : undefined}>
        <Link href={item.link}>
          <span>{item.text}</span>
          {item.dropdown &&  <ChevronDown className="color-text w-5 h-5" />}
        </Link>
      </li>))}
    </ul>
  )
}
