import { consultantPrograms } from "@/constant";
import Button from "../ui/Button";

export default function TrainingTheConsultant() {
  return (
    <section>
      <h2>Training The Consultant</h2>
      <p>Maximise Your Potential as a Certified Trainer:</p>
      <p>With the help of our Training Consultants program, 
        take a revolutionary step toward becoming a 
        distinguished certified training consultant. Learn 
        from professionals in the field, immerse yourself 
        in a thorough curriculum, and hone your training methods 
        through interactive workshops. Participating in our program 
        will enable you to gain expertise in diverse courses while 
        also developing the abilities to mentor and encourage others 
        in their career advancement.</p>
      <ul>
        {consultantPrograms.map((course => <li key={course.heading}>
          <span>{course.heading}</span>
          <span>{course.text}</span>
        </li>))}
      </ul>
      <Button color="purple" text="Learn More" variant="learn_more"/>
    </section>
  )
}
