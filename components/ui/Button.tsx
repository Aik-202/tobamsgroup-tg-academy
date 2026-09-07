import Image from "next/image";
import { ChevronDown } from "../icons/ChevronDown";
import ArrowUpRight from "../icons/ArrowUpRight";
import ChevronRight from "../icons/ChevronRight";

type ButtonProps = {
  color: "purple" | "red" | "white";
  variant?: "account" | "learn_more" | "learn_more_right"
  text: string,
  size?: "normal" | "big" 
};

export default function Button({color, variant, text, size}: ButtonProps) {
  return (
    <button type="button" 
    aria-haspopup={variant === "account" ? "true" : undefined} 
    aria-expanded={variant === "account" ? "false" : undefined}
    className={`
    flex flex-row items-center rounded-sm py-1
    border border-transparent
    cursor-pointer
    transition-all duration-300 ease-out
    hover:-translate-y-1 hover:shadow-md hover:bg-transparent

    ${
      color === "red"
        ? "bg-secondary text-white hover:border-secondary hover:text-secondary"
        : variant === "account" ||
          variant === "learn_more" ||
          variant === "learn_more_right"
        ? "bg-primary text-white hover:border-primary hover:text-primary"
        : color === "purple"
        ? "bg-primary text-white hover:border-white hover:text-white"
        : "bg-white text-primary hover:border-white hover:text-white"
    }

    ${
      size === "big" ||
      variant === "learn_more" ||
      variant === "learn_more_right"
        ? "px-6"
        : "px-4"
    }
    `}>
        
        {variant == "account" && <figure className="bg-light rounded-full 
        w-6 xl:w-8 lg:h-full mr-2 m-1">
            <Image src="/icons/user.svg"
            alt="User Profile" width={28} height={28} className="h-auto w-full"/>
        </figure>}
        <span className={`font-body font-semibold ${variant == "learn_more" 
        || variant == "learn_more_right" ? "text-sm" 
        : "text-base" } md:text-xl lg:text-base xl:text-lg my-2`}>{text}</span>
        {variant == "account" &&  <ChevronDown className="color-purple/10 hover:color-primary w-6 ml-1" />}
        {variant == "learn_more" && <ArrowUpRight className="h-auto w-5 md:w-6 
        ml-2 md:ml-3 hover:text-primary"/>}
        {variant == "learn_more_right" && <ChevronRight className="h-auto w-5 md:w-6 
        ml-2 md:ml-3 hover:text-primary"/>}
    </button>
  )
}
