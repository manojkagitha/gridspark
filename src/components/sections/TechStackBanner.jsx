import React from "react";

import llamaLogo from '/src/assets/llama.png';
import deepseekLogo from '/src/assets/deepseek.png';
import grokLogo from '/src/assets/grok.png';
import copilotLogo from '/src/assets/microsoft-copilot.png';
import claudeLogo from '/src/assets/claude.png';
import azureLogo from '/src/assets/azureopenai.png';
import gpt4Logo from '/src/assets/GPT-4.png';

// List of tech logos and their alt text
const logos = [
  { src: llamaLogo, alt: "Llama" },
  { src: deepseekLogo, alt: "DeepSeek" },
  { src: grokLogo, alt: "Grok" },
  { src: copilotLogo, alt: "Microsoft Copilot" },
  { src: claudeLogo, alt: "Claude" },
  { src: azureLogo, alt: "Azure OpenAI" },
  { src: gpt4Logo, alt: "GPT-4" },
];

const TechStackBanner = () => (
  <div className="bg-dark py-8 px-2 shadow relative z-20 overflow-hidden">
    {/* Animated wrapper */}
    <div className="relative w-full">
      <div className="logo-scroll flex items-center gap-x-12 animate-scroll">
        {[...logos, ...logos].map((logo, i) => (
          // Duplicate logos so scroll is continuous
          <img
            key={logo.alt + i}
            src={logo.src}
            alt={logo.alt}
            className="h-14 md:h-16 object-contain"
            style={{ maxWidth: 120 }}
          />
        ))}
      </div>
    </div>
    {/* Animation CSS */}
    <style>
      {`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logo-scroll {
          display: flex;
          width: 200%;
        }
        .animate-scroll {
          animation: scroll 18s linear infinite;
        }
      `}
    </style>
  </div>
);

export default TechStackBanner;
