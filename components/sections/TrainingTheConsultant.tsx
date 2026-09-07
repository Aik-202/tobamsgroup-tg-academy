import { consultantPrograms } from "@/constants";
import Button from "../ui/Button";

export default function TrainingTheConsultant() {
  return (
    <section className="flex flex-col gap-5 xl:gap-8 p-5 md:p-10 md:py-15 
    lg:p-20 bg-primary-10 items-start">
      <h2 className="font-semibold font-heading text-2xl md:text-4xl xl:text-[40px] 
      2xl:text-[46px] text-primary">Training The Consultant</h2>
      <p className="font-semibold font-body text-[18px] md:text-[16px] 
      lg:text-[14px] xl:text-lg 2xl:text-xl text-primary">Maximise Your Potential as a Certified Trainer:</p>
      <p className="text-dark font-body text-[14px] md:text-[16px] 
      lg:text-[14px] xl:text-lg 2xl:text-[18px]">With the help of our Training Consultants program, 
        take a revolutionary step toward becoming a 
        distinguished certified training consultant. Learn 
        from professionals in the field, immerse yourself 
        in a thorough curriculum, and hone your training methods 
        through interactive workshops. Participating in our program 
        will enable you to gain expertise in diverse courses while 
        also developing the abilities to mentor and encourage others 
        in their career advancement.</p>
      <ul className="grid grid-cols-1 md:grid-cols-2 
      bg-primary rounded-lg gap-10 p-6 2xl:py-8 text-white 
      font-body font-normal text-[14px] md:text-[16px] 
      lg:text-[14px] xl:text-lg 2xl:text-[18px]">
        {consultantPrograms.map((course => <li key={course.heading} className="flex flex-col gap-3">
          <span className="font-bold text-[18px] lg:text-[14px] 
          xl:text-lg 2xl:text-[18px]">{course.heading}</span>
          <span>{course.text}</span>
        </li>))}
      </ul>
      <Button color="purple" text="Learn More" variant="learn_more_right"/>
    </section>
  )
}
