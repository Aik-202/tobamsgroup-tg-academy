import { testimonials } from "@/constant";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading">
      <h2 id="testimonials-heading">Testimonials</h2>
      <div>
        {testimonials.map((testimonial =>  <figure key={testimonial.name}>
          <figcaption>
            <Image
              src={testimonial.profilePic}
              alt={testimonial.name}
              width={100}
              height={100}
              className="h-auto w-50"
            />

            <div>
              <cite>{testimonial.name}</cite>
              <span>{testimonial.position}</span>
            </div>

          </figcaption>

          <blockquote>
            <p>{testimonial.comment}</p>
          </blockquote>

        </figure>))}
      </div>
    </section>
  )
}
