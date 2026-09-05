import Image from "next/image";
import NavItems from "./NavItems";
import Button from "../ui/Button";

export default function NavBar() {
  return (
    <nav>
      <header>
        <Image src="/images/logo.png" alt="tobamsgroup" width={100} height={100} className="h-auto w-50"/>
        <div>
          <Button color="purple" text="Account" variant="account"/>
          <Button color="red" text="Take Assessment" />
        </div>
      </header>
      <NavItems />
    </nav>
  )
}
