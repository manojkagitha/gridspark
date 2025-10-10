import React, { useState } from "react";

const Contact = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-light via-secondary/10 to-primary/5 flex items-center">
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center w-full">
        <div>
          <h1 className="text-5xl font-extrabold mb-6 text-primary">Get in Touch</h1>
          <p className="text-xl text-dark mb-8 max-w-lg">
            Interested in Gridspark Solutions or have a question for our team?
            Fill out your contact details and we’ll reach out shortly.
          </p>
          <p className="text-base text-gray-500 mb-2">
            Email: {" "}
            <a href="mailto:hello@gridsparksolutions.com" className="text-secondary font-semibold">
              hello@gridsparksolutions.com
            </a>
          </p>
          <p className="text-base text-gray-500">
            Phone: <span className="text-secondary font-semibold">+1 (945) 998-5494</span>
          </p>
        </div>
        <div>
          {success ? (
            <div className="bg-light p-8 rounded-lg text-center text-green-700 shadow">
              Thank you! We’ve received your message and will contact you soon.
            </div>
          ) : (
            <form className="bg-white p-8 rounded-lg shadow-lg flex flex-col gap-6" onSubmit={handleSubmit}>
              <div>
                <label className="block font-semibold mb-1">Your Name<span className="text-accent">*</span></label>
                <input required name="name" className="w-full p-3 border rounded focus:border-primary" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Email<span className="text-accent">*</span></label>
                <input required type="email" name="email" className="w-full p-3 border rounded focus:border-primary" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Phone<span className="text-accent">*</span></label>
                <input required type="tel" name="phone" className="w-full p-3 border rounded focus:border-primary" />
              </div>
              <div>
                <label className="block font-semibold mb-1">How can we help?</label>
                <textarea name="message" rows={3} className="w-full p-3 border rounded focus:border-primary" />
              </div>
              <button type="submit" className="btn-primary w-full py-3 text-lg">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
