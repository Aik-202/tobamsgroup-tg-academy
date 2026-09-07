import { trainings } from "@/constants";
import { Lightning } from "../icons/Lightning";
import Image from "next/image";

export default function Trainings() {
  return (
    <section className="bg-white flex flex-col gap-10 md:gap-20 
    lg:gap-42 mx-5 md:mx-10 lg:mx-0 p-5 py-8 md:p-10 md:py-15 xl:p-20">
      {trainings.map((training, index) => <div key={training.heading} className={`flex 
      ${index%2 !== 0 ? "flex-col-reverse lg:flex-row-reverse" 
        : "flex-col-reverse lg:flex-row"} gap-5 md:gap-10 lg:gap-0 
        lg:justify-between w-full lg:items-center`}>
        <div className="flex flex-col lg:w-[50%]">
          <h3 className="hidden lg:block font-heading font-semibold text-dark lg:text-3xl 
          xl:text-4xl 2xl:text-[46px] mb-4">{training.heading}</h3>
          <p className="text-subdued text-sm md:text-xl lg:text-base 
          2xl:text-[20px] font-normal">{training.body}</p>
          <ul className="flex flex-col gap-4 mt-8 lg:ml-8">
            {training.programs.map((course => <li key={course} className="flex flex-row 
            gap-3 items-center">
              <Lightning variant="solid" className="w-4.5 h-4.5 md:w-5 md:h-5"/>
              <span className="text-subdued text-sm md:text-xl lg:text-base 
              2xl:text-[20px] font-normal">{course}</span>
            </li>))}
          </ul>
        </div>
        <Image src={training.image} placeholder='blur'
        alt={training.heading} width={600} height={600} className={`h-auto lg:w-[43%] xl:w-[42%] 2xl:w-[40%]
        ${index == 0 ? "rounded-tl-[30px] rounded-tr-3xl rounded-br-[23px] rounded-bl-[40px] lg:rounded-tl-[56px] lg:rounded-tr-3xl lg:rounded-bl-xl lg:rounded-br-[23px]" 
        : index == 1 ? "rounded-tl-[33px] rounded-tr-lg rounded-b-lg" 
        : "rounded-tl-[33px] lg:rounded-tl-[56px] rounded-tr-lg rounded-bl-lg" }`}  />
        <h3 className="block lg:hidden font-heading font-semibold text-dark text-lg md:text-4xl">{training.heading}</h3>
      </div>)}
    </section>
  )
}
