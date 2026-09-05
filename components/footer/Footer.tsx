import CompanyDetails from "./CompanyDetails";
import Contact from "./Contact";
import FooterCTA from "./FooterCTA";
import FooterLinks from "./FooterLinks";
import Legalnformation from "./Legalnformation";

export default function Footer() {
  return (
    <footer>
      <FooterCTA />
      <section>
        <div>
          <CompanyDetails />
          <FooterLinks />
        </div>
        <Contact />
        <Legalnformation />
      </section>
    </footer>
  )
}
