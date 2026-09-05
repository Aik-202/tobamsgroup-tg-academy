import { footerlinks} from "@/constant";
import Link from "next/link";

export default function FooterLinks() {
  return (
   <nav aria-label="Footer Navigation">

        {footerlinks.map(( li => <div key={li.heading}>
            <h3>{li.heading}</h3>
            {li.links.map((item) => (
            <li key={item}>
              <Link href={`/${item.toLowerCase().replace(/ /g, "-")}`}>
                {item}
              </Link>
            </li>
          ))}
        </div>))}
   </nav>
  )
}
