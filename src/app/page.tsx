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

        <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="md:flex md:justify-between md:items-start lg:items-center">
          {/* Contact Information */}
          <div className="mb-8 md:mb-0 md:w-1/3 lg:w-1/4">
            <ContactUs/>
          </div>

          {/* Quick Links */}
          <div className="mb-8 md:mb-0 md:w-1/3 lg:w-1/4">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="list-none space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="/programs" className="text-gray-300 hover:text-white transition-colors duration-300">Our Programs</a></li>
              <li><a href="/admissions" className="text-gray-300 hover:text-white transition-colors duration-300">Admissions</a></li>
              <li><a href="/gallery" className="text-gray-300 hover:text-white transition-colors duration-300">Gallery</a></li>
              <li><a href="/faq" className="text-gray-300 hover:text-white transition-colors duration-300">FAQ</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="md:w-1/3 lg:w-1/4">
            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
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
            <li><a href="/privacy" className="hover:text-gray-300 transition-colors duration-300">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-gray-300 transition-colors duration-300">Terms of Service</a></li>
          </ul>
        </div>
      </div>
    </footer>
      </div>
    </div>
  );
};

export default Home;