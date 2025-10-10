import React from "react";

// Import each logo from the assets folder
import llamaLogo from "../../assets/llama.jpg";
import deepseekLogo from "../../assets/deepseek.jpg";
import grokLogo from "../../assets/grok.jpg";
import copilotLogo from "../../assets/microsoft-copilot.jpg";
import claudeLogo from "../../assets/claude.jpg";
import azureLogo from "../../assets/azureopenai.jpg";
import gpt4Logo from "../../assets/gpt-4.jpg";

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
  <div className="bg-white py-8 px-2 shadow relative z-20">
    <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
      {logos.map(logo => (
        <img
          key={logo.alt}
          src={logo.src}
          alt={logo.alt}
          className="h-14 md:h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
          style={{ maxWidth: 120 }}
        />
      ))}
    </div>
  </div>
);

export default TechStackBanner;
