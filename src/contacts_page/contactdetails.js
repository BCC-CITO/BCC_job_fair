import React from "react";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const ContactDetails = () => {
  return (
    <section className="w-full py-10 lg:py-12 px-4 bg-white font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row bg-[#f8f9fa] rounded-xl overflow-hidden shadow-sm border border-gray-100">
        
        {/* LEFT PANE - DETAILS */}
        <div className="w-full lg:w-1/2 p-6 md:p-10 lg:p-10 xl:p-12 flex flex-col justify-center">
          
          {/* Header */}
          <h4 className="text-indigo-900 font-semibold uppercase tracking-wider text-sm mb-2">
            Get in touch
          </h4>
          
          {/* Title */}
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-[1.2] mb-4">
            Don't hesitate to contact us for more information.
          </h2>
          
          {/* Subtitle */}
          <p className="text-gray-500 text-base mb-6 leading-relaxed pr-0 md:pr-10">
            We're here to help you every step of the way.<br className="hidden md:block" />
            If you have any questions or need further assistance, don't hesitate to reach out.
          </p>

          {/* Divider */}
          <div className="w-full h-px bg-gray-200 mb-6"></div>

          {/* Contact Methods */}
          <div className="flex flex-col gap-5">
            
            {/* Address */}
            <div className="flex items-start gap-5">
              <div className="mt-1">
                <MdLocationOn className="text-indigo-900 text-3xl md:text-4xl flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Company Address</h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-sm">
                  # NO 1, YM Complex, 1st Floor, Jogi Colony, Madiwala Checkpost, Hosur Main Road, Bengaluru - 560029
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-5">
              <div className="mt-1">
                <MdEmail className="text-indigo-900 text-3xl md:text-4xl flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Email us</h3>
                <p className="text-gray-500 text-sm md:text-base">
                  info@bharatcareerconnect.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-5">
              <div className="mt-1">
                <MdPhone className="text-indigo-900 text-3xl md:text-4xl flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Call us</h3>
                <p className="text-gray-500 text-sm md:text-base">
                  Phone : +91 9353602385
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT PANE - MAP */}
        <div className="w-full lg:w-1/2 min-h-[400px] relative bg-gray-200">
          <iframe
            title="Bharat Career Connect LLP Location"
            src="https://maps.google.com/maps?q=Bharat%20Career%20Connect%20LLP,%20Madiwala,%20Bengaluru&t=&z=14&ie=UTF8&iwloc=&output=embed"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
      </div>
    </section>
  );
};

export default ContactDetails;
