import { managementDevPrograms } from "@/constants";
import { Lightning } from "../icons/Lightning";
import Image from "next/image";

export default function ManagementDevelopmentProgram() {
  return (
    <section className="flex flex-col gap-5 lg:gap-0 lg:flex-row lg:justify-between mx-5 
    md:mx-8 xl:mx-12 2xl:mx-24 bg-primary-mid rounded-[20px] p-5 md:p-8 xl:p-10 2xl:p-14">
      <h2 className="lg:hidden text-white font-heading text-[18px] md:text-3xl  
      font-semi-bold md:leading-12">
        Management Development Program</h2>
      <Image src="/images/management-development-program.jpg" 
      alt="management-development-program" width={900} height={900} className="h-auto lg:w-[43%] 
      xl:w-[42%] 2xl:w-[45%] object-cover rounded-[20px]"
      />      
      <div className="flex flex-col gap-8 text-white lg:w-[48%]">
        <h2 className="hidden lg:block font-heading text-3xl xl:text-4xl 2xl:text-[46px]
        font-semi-bold leading-12 xl:leading-14 2xl:leading-20">
          Management Development Program</h2>
        <p className="font-normal text-[14px] md:text-[20px] lg:text-sm 
        xl:text-base 2xl:text-[18px] font-body">Tobams Group offers a comprehensive Management
          Development Program designed to equip corporate
          organisations with the high
          -performing leaders they need to
          thrive.
          <br /> <br />
          Our program includes workshops, seminars, coaching
          sessions, online courses, and experiential learning
          opportunities designed to improve leadership, strategic
          thinking, communication, and other essential managerial
          competencies for corporate organisations.</p>
        <ul className="flex flex-col gap-5 lg:ml-8">
          {managementDevPrograms.map((course => <li key={course} className="flex flex-row gap-2 xl:gap-3 
          items-center bg-primary-40 rounded-lg rounded-t-sm rounded-b-sm py-3 lg:py-2 px-4 font-body 
          font-normal text-[14px] md:text-[20px] lg:text-sm xl:text-base 2xl:text-lg">
            <Lightning variant="light" className="w-5 h-5 xl:w-6 xl:h-6"/>
            <span>{course}</span>
          </li>))}
        </ul>
      </div>
    </section>
  )
}
