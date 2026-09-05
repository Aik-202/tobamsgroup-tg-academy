import { lmsCourses } from "@/constant";
import Image from "next/image";
import Button from "../ui/Button";

export default function LearningManagementSystem() {
  return (
    <section>
      <Image src="/images/learning-management-system.webp" 
      alt="learning-management-system" width={100} height={100} className="h-auto w-50"/>
      <div>
        <h2>Learning Management System</h2>
        <p>TG Academy is a hub of knowledge and skill-building resources 
          designed to empower tech talents on their learning journey. 
          From technical courses covering the latest programming languages 
          and development frameworks to soft skills training in leadership, 
          effective communication and project management, TG Academy offers 
          a wide range of courses to cater to diverse learning needs. With 
          accessible and interactive learning materials, individuals can 
          enhance their skills and stay ahead in today's competitive tech 
          landscape.</p>
        <div>
          <p>Some of our courses include:</p>
          <ul>
            {lmsCourses.map((course => <li key={course}>
              {course}
            </li>))}
          </ul>
        </div>
        <Button text="Learn More" variant="learn_more" color="purple"/>
      </div>
    </section>
  )
}
