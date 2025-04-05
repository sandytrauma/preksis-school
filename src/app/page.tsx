"use client";

import type { NextPage } from 'next';
import TeachersSection from '@/components/Teachers';
import React, { useRef, useEffect } from 'react';
import Testimonials from '@/components/Testimonial';
import TestimonialsSlider from '@/components/Testimonial';


const testimonialsData = [
  {
    name: 'Priya Sharma',
    role: 'Mother of Aryan',
    quote:
      'Preksis has been a wonderful experience for my son. The teachers are caring and the learning environment is stimulating. He looks forward to going to school every day!',
    imageSrc: '/images/priya.jpg', 
  },
  {
    name: 'Roohi Kumar',
    role: 'Mother of Siya',
    quote:
      'We are so impressed with the progress Siya has made at Preksis. Her communication skills and confidence have grown significantly. Highly recommend!',
    imageSrc: '/images/roohi.jpg',
  },
  {
    name: 'Sneha Patel',
    role: 'Mother of Rohan',
    quote:
      'The curriculum at Preksis is fantastic. Rohan loves the hands-on activities and the focus on creativity. It’s a nurturing and supportive environment.',
    imageSrc: '/images/sneha.jpg', // Replace with actual image path
  },
  {
    name: 'Amita Verma',
    role: 'Mother of Isha',
    quote:
      'The teachers at Preksis are dedicated and truly care about each child’s development. Isha has blossomed socially and academically since joining.',
    imageSrc: '/images/amita.jpg', // Replace with actual image path
  },
];

const Home: NextPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="fixed inset-0 w-full h-full object-cover" // Changed to 'fixed'
      >
        <source src="/preksis-preschool-loop-homepage-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 h-full overflow-y-auto">
        <main className="relative bg-opacity-50 backdrop-blur-md">
          <header className="bg-gradient-to-r from-violet-200 to-red-300 py-4 text-center">
            <h1 className="text-4xl text-slate-200 font-bold">Welcome to Preksis Preschool</h1>
          </header>

          <section className="py-52">
            <div className="container mx-auto text-center">
              <p className="text-xl text-white">We provide a nurturing and educational environment for young learners.</p>
            </div>
          </section>

          <TeachersSection />

          <section className="py-16 bg-gray-200">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Our Programs</h2>
              <p>Details about your preschool programs here...</p>
            </div>
          </section>
          <section>
          <TestimonialsSlider testimonials={testimonialsData} transitionDuration={4000} />
          </section>
        </main>

        <footer className="bg-gray-800 text-white text-center py-4">
          <p>&copy; {new Date().getFullYear()} Preksis Preschool. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;