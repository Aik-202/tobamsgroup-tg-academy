import Button from "../ui/Button";

export default function BookConsultation() {
  return (
    <section className="self-center flex flex-col gap-8 justify-center items-center
      bg-primary rounded-lg p-6 py-10 lg:py-6 2xl:py-8 text-white 
      text-[14px] md:text-[20px] lg:text-[14px] xl:text-lg 2xl:text-xl 
      w-[90%] lg:w-[72%] 2xl:w-[65%]">
      <h2 className="hidden lg:block text-center font-heading 
      font-semibold w-[68%] leading-8">
      Want to accelerate professional growth and development 
      at your organisation? See how we can help.</h2>
      <h2 className="lg:hidden text-center font-heading font-semibold 
      w-[95%] tracking-wider md:leading-8">Don't just dream it—let's build it! 
        Click now and start your project with Tobams Group. 
        Your journey to digital excellence begins here.</h2>
      <Button color="white" text="Book a Consultation" size="big"/>
    </section>
  )
}
