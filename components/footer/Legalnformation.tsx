import Link from "next/link";

export default function Legalnformation() {
  return (
    <section className="flex flex-col-reverse gap-5 lg:gap-0 
    lg:flex-row lg:justify-between w-full border items-center lg:items-start
    border-transparent border-t-light pt-8 font-heading font-light 
    text-xs md:text-[16px] lg:text-xs xl:text-sm 2xl:text-base px-8 md:px-0">
        <p className="text-center md:text-start">Copyright &copy; Tobams Group, 2024. All rights reserved.</p>

        <nav aria-label="Legal Navigation">
            <ul className="flex flex-row gap-5 justify-center 
            md:justify-normal md:gap-10 underline flex-wrap">
                <li className="hidden lg:block"><Link href="/terms-of-service">Terms and Conditions</Link></li>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/cookies-policy">Cookies Policy</Link></li>
                <li className="lg:hidden"><Link href="/terms-of-service">Terms and Conditions</Link></li>
            </ul>
        </nav>
    </section>
  )
}
