import Button from "../ui/Button";

export default function FooterCTA() {
  return (
    <section className="bg-primary-90 border-2 border-transparent border-b-inner flex 
    flex-col gap-8 lg:gap-0 lg:flex-row lg:justify-between p-8
    md:px-14 md:py-10 text-white items-start lg:items-center">
        <div className="flex flex-col gap-5 font-body font-normal">
            <p className="text-sm md:text-base xl:text-lg">
            Ready to be a part of something extraordinary?</p>
            <h2 className="text-[20px] md:text-[22px] xl:text-[25px] 2xl:text-[40px]">
              Let’s work together to create a difference</h2>
        </div>
        <Button color="purple" text="Get In Touch" size="big"/>
    </section>
  )
}
