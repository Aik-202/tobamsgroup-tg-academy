'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { testimonials } from '@/constants';

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const manualScrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const [isPaused, setIsPaused] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;

    const container = sliderRef.current;
    const firstCard = container.querySelector('figure') as HTMLElement;

    if (!firstCard) return;

    const secondCard = firstCard.nextElementSibling as HTMLElement;

    if (!secondCard) return;

    // Calculate the actual distance between cards
    const scrollAmount = secondCard.offsetLeft - firstCard.offsetLeft;

    // Pause the desktop marquee while manually scrolling
    setIsPaused(true);

    container.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });

    // Clear any existing resume timer
    if (manualScrollTimeoutRef.current) {
      clearTimeout(manualScrollTimeoutRef.current);
    }

    // Resume the marquee after the smooth scroll finishes
    manualScrollTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 700);
  };

  useEffect(() => {
    const container = sliderRef.current;

    if (!container) return;

    const mediaQuery = window.matchMedia('(min-width: 540px)');

    // Auto marquee only runs on desktop
    if (!mediaQuery.matches) return;

    const speed = 0.5;

    const animate = () => {
      if (!isPaused) {
        container.scrollLeft += speed;

        const duplicateStart = container.children[
          testimonials.length
        ] as HTMLElement;

        if (
          duplicateStart &&
          container.scrollLeft >= duplicateStart.offsetLeft
        ) {
          container.scrollLeft -= duplicateStart.offsetLeft;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  useEffect(() => {
    return () => {
      if (manualScrollTimeoutRef.current) {
        clearTimeout(manualScrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="flex flex-col gap-14 w-full overflow-hidden"
    >
      <h2
        id="testimonials-heading"
        className="text-center font-heading text-3xl xl:text-[40px]
        2xl:text-[46px] text-dark font-bold"
      >
        Testimonials
      </h2>

      <div
        ref={sliderRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="
          flex flex-row gap-12 md:gap-10
          ml-6 md:ml-10 lg:ml-20
          font-body font-normal text-dark
          overflow-x-auto
          scrollbar-none
          scroll-smooth
          snap-x snap-mandatory
          lg:snap-none
        "
      >
        {/* First set */}
        {testimonials.map((testimonial, index) => (
          <figure
            key={`first-${testimonial.name}`}
            className={`flex flex-col gap-5 py-5 px-6
            w-[85vw] md:w-100 2xl:w-110
            shrink-0 bg-white border-2 border-transparent
            snap-start border-l-secondary rounded-2xl
            ${
              index + 1 === testimonials.length ? 'mr-8' : 'mr-0'
            }`}
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
                <cite className="font-semibold text-sm md:text-base not-italic">
                  {testimonial.name}
                </cite>

                <span className="text-xs md:text-sm text-subdued">
                  {testimonial.position}
                </span>
              </div>
            </figcaption>

            <blockquote>
              <p className="text-sm md:text-base 2xl:text-lg">
                {testimonial.comment}
              </p>
            </blockquote>
          </figure>
        ))}

        {/* Duplicate set for desktop marquee */}
        {testimonials.map((testimonial) => (
          <figure
            key={`second-${testimonial.name}`}
            aria-hidden="true"
            className="
              flex flex-col gap-5 py-5 px-6
              w-[85vw] md:w-100 2xl:w-110
              shrink-0
              bg-white
              border-2 border-transparent
              border-l-secondary
              rounded-2xl
            "
          >
            <figcaption className="flex flex-row gap-3">
              <Image
                src={testimonial.profilePic}
                alt=""
                width={100}
                height={100}
                className="h-12 w-12 rounded-full object-cover"
              />

              <div className="flex flex-col gap-1">
                <cite className="font-semibold text-sm md:text-base not-italic">
                  {testimonial.name}
                </cite>

                <span className="text-xs md:text-sm text-subdued">
                  {testimonial.position}
                </span>
              </div>
            </figcaption>

            <blockquote>
              <p className="text-sm md:text-base 2xl:text-lg">
                {testimonial.comment}
              </p>
            </blockquote>
          </figure>
        ))}
      </div>

      <div className="flex flex-row gap-3 self-end mr-10">
        <button
          type="button"
          onClick={() => scroll('left')}
          aria-label="Previous slide"
        >
          <Image
            src="/icons/arrow-left.svg"
            alt=""
            aria-hidden="true"
            width={24}
            height={24}
            className="w-8 h-8"
          />
        </button>

        <button
          type="button"
          onClick={() => scroll('right')}
          aria-label="Next slide"
        >
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