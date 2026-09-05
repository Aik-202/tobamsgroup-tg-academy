import { company, solution, whatWeDo } from "@/constant";
import Link from "next/link";

export default function FooterLinks() {
  return (
   <nav aria-label="Footer Navigation">

        <div>
            <h3>What We Do</h3>
            {whatWeDo.map((item) => (
            <li key={item}>
              <Link href={`/${item.toLowerCase().replace(/ /g, "-")}`}>
                {item}
              </Link>
            </li>
          ))}
        </div>

        <div>
            <h3>Company</h3>
            {company.map((item) => (
            <li key={item}>
              <Link href={`/${item.toLowerCase().replace(/ /g, "-")}`}>
                {item}
              </Link>
            </li>
          ))}
        </div>

        <div>
            <h3>Solution</h3>
            {solution.map((item) => (
            <li key={item}>
              <Link href={`/${item.toLowerCase().replace(/ /g, "-")}`}>
                {item}
              </Link>
            </li>
          ))}
        </div>
   </nav>
  )
}
