import Image from "next/image";
import { ChevronDown } from "../icons/ChevronDown";

type ButtonProps = {
  color: "purple" | "red" | "white";
  variant?: "account" | "learn_more" 
  text: string,
};

export default function Button({color, variant, text}: ButtonProps) {
  return (
    <button type="button" 
    aria-haspopup={variant === "account" ? "true" : undefined} 
    aria-expanded={variant === "account" ? "false" : undefined}
    className={`flex flex-row gap-2 items-center
    ${color == "purple" ? "bg-primary text-white" 
    : color == "red" ? "bg-secondary text-white" 
    : "bg-white text-primary"}`}>
        
        {variant == "account" && <Image src="/icons/user.svg" 
        alt="User Profile" width={48} height={48}/>}
        <span>{text}</span>
        {variant == "account" &&  <ChevronDown className="bg-purple/10" />}
        {variant == "learn_more" && <Image src="/icons/arrow-up-right.svg" 
        alt="" aria-hidden="true" width={48} height={48} />}
    </button>
  )
}
