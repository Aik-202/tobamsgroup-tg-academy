import Button from "../ui/Button";
import Logo from "../Logo";
import Image from "next/image";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function NavBar({ active, menuOpen, setMenuOpen } 
  : {active: string, menuOpen: boolean, setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <nav className={`${menuOpen ? "min-h-screen lg:min-h-full" : "h-auto"} 
    flex flex-col gap-4 relative`}>
      <header className="w-full flex flex-row justify-between border border-transparent
      border-b-light px-5 lg:px-3 -mb-2 md:mb-0">
        <Logo />
        <div className="hidden lg:flex flex-row gap-10 items-center">
          <Button color="purple" text="Account" variant="account"/>
          <Button color="red" text="Take Assessment" />
        </div>
        <button
          type="button"
          className="lg:hidden cursor-pointer"
          aria-haspopup="true"
          aria-expanded={menuOpen ? "true" : "false"}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <Image 
            src={menuOpen ? "/icons/hamburger-close.svg" : "/icons/hamburger-open.svg"} 
            alt="" 
            aria-hidden="true" 
            width={24} 
            height={24} 
            className="h-auto w-9" 
            placeholder='blur'
          />
        </button>
      </header>
      <DesktopNav active={active} />
      <MobileNav
        active={active}
        menuOpen={menuOpen}
      />
    </nav>
  )
}
