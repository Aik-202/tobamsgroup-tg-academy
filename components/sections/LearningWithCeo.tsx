import Image from "next/image";
import Button from "../ui/Button";
import { ceoPrograms } from "@/constant";
import { Lightning } from "../icons/Lightning";

export default function LearningWithCeo() {
  return (
    <section>
      <p>Learning With Our CEO:</p>
      <h2>Transformation Hub With Jite Newton</h2>
      <p>Transformation Hub with Jite Newton is a flagship 
        webinar series curated by the CEO, Dr. Jite Newton. 
        Designed to elevate career trajectories and leadership 
        capabilities, this exclusive event offers invaluable 
        insights and strategies for personal and professional growth. 
        Whether you're seeking to advance your career or enhance your 
        leadership skills, the Transformation Hub provides a 
        transformative learning experience to unlock your full 
        potential and drive success in your endeavours.</p>

      <div>
        <Image src="/images/learning-with-ceo.jpg" 
        alt="learning-with-ceo" width={100} height={100} className="h-auto w-50" />

        <div>
          <ul>
            {ceoPrograms.map((course => <li key={course}>
              <Lightning variant="outlined"/>
              <span>{course}</span>
              </li>))}
          </ul>
          <Button color="purple" text="Learn More" variant="learn_more"/>
        </div>
      </div>
    </section>
  )
}
