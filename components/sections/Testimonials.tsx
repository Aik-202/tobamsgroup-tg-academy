'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { testimonials } from '@/constant';

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);


  const scroll = (direction: string) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -400 : 400,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section aria-labelledby="testimonials-heading" className="flex flex-col gap-14 w-full overflow-hidden">
      <h2 id="testimonials-heading" className="text-center font-heading 
      text-3xl xl:text-[40px] 2xl:text-[46px] text-dark font-bold">Testimonials</h2>
      <div 
        ref={sliderRef}
        className="flex flex-row gap-12 md:gap-10 pl-6 md:pl-10 lg:pl-20 pr-6 md:pr-10 lg:pr-20 font-body font-normal 
      text-dark overflow-x-auto scroll-smooth scrollbar-none after:content-[''] 
      after:w-6 md:after:w-10 lg:after:w-20 after:shrink-0"
      >
        {testimonials.map((testimonial => (
          <figure 
            key={testimonial.name} 
            className="flex flex-col gap-5 py-5 px-6 w-[85vw] md:w-100 2xl:w-110
            shrink-0 bg-white border-2 border-transparent 
            border-l-secondary rounded-2xl"
          >
            <figcaption className="flex flex-row gap-3">
              <Image
                src={testimonial.profilePic}
                alt={testimonial.name}
                width={100}
                height={100}
                className="h-12 w-12 rounded-full object-cover"
              />

              <div className="flex flex-col gap-1">
                <cite className="font-semibold text-sm md:text-base not-italic">{testimonial.name}</cite>
                <span className="text-xs md:text-sm text-subdued">{testimonial.position}</span>
              </div>

            </figcaption>

            <blockquote>
              <p className="text-sm md:text-base 2xl:text-lg">{testimonial.comment}</p>
            </blockquote>

          </figure>
        )))}
      </div>
      
      <div className="flex flex-row gap-3 self-end mr-10">
        <button onClick={() => scroll('left')} aria-label="Previous slide">
          <Image 
            src="/icons/arrow-left.svg" 
            alt="" 
            aria-hidden="true"  
            width={24} 
            height={24} 
            className="w-8 h-8"
          />
        </button>
        <button onClick={() => scroll('right')} aria-label="Next slide">
          <Image 
            src="/icons/arrow-right.svg" 
            alt="" 
            aria-hidden="true" 
            width={24} 
            height={24} 
            className="w-8 h-8" 
          />
        </button>
      </div>
    </section>
  );
}
