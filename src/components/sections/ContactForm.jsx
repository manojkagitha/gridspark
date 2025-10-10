import React from 'react';

const ContactForm = () => {
  return (
    <section className="bg-gray-900 py-20 px-4">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Contact Info Section */}
        <div className="text-white">
          <h2 className="text-4xl font-extrabold mb-4">Let's Build Together</h2>
          <p className="text-gray-300 mb-6 text-lg">
            Have a project in mind or just want to learn more? We'd love to hear from you. Fill out the form or send us an email.
          </p>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Direct Email</h3>
            <a href="mailto:reachus@gridsparksolutions.com" className="text-accent text-lg hover:underline">
              reachus@gridsparksolutions.com
            </a>
            <p className="text-gray-400 mt-4">We typically respond within 24 hours.</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-dark p-8 rounded-lg shadow-2xl">
          <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Full Name</label>
              <input type="text" name="name" id="name" className="w-full p-3 bg-gray-700 rounded border border-gray-600 text-white focus:ring-accent focus:border-accent" required />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Work Email</label>
              <input type="email" name="email" id="email" className="w-full p-3 bg-gray-700 rounded border border-gray-600 text-white focus:ring-accent focus:border-accent" required />
            </div>
            <div className="mb-5">
              <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-300">Company</label>
              <input type="text" name="company" id="company" className="w-full p-3 bg-gray-700 rounded border border-gray-600 text-white focus:ring-accent focus:border-accent" />
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">How can we help?</label>
              <textarea name="message" id="message" rows="4" className="w-full p-3 bg-gray-700 rounded border border-gray-600 text-white focus:ring-accent focus:border-accent" required></textarea>
            </div>
            <button type="submit" className="w-full btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
