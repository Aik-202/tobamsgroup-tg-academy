import Image from "next/image";
import { ChevronDown } from "../icons/ChevronDown";

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
    className={`flex flex-row items-center rounded-sm py-1
    ${color == "purple" ? "bg-primary text-white" 
    : color == "red" ? "bg-secondary text-white" 
    : "bg-white text-primary"}
    ${size == "big" || variant == "learn_more" 
    || variant =="learn_more_right" ? "px-6" : "px-4" }`}>
        
        {variant == "account" && <figure className="bg-light rounded-full 
        w-6 xl:w-8 lg:h-full mr-2 m-1">
            <Image src="/icons/user.svg" placeholder='blur'
            alt="User Profile" width={28} height={28} className="h-auto w-full"/>
        </figure>}
        <span className={`font-body font-semibold ${variant == "learn_more" 
        || variant == "learn_more_right" ? "text-sm" 
        : "text-base" } md:text-xl lg:text-base xl:text-lg my-2`}>{text}</span>
        {variant == "account" &&  <ChevronDown className="color-purple/10 w-6 ml-1" />}
        {variant == "learn_more" && <Image src="/icons/arrow-up-right.svg" placeholder='blur'
        alt="" aria-hidden="true" width={24} height={24} className="h-auto w-5 md:w-6 ml-2 md:ml-3"/>}
        {variant == "learn_more_right" && <Image src="/icons/chevron-right.svg" placeholder='blur'
        alt="" aria-hidden="true" width={24} height={24} className="h-auto w-5 md:w-6 ml-2 md:ml-3"/>}
    </button>
  )
}
