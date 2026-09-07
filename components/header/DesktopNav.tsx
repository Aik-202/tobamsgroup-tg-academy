import { navList } from "@/constants";
import Link from "next/link";
import { ChevronDown } from "../icons/ChevronDown";

export default function DesktopNav({ active }: { active: string }) {
  return (
    <ul className="hidden lg:flex lg:flex-row lg:gap-5 xl:gap-8 self-center mb-4">
      {navList.map((item) => (
        <li
          key={item.text}
          aria-haspopup={item.dropdown ? "true" : undefined}
          aria-expanded={item.dropdown ? "false" : undefined}
        >
          <Link
            href={item.link}
            className={`border border-transparent p-2 md:p-5 lg:p-0.5 xl:p-1
            text-lg md:text-xl lg:text-sm xl:text-base 2xl:text-[16px]
            ${
              active === item.text
                ? "text-white lg:text-primary font-semibold border-b-transparent lg:border-b-primary"
                : "text-light lg:text-dark font-medium border-transparent"
            }
            font-body flex flex-row justify-between lg:justify-normal
            lg:gap-1 items-center transition-all duration-300 ease-out
            hover:border-b-primary hover:text-primary hover:font-semibold`}
          >
            <span>{item.text}</span>

            {item.dropdown && (
              <ChevronDown
                className={`${
                  active === item.text
                    ? "color-white lg:color-primary"
                    : "color-dark"
                } w-8 h-8 lg:w-5 lg:h-5`}
              />
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}