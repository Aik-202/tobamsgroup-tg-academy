import { navList } from "@/constant";
import Link from "next/link";
import { ChevronDown } from "../icons/ChevronDown";
import Button from "../ui/Button";

export default function NavItems({ active, menuOpen } : {active: string, menuOpen: boolean}) {
  return (
    <ul className={`${menuOpen ? "fixed w-full flex flex-col h-[87vh] md:min-h-[90vh] p-5 top-24 z-20 lg:p-0 lg:h-auto lg:min-h-auto lg:w-auto lg:static lg:flex-row lg:gap-5 xl:gap-8 bg-primary-dark lg:bg-transparent"
    : "hidden lg:flex lg:flex-row lg:gap-5 xl:gap-8"} self-center mb-4`}>
      {navList.map((item => <li key={item.text} 
      aria-haspopup={item.dropdown ? "true" : undefined} 
      aria-expanded={item.dropdown ? "false" : undefined}>
        <Link href={item.link} className={`border border-transparent p-2 md:p-5 lg:p-0.5 xl:p-1 
        ltext-lg md:text-xl lg:text-sm xl:text-base 2xl:text-[16px]
        ${active == item.text ? "text-white lg:text-primary font-semibold border-b-tranparent lg:border-b-primary" 
          : "text-light lg:text-dark font-medium border-transparent"} font-body flex flex-row 
          justify-between lg:justify-normal lg:gap-1 items-center`}>
          <span>{item.text}</span>
          {item.dropdown &&  <ChevronDown className={`${active == item.text ? "color-white lg:color-primary" 
          : "color-dark"} w-8 h-8 lg:w-5 lg:h-5`} />}
        </Link>
      </li>))}
      <li className="flex flex-col gap-5 md:gap-8 mt-3 md:mt-4 w-max lg:hidden ">
        <Button color="purple" text="Account" variant="account"/>
        <Button color="red" text="Take Assessment" />
      </li>
    </ul>
  )
}
