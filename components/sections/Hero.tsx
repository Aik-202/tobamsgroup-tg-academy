import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="bg-hero bg-cover w-full text-white min-h-[60vh] md:h-[50vh] lg:h-[72vh] 
    xl:h-[62vh] 2xl:h-[70vh] bg-position-[50%] relative">
      <div className="absolute flex flex-col font-body 
    justify-center items-center w-full top-0 h-full z-10">
        <p className="px-8 py-3 font-semibold 
        text-sm bg-white/10 rounded-4xl">WHAT WE DO</p>
        <h1 className="font-heading font-bold text-2xl md:text-[40px] lg:text-4xl 
        xl:text-5xl 2xl:text-6xl my-4 md:my-6 xl:my-8">
          <span className="lg:hidden">Learning</span>
          <span className="hidden lg:block">Training</span> and Development</h1>
        <p className="mb-8 md:mb-10 xl:mb-14 2xl:mb-12 text-[14px] md:text-xl lg:text-base 
        xl:text-lg 2xl:text-xl font-medium md:font-semibold text-center tracking-wide
        w-[90%] 2xl:w-[67%] leading-6 md:leading-8">Our comprehensive range of programs and resources is 
          designed to enhance skills, broaden knowledge, and propel 
          careers forward in today's ever-evolving landscape.</p>
        <Button text="Book a Consultation" color="purple" size="big"/>
      </div>
      <div className="bg-black/71 lg:bg-black/70 absolute w-full h-full 
      top-0"></div>
    </section>
  )
}
