import React from "react";

export default function AuthorBio({ name, image, bio, role }) {
  return (
    <div className="rounded-xl bg-[var(--color-bg-alt)] border border-[var(--color-border)] p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-16 w-16 rounded-full overflow-hidden ring-2 ring-[var(--color-primary)]/50">
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">{name}</h3>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
      {bio && (
        <p className="text-sm text-gray-300 leading-relaxed">{bio}</p>
      )}
    </div>
  );
}

