import { navList } from "@/constant";
import Link from "next/link";
import { ChevronDown } from "../icons/ChevronDown";

export default function NavItems({ active } : {active: string}) {
  return (
    <ul className="hidden lg:flex flex-row gap-5 xl:gap-8 self-center mb-4">
      {navList.map((item => <li key={item.text} 
      aria-haspopup={item.dropdown ? "true" : undefined} 
      aria-expanded={item.dropdown ? "false" : undefined}>
        <Link href={item.link} className={`border border-transparent p-0.5 xl:p-1 
        text-sm xl:text-base 2xl:text-lg
        ${active == item.text ? "text-primary font-semibold border-b-primary" 
          : "text-dark font-medium border-transparent"} font-body flex flex-row 
          gap-1 items-center`}>
          <span>{item.text}</span>
          {item.dropdown &&  <ChevronDown className={`${active == item.text ? "color-primary" 
          : "color-dark"} w-5 h-5`} />}
        </Link>
      </li>))}
    </ul>
  )
}
