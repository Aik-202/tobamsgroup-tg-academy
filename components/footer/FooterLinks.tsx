import { footerlinks} from "@/constants";
import Link from "next/link";

export default function FooterLinks() {
  return (
   <nav aria-label="Footer Navigation" className="flex flex-col gap-5 lg:gap-0 
   lg:flex-row lg:justify-between w-[80%] mt-5">
        {footerlinks.map(( li => <div key={li.heading} className="flex flex-col gap-4">
            <h3 className="font-bold font-heading text-base md:text-[18px] lg:text-base xl:text-lg 
            2xl:text-xl">{li.heading}</h3>
            {li.links.map((item) => (
            <li key={item} className="list-none hover:text-secondary transition-all hover:font-semibold">
              <Link href={`/${item.toLowerCase().replace(/ /g, "-")}`}>
                {item}
              </Link>
            </li>
          ))}
        </div>))}
   </nav>
  )
}
