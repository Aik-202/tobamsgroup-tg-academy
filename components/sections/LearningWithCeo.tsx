import Image from "next/image";
import Button from "../ui/Button";
import { ceoPrograms } from "@/constants";
import { Lightning } from "../icons/Lightning";
import ceoProgramsPhoto from "../../public/images/learning-with-ceo.jpg"
import Reveal from "../animation/Reveal";

export default function LearningWithCeo() {
  return (
    <Reveal className="bg-white py-20">
      <div className="rounded-2xl flex flex-col mx-5 
      md:mx-8 xl:mx-12 2xl:mx-30 bg-secondary-20 p-5 md:p-8 xl:p-10 2xl:p-14">
        <p className="font-semibold font-heading text-sm md:text-xl lg:italic 
        text-pending mb-2 md:mb-4">Learning With Our CEO:</p>
        <h2 className="mb-5 md:mb-8 font-heading font-semibold text-primary italic 
        text-xl md:text-3xl xl:text-4xl 2xl:text-[46px] -ml-2">Transformation Hub With Jite Newton</h2>
        <p className="text-dark font-body text-[14px] md:text-[20px] 
        text-base xl:text-lg 2xl:text-[18px]">Transformation Hub with Jite Newton is a flagship 
          webinar series curated by the CEO, Dr. Jite Newton. 
          Designed to elevate career trajectories and leadership 
          capabilities, this exclusive event offers invaluable 
          insights and strategies for personal and professional growth. 
          Whether you're seeking to advance your career or enhance your 
          leadership skills, the Transformation Hub provides a 
          transformative learning experience to unlock your full 
          potential and drive success in your endeavours.</p>

        <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row lg:justify-between items-center mt-8">
          <Image src={ceoProgramsPhoto} placeholder='blur'
          alt="learning-with-ceo" width={600} height={600} className="h-auto w-full lg:w-[60%] xl:w-[43%] 2xl:w-[48%] 
          object-cover rounded-lg" />

          <div className="flex flex-col gap-8 items-start justify-center 
          w-full lg:w-max xl:w-[52%] 2xl:w-[48%] h-max bg-white/30 rounded-lg py-8 px-5">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5 w-full">
              {ceoPrograms.map((course => <li key={course} className="flex flex-row gap-2 xl:gap-3 
            items-center bg-white rounded-xl text-dark py-3 px-5 font-body 
            font-normal text-[14px] md:text-[17px] lg:text-base 2xl:text-[16px] text-nowrap">
                <Lightning variant="outlined" className="w-5 h-5 xl:w-6 xl:h-6"/>
                <span>{course}</span>
                </li>))}
            </ul>
            <Button color="purple" text="Learn More" variant="learn_more"/>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
