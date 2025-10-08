import React from "react";

const Partner = () => (
  <section className="min-h-screen bg-gradient-to-br from-primary/20 via-secondary/10 to-light flex flex-col justify-center">
    <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col md:flex-row gap-12 items-center justify-between">
      {/* Left: Headline/Intro */}
      <div className="flex-1">
        <h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-8 leading-tight">
          Discover the power <br />
          of meaningful partnership
        </h1>
        <p className="text-xl text-dark mb-8">
          Join our network of forward-thinking organizations. 
          Share your vision, explore new opportunities, and let’s build lasting impact together.
        </p>
        <p className="text-base text-gray-500">
          Fill out the partnership interest form and our team will reach out for a personalized conversation.
        </p>
      </div>
      {/* Right: Form */}
      <div className="flex-1 bg-white/70 p-8 rounded-lg shadow-md max-w-lg w-full">
        <form className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-semibold mb-1">Organization Name<span className="text-accent">*</span></label>
            <input required type="text" name="organization" className="w-full p-3 border rounded focus:border-primary outline-none" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Contact Person<span className="text-accent">*</span></label>
            <input required type="text" name="contact" className="w-full p-3 border rounded focus:border-primary outline-none" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Email<span className="text-accent">*</span></label>
            <input required type="email" name="email" className="w-full p-3 border rounded focus:border-primary outline-none" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Phone</label>
            <input type="tel" name="phone" className="w-full p-3 border rounded focus:border-primary outline-none" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">How can we collaborate?</label>
            <textarea name="message" rows={3} className="w-full p-3 border rounded focus:border-primary outline-none" placeholder="Tell us your idea or partnership goal..." />
          </div>
          <button className="btn-primary w-full mt-2 text-lg py-3">Request Partnership</button>
        </form>
      </div>
    </div>
  </section>
);

export default Partner;
