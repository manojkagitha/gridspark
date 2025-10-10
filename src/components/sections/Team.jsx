import React from 'react';

const TeamMember = ({ name, role, imageUrl, bio }) => (
  <div className="text-center bg-gray-800 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
    <img
      className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-accent"
      src={imageUrl}
      alt={name}
    />
    <h3 className="text-xl font-bold text-white">{name}</h3>
    <p className="text-accent font-semibold">{role}</p>
    <p className="text-gray-400 mt-2 text-sm">{bio}</p>
  </div>
);

const Team = () => {
  const teamMembers = [
    {
      name: "Akash Tatta",
      role: "Chief Executive Officer (CEO)",
      imageUrl: "https://placehold.co/200x200/3498db/ffffff?text=AT",
      bio: "Visionary leader driving the company's strategic direction and fostering a culture of innovation."
    },
    {
      name: "Vikas Guntuku",
      role: "Chief Technology Architect",
      imageUrl: "https://placehold.co/200x200/2ecc71/ffffff?text=VG",
      bio: "The mastermind behind our technical strategy, ensuring scalable, robust, and future-proof solutions."
    },
    {
      name: "Manoj Kagitha",
      role: "Managing Director, US Operations",
      imageUrl: "https://placehold.co/200x200/f1c40f/ffffff?text=MK",
      bio: "Leading our growth and technological execution across North America, ensuring client success."
    },
    {
      name: "Akhil Alladi",
      role: "Head of Sales & Marketing",
      imageUrl: "https://placehold.co/200x200/e74c3c/ffffff?text=AA",
      bio: "Connecting businesses with our solutions and driving market growth through strategic outreach."
    },
    {
      name: "Gowtham Indukuri",
      role: "Head of People & Culture",
      imageUrl: "https://placehold.co/200x200/9b59b6/ffffff?text=GI",
      bio: "Cultivating our top-tier talent and building the collaborative environment that fuels our success."
    },
    {
      name: "Harsha Vardhan",
      role: "Principal Software Engineer",
      imageUrl: "https://placehold.co/200x200/1abc9c/ffffff?text=HV",
      bio: "Leading our engineering team in building high-quality software and turning complex ideas into reality."
    },
  ];

  return (
    <section className="bg-dark py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white mb-4">Meet Our Leadership</h2>
        <p className="text-gray-300 text-lg mb-12">The dedicated experts driving your projects forward.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
