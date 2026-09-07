'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { testimonials } from '@/constants';

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;

    let nextIndex = currentIndex;
    if (direction === 'right') {
      nextIndex = Math.min(currentIndex + 1, testimonials.length - 1);
    } else {
      nextIndex = Math.max(currentIndex - 1, 0);
    }

    setCurrentIndex(nextIndex);

    const container = sliderRef.current;
    const firstCard = container.firstElementChild as HTMLElement;
    
    if (firstCard) {
      const cardWidth = firstCard.getBoundingClientRect().width;
      const gap = window.innerWidth < 768 ? 48 : 40; 
      
      container.scrollTo({
        left: nextIndex * (cardWidth + gap),
        behavior: 'smooth',
      });
    }
  };

  return (
    <section aria-labelledby="testimonials-heading" className="flex flex-col 
    gap-14 w-full overflow-hidden">
      <h2 id="testimonials-heading" className="text-center font-heading 
      text-3xl xl:text-[40px] 2xl:text-[46px] text-dark font-bold">Testimonials</h2>
      <div 
        ref={sliderRef}
        className="flex flex-row gap-12 md:gap-10 ml-6 md:ml-10 lg:ml-20 
        font-body font-normal text-dark overflow-x-auto 
        scroll-smooth scrollbar-none snap-x snap-mandatory"
      >
        {testimonials.map((testimonial,index) => (
          <figure 
            key={testimonial.name} 
            className={`flex flex-col gap-5 py-5 px-6 w-[85vw] md:w-100 2xl:w-110
            shrink-0 bg-white border-2 border-transparent snap-start
            border-l-secondary rounded-2xl 
            ${index+1 == testimonials.length ? "mr-8" : "mr-0"}`}
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
        ))}
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
