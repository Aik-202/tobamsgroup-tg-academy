import { trainings } from "@/constant";
import { Lightning } from "../icons/Lightning";
import Image from "next/image";

export default function Trainings() {
  return (
    <section>
      <div>
        {trainings.map((training, index) => <div key={training.heading}>
          <div>
            <h3>{training.heading}</h3>
            <p>{training.body}</p>
            <ul>
              {training.programs.map((course => <li key={course}>
                <Lightning variant="solid"/>
                <span>{course}</span>
              </li>))}
            </ul>
          </div>
          <Image src={training.image} 
          alt={training.heading} width={100} height={100} className="h-auto w-50"  />
        </div>)}
      </div>
    </section>
  )
}
