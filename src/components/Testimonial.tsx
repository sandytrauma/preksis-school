import React, { useState, useEffect, useRef } from 'react';

interface TestimonialProps {
  name: string;
  role: string;
  quote: string;
  imageSrc: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, role, quote, imageSrc }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-80 md:w-96 flex-shrink-0">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden shadow-sm">
          <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="font-semibold text-gray-900">{name}</div>
          <div className="text-sm text-gray-500">{role}</div>
        </div>
      </div>
      <blockquote className="text-gray-700 italic">
        "{quote}"
      </blockquote>
    </div>
  );
};

interface TestimonialsProps {
  testimonials: TestimonialProps[];
  transitionDuration?: number; // in milliseconds, default 5000
}

const TestimonialsSlider: React.FC<TestimonialsProps> = ({ testimonials, transitionDuration = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, transitionDuration);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [testimonials.length, transitionDuration]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(-${currentIndex * (320 + 16)}px)`; 
      containerRef.current.style.transition = 'transform 0.5s ease-in-out';
    }
  }, [currentIndex]);

  return (
    <section className="py-12 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          What Parents Say
        </h2>
        <div className="overflow-x-auto scroll-smooth custom-scrollbar-hidden">
          <div
            ref={containerRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ width: `${testimonials.length * (320 + 16)}px` }} // Dynamic width
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="mr-4">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;