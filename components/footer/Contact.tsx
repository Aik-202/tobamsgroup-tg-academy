import Image from "next/image";

export default function Contact() {
  return (
    <section>
        <div>
            <h3>Registered Offices</h3>
            <p>United Kingdom</p>
            <p>07451196 (Registered by Company House) Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA</p>
        </div>

        <div>
            <p>Nigeria</p>
            <p>RC 1048722 (Registered by the Corporate Affairs Commission) 4, Muaz Close, Angwar-Rimi</p>
        </div>

        <div>
            <h3>Contact Information</h3>
            <div>
                <Image src="/icons/mail.svg" alt="" aria-hidden="true" width={24} height={24} className="h-auto w-50" />
                <p>theteam@tobamsgroup.com</p>
            </div>
            <div>
                <Image src="/icons/phone.svg" alt="" aria-hidden="true" width={24} height={24} className="h-auto w-50" />
                <p>+447886600748</p>
            </div>
        </div>
    </section>
  )
}
