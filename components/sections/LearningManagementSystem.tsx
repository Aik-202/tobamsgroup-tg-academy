import { lmsCourses } from "@/constant";
import Image from "next/image";
import Button from "../ui/Button";

export default function LearningManagementSystem() {
  return (
    <section className="flex flex-col gap-10 lg:gap-0 lg:flex-row 
    lg:justify-between items-center w-full p-4.5 md:p-6 py-10 lg:p-15 2xl:p-20 bg-primary/10">
      <h2 className="block lg:hidden font-semibold font-heading text-xl 
      md:text-4xl text-primary">Learning Management System</h2>
      <Image src="/images/learning-management-system.webp" 
      alt="learning-management-system" width={700} height={700} className="h-auto w-full md:w-[80%] 
      lg:w-[42%] xl:w-[40%]"/>
      <div className="w-[90%] lg:w-[52%] 2xl:w-[50%] flex 
      flex-col gap-6 xl:gap-8 2xl:gap-10 items-start">
        <h2 className="hidden lg:block font-semibold font-heading text-3xl xl:text-[40px] 
        2xl:text-[46px] text-primary">Learning Management System</h2>
        <div className="rounded-lg bg-primary/10 flex flex-col 
        gap-5 p-6 md:p-10 font-normal font-body text-dark">
          <p className="text-[14px] md:text-xl lg:text-sm xl:text-base 2xl:text-[19px]">
            TG Academy is a hub of knowledge and skill-building resources 
            designed to empower tech talents on their learning journey. 
            From technical courses covering the latest programming languages 
            and development frameworks to soft skills training in leadership, 
            effective communication and project management, TG Academy offers 
            a wide range of courses to cater to diverse learning needs. With 
            accessible and interactive learning materials, individuals can 
            enhance their skills and stay ahead in today's competitive tech 
            landscape.</p>
          <div className="flex flex-col gap-3">
            <p className="text-[16px] md:text-xl lg:text-sm xl:text-base 2xl:text-[19px]
            text-primary font-bold">Some of our courses include:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 ml-8">
              {lmsCourses.map((course => <li key={course} className="list-disc text-dark 
              text-[14px] md:text-lg lg:text-xs xl:text-sm 2xl:text-[17px] text-nowrap">
                {course}
              </li>))}
              <li className="lg:hidden -ml-8 mt-5">
                <Button text="Learn More" variant="learn_more" color="purple"/>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:block">
          <Button text="Learn More" variant="learn_more" color="purple"/>
        </div>
      </div>
    </section>
  )
}
