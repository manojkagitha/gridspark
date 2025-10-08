import React, { useState } from "react";

const Contact = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    // Integrate Netlify Forms/Formspree as needed
  };

  return (
    <section className="section-padding max-w-xl mx-auto">
      <h1 className="text-4xl font-bold text-primary mb-8">Contact Us</h1>
      {success ? (
        <div className="card text-center text-green-600">
          <p>Thank you! We'll be in touch shortly.</p>
        </div>
      ) : (
        <form className="card" onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <label className="block mb-2 font-semibold">Name</label>
          <input required name="name" className="mb-4 p-2 border rounded w-full" />
          <label className="block mb-2 font-semibold">Email</label>
          <input required type="email" name="email" className="mb-4 p-2 border rounded w-full" />
          <label className="block mb-2 font-semibold">Phone</label>
          <input required type="tel" name="phone" className="mb-4 p-2 border rounded w-full" pattern="\\d{10,}" />
          <label className="block mb-2 font-semibold">Message</label>
          <textarea required name="message" className="mb-4 p-2 border rounded w-full" rows="5" />
          <button type="submit" className="btn-primary w-full">Send Message</button>
        </form>
      )}
      <div className="mt-8 text-center text-gray-600">
        <p>Email: <a href="mailto:hello@gridspark.com" className="text-primary">hello@gridspark.com</a></p>
        <p>Phone: <a href="tel:+15551234567" className="text-primary">(555) 123-4567</a></p>
        <p className="mt-2">Follow us: <span className="text-secondary">@gridspark</span></p>
      </div>
    </section>
  );
};

export default Contact;
