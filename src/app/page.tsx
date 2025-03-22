"use client";

import type { NextPage } from 'next';
import TeachersSection from '@/components/Teachers';
import React, { useRef, useEffect } from 'react';

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
              <p className="text-lg text-white">We provide a nurturing and educational environment for young learners.</p>
            </div>
          </section>

          <TeachersSection />

          <section className="py-16 bg-gray-200">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Our Programs</h2>
              <p>Details about your preschool programs here...</p>
            </div>
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