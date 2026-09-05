import { managementDevPrograms } from "@/constant";
import { Lightning } from "../icons/Lightning";

export default function ManagementDevelopmentProgram() {
  return (
    <section>
      <h2>Management Development Program</h2>
      <p>Tobams Group offers a comprehensive Management
        Development Program designed to equip corporate
        organisations with the high
        -performing leaders they need to
        thrive.
        <br />
        Our program includes workshops, seminars, coaching
        sessions, online courses, and experiential learning
        opportunities designed to improve leadership, strategic
        thinking, communication, and other essential managerial
        competencies for corporate organisations.</p>
      <ul>
        {managementDevPrograms.map((course => <li key={course}>
          <Lightning variant="light"/>
          <span>{course}</span>
        </li>))}
      </ul>
    </section>
  )
}
