import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import icons

const ContactUs = () => {
  return (
    <div className="mb-6 md:mb-0">
      <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
      <div className="flex items-center mb-2">
        <FaMapMarkerAlt className="mr-3 text-gray-400" size={16} />
        <address className="not-italic text-sm text-gray-300">
          Plot No B213 Indra Park,<br />
          New Delhi, Najafgarh,<br />
          Delhi - 110043, India
        </address>
      </div>
      <div className="flex items-center mb-2">
        <FaPhone className="mr-3 text-gray-400" size={16} />
        <p className="text-sm text-gray-300">Phone: <span className="font-medium">****</span></p>
      </div>

    </div>
  );
}

export default ContactUs;