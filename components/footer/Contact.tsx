import Image from "next/image";

export default function Contact() {
  return (
    <section className="bg-white/6 rounded-lg p-5 md:p-8 flex flex-col-reverse gap-3 lg:gap-0 lg:flex-row 
   text-xs md:text-[16px] lg:text-xs xl:text-sm 2xl:text-base font-body font-normal items-end w-full">
        <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col">
                <h3 className="mb-3 font-bold font-heading text-base md:text-[18px] 
                lg:text-base xl:text-lg 2xl:text-xl">Registered Offices</h3>
                <p className="font-semibold text-secondary">United Kingdom</p>
                <p className="w-[95%] lg:w-[72%] xl:w-[60%] 2xl:w-[40%]">07451196 (Registered by Company House) 
                    Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA</p>
            </div>

            <div className="flex flex-col lg:pl-5 lg:pb-5 border border-transparent 
            lg:border-l-light h-max mt-5 lg:mt-0">
                <p className="font-semibold text-secondary">Nigeria</p>
                <p className="w-[95%] lg:w-[80%] xl:w-[90%] 2xl:w-[72%]">RC 1048722 (Registered by the Corporate Affairs Commission) 
                    4, Muaz Close, Angwar-Rimi</p>
            </div>
        </div>

        <div className="flex flex-col lg:pl-5 pb-5 border border-transparent 
        lg:border-l-light h-max w-full lg:w-90 2xl:w-70">
            <h3 className="mb-5 lg:mb-3 font-bold font-heading text-base md:text-[18px] 
            lg:text-base xl:text-lg 2xl:text-xl">Contact Information</h3>
            <div className="flex flex-row gap-3 items-center mb-3">
                <Image src="/icons/mail.svg" alt="" aria-hidden="true" 
                width={24} height={24} className="w-4 h-4 md:w-6 md:h-6 
                lg:h-4 lg:w-4 xl:h-6 xl:w-6" />
                <p>theteam@tobamsgroup.com</p>
            </div>
            <div className="flex flex-row gap-3 items-center">
                <Image src="/icons/phone.svg" alt="" aria-hidden="true"
                width={24} height={24} className="w-4 h-4 md:w-6 md:h-6 
                lg:h-4 lg:w-4 xl:h-6 xl:w-6" />
                <p>+447886600748</p>
            </div>
        </div>
    </section>
  )
}
