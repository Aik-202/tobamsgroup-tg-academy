import Reveal from "../animation/Reveal";
import CompanyDetails from "./CompanyDetails";
import Contact from "./Contact";
import FooterCTA from "./FooterCTA";
import FooterLinks from "./FooterLinks";
import Legalnformation from "./Legalnformation";

export default function Footer() {
  return (
    <footer>
      <FooterCTA />
      <section className="bg-primary-dark flex flex-col gap-10 
      p-5 md:p-10 md:px-14 text-white">
        <Reveal className="flex flex-col gap-5 lg:gap-0 lg:flex-row 
        lg:justify-between font-normal 
        font-body text-xs md:text-[16px] lg:text-xs xl:text-sm 
        2xl:text-base w-full">
          <CompanyDetails />
          <FooterLinks />
        </Reveal>
        <Contact />
        <Legalnformation />
      </section>
    </footer>
  )
}
