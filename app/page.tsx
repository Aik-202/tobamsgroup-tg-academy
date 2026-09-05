import Footer from "@/components/footer/Footer";
import NavBar from "@/components/header/NavBar";
import BookConsultation from "@/components/sections/BookConsultation";
import Hero from "@/components/sections/Hero";
import LearningManagementSystem from "@/components/sections/LearningManagementSystem";
import LearningWithCeo from "@/components/sections/LearningWithCeo";
import ManagementDevelopmentProgram from "@/components/sections/ManagementDevelopmentProgram";
import Testimonials from "@/components/sections/Testimonials";
import Trainings from "@/components/sections/Trainings";
import TrainingTheConsultant from "@/components/sections/TrainingTheConsultant";

export default function Home() {
  return (
   <>
    <NavBar />
    <main className="flex flex-col gap-8">
      <Hero />
      <LearningManagementSystem />
      <Trainings />
      <ManagementDevelopmentProgram />
      <LearningWithCeo />
      <TrainingTheConsultant />
      <BookConsultation />
      <Testimonials />
      <Footer />
    </main>
   </>
  );
}
