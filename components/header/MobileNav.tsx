import { navList } from "@/constants";
import Link from "next/link";
import { ChevronDown } from "../icons/ChevronDown";
import Button from "../ui/Button";
import Dropdown from "../animation/DropDown";

export default function MobileNav({
  active,
  menuOpen,
}: {
  active: string;
  menuOpen: boolean;
}) {
  return (
    <Dropdown open={menuOpen}>
      <ul
        className="lg:hidden absolute w-full p-5 top-24 z-20
        bg-primary-dark min-h-screen flex flex-col gap-2"
      >
        {navList.map((item) => (
          <li key={item.text}>
            <Link
              href={item.link}
              className={`border border-transparent p-2 md:p-5
              text-lg md:text-xl
              ${
                active === item.text
                  ? "text-white font-semibold"
                  : "text-light font-medium"
              }
              font-body flex flex-row justify-between items-center`}
            >
              <span>{item.text}</span>

              {item.dropdown && (
                <ChevronDown
                  className={`${
                    active === item.text
                      ? "color-white"
                      : "color-dark"
                  } w-8 h-8`}
                />
              )}
            </Link>
          </li>
        ))}

        <li className="flex flex-col gap-5 md:gap-8 mt-3 md:mt-4 w-max">
          <Button
            color="purple"
            text="Account"
            variant="account"
          />

          <Button
            color="red"
            text="Take Assessment"
          />
        </li>
      </ul>
    </Dropdown>
  );
}