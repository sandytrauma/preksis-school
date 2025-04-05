"use client";

import type { NextPage } from 'next';
import TeachersSection from '@/components/Teachers';
import React, { useRef, useEffect } from 'react';
import TestimonialsSlider from '@/components/Testimonial';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import ContactUs from '@/components/ContactUs';

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
        className="fixed inset-0 w-full h-full object-cover"
      >
        <source src="/preksis-preschool-loop-homepage-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 h-full overflow-y-auto">
        <main className="relative bg-opacity-60 backdrop-blur-md">
          <header className="bg-gradient-to-r from-blue-400 to-purple-500 py-6 text-center rounded-br-xl rounded-bl-xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-yellow-200 opacity-20 mix-blend-overlay rounded-br-xl rounded-bl-xl"></div>
            <h1 className="text-4xl text-white font-extrabold shadow-md">
              <span className="inline-block py-2 px-4 rounded-full bg-pink-300 bg-opacity-75 text-shadow-lg">
                Welcome to Preksis Preschool
              </span>
            </h1>
          </header>

          <section className="py-40 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-yellow-100 to-green-200 opacity-30 rounded-tl-3xl rounded-br-3xl"></div>
            <div className="container mx-auto text-center relative z-10">
              <p className="text-2xl text-teal-700 font-semibold shadow-sm">
                A world of discovery and joyful learning awaits your little one!
              </p>
              <p className="mt-4 text-lg text-gray-700">We provide a nurturing and educational environment for young learners.</p>
            </div>
            <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 w-48 h-48 bg-blue-300 rounded-full filter blur-xl opacity-50"></div>
            <div className="absolute top-10 left-10 transform -translate-x-1/4 -translate-y-1/4 w-32 h-32 bg-red-300 rounded-full filter blur-xl opacity-50"></div>
          </section>

          <section className="relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-100 to-pink-100 opacity-25"></div>
            <div className="relative z-10">
              <TeachersSection />
            </div>
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-purple-200 rounded-full filter blur-xl opacity-50"></div>
          </section>

          <section className="py-16 bg-lime-100 rounded-tl-3xl rounded-br-3xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-pattern-dots bg-repeat opacity-20"></div>
            <div className="container mx-auto text-center relative z-10">
              <h2 className="text-3xl font-bold text-indigo-700 mb-8 shadow-md">Explore Our Fun Programs!</h2>
              <p className="text-lg text-gray-600">From playful activities to foundational learning, we offer programs designed to spark curiosity and growth.</p>
              {/* Add more engaging program highlights here */}
            </div>
            <div className="absolute top-10 right-10 transform translate-x-1/4 -translate-y-1/4 w-40 h-40 bg-green-300 rounded-full filter blur-xl opacity-50"></div>
          </section>

          <section className="relative overflow-hidden py-20">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-teal-100 to-cyan-100 opacity-30"></div>
            <div className="relative z-10">
              <TestimonialsSlider testimonials={testimonialsData} transitionDuration={4000} />
            </div>
            <div className="absolute bottom-10 left-10 transform -translate-x-1/4 translate-y-1/4 w-56 h-56 bg-yellow-300 rounded-full filter blur-xl opacity-50"></div>
          </section>
        </main>

        <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-12 rounded-tl-3xl rounded-tr-3xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-pink-200 opacity-10 mix-blend-overlay rounded-tl-3xl rounded-tr-3xl"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="md:flex md:justify-between md:items-start lg:items-center">
              {/* Contact Information */}
              <div className="mb-8 md:mb-0 md:w-1/3 lg:w-1/4">
                <ContactUs />
              </div>

              {/* Quick Links */}
              <div className="mb-8 md:mb-0 md:w-1/3 lg:w-1/4">
                <h3 className="text-xl font-semibold text-yellow-300 mb-4">Explore</h3>
                <ul className="list-none space-y-2">
                  <li><a href="/about" className="text-gray-300 hover:text-yellow-200 transition-colors duration-300">Our Story</a></li>
                  <li><a href="/programs" className="text-gray-300 hover:text-yellow-200 transition-colors duration-300">Learning Fun</a></li>
                  <li><a href="/admissions" className="text-gray-300 hover:text-yellow-200 transition-colors duration-300">Join Us</a></li>
                  <li><a href="/gallery" className="text-gray-300 hover:text-yellow-200 transition-colors duration-300">Happy Moments</a></li>
                  <li><a href="/faq" className="text-gray-300 hover:text-yellow-200 transition-colors duration-300">Questions?</a></li>
                </ul>
              </div>

              {/* Social Media */}
              <div className="md:w-1/3 lg:w-1/4">
                <h3 className="text-xl font-semibold text-cyan-300 mb-4">Let's Connect!</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    <FaFacebook size={24} />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-sky-400 transition-colors duration-300">
                    <FaTwitter size={24} />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-pink-500 transition-colors duration-300">
                    <FaInstagram size={24} />
                  </a>
                  {/* Add more social media icons as needed */}
                </div>
              </div>
            </div>

            {/* Copyright and Legal */}
            <div className="mt-10 py-4 border-t border-gray-700 text-center text-sm text-gray-400">
              <p>&copy; {new Date().getFullYear()} Preksis Preschool. All rights reserved.</p>
              <ul className="list-none flex justify-center space-x-4 mt-2">
                <li><a href="/privacy" className="hover:text-gray-300 transition-colors duration-300">Our Promises</a></li>
                <li><a href="/terms" className="hover:text-gray-300 transition-colors duration-300">Little Rules</a></li>
              </ul>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 w-40 h-40 bg-blue-300 rounded-full filter blur-xl opacity-30"></div>
          <div className="absolute top-5 left-5 transform -translate-x-1/4 -translate-y-1/4 w-32 h-32 bg-yellow-300 rounded-full filter blur-xl opacity-30"></div>
        </footer>
      </div>
    </div>
  );
};

export default Home;