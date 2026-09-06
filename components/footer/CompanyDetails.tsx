import { socials } from "@/constant";
import Image from "next/image";
import Logo from "../Logo";

export default function CompanyDetails() {
  return (
    <section className="lg:w-[50%]">
       <Logo />
        <p className="mb-6 2xl:mb-10 w-[90%] lg:w-[80%]">Tobams Group is an innovative consultancy firm reshaping 
            the future of tech talent development in Africa, specializing 
            in talent acquisition, internships, and skill development with 
            a global perspective.</p>
        <nav className="flex flex-row gap-5">
            {socials.map((li, index) => <a key={index}
            href={li.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label={li.label}>
                <Image 
                src={li.icon} 
                alt=""              
                aria-hidden="true"  
                width={100}
                height={100}
                className="w-8 h-8 md:w-10 md:h-10 lg:w-8 lg:h-8 
                xl:w-10 xl:h-10 2xl:h-14 2xl:w-14"
                />
            </a>)}
        </nav>
    </section>
  )
}
