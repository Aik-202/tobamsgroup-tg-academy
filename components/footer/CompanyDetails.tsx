import { socials } from "@/constant";
import Image from "next/image";

export default function CompanyDetails() {
  return (
    <section>
        <Image src="/images/logo.png" alt="tobamsgroup" 
        width={100} height={100} className="h-auto w-50"/>
        <p>Tobams Group is an innovative consultancy firm reshaping 
            the future of tech talent development in Africa, specializing 
            in talent acquisition, internships, and skill development with 
            a global perspective.</p>
        <nav>
            {socials.map((li, index) => <a key={index}
            href={li.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label={li.label}>
                <Image 
                src={li.icon} 
                alt=""              
                aria-hidden="true"  
                width={400}
                height={250}
                className="h-auto w-50"
                />
            </a>)}
        </nav>
    </section>
  )
}
