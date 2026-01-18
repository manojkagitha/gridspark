import{j as e,r as s}from"./index-zUn8u5fx.js";const a=({question:n,answer:o})=>{const[t,r]=s.useState(!1);return e.jsxs("div",{className:`
        border-b py-3 sm:py-4 
        border-[var(--color-border)]
        transition-colors duration-300
      `,children:[e.jsxs("button",{onClick:()=>r(!t),className:`
          w-full flex justify-between items-center text-left 
          text-base sm:text-lg font-semibold
          text-[var(--color-text)]
          focus:outline-none transition-colors duration-300
          touch-manipulation active:scale-[0.99] p-1
        `,children:[e.jsx("span",{children:n}),e.jsx("span",{className:`
            transform transition-transform duration-300 
            text-[var(--color-primary)] flex-shrink-0 ml-2
          `,style:{transform:t?"rotate(180deg)":"rotate(0deg)"},children:"▼"})]}),t&&e.jsx("div",{className:`
            mt-3 sm:mt-4 px-3 sm:px-4 py-3 sm:py-4 rounded-lg 
            bg-[var(--color-card)]
            text-[var(--color-text)]
            border border-[var(--color-border)]
            opacity-90
            transition-colors duration-300 text-sm sm:text-base
          `,children:e.jsx("p",{children:o})})]})},l=()=>{const n=[{question:"What kind of technologies do you specialize in?",answer:"We are full-stack specialists with deep expertise in cloud platforms (Azure, AWS), modern frontend frameworks (React, Angular), and robust backend technologies (Node.js, Spring Boot). Our core focus is leveraging AI and machine learning to build intelligent, scalable solutions."},{question:"How long does a typical project take?",answer:"Project timelines vary based on complexity, but we follow an agile methodology to deliver value quickly. A typical MVP can be developed in 8-12 weeks, with a detailed project roadmap defined post-discovery phase."},{question:"What does your project engagement process look like?",answer:"We start with a free consultation to understand your goals. From there, we move to a discovery and planning phase, followed by iterative design, sprints, and testing. We emphasize transparency with regular updates and demos throughout the project."},{question:"Do you provide support after the project is launched?",answer:"Absolutely. We offer flexible post-launch support and maintenance to ensure your application remains secure, updated, and optimal. We see ourselves as long-term partners, not one-time vendors."}];return e.jsx("section",{className:`
        py-12 sm:py-16 md:py-20 px-4 min-h-screen
        bg-[var(--color-bg)]
        text-[var(--color-text)]
        transition-colors duration-300
      `,children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h2",{className:`
            text-3xl sm:text-4xl font-extrabold text-center mb-8 sm:mb-10 md:mb-12
            text-[var(--color-primary)]
          `,children:"Frequently Asked Questions"}),e.jsx("div",{className:`
            space-y-3 sm:space-y-4 rounded-xl p-4 sm:p-6 md:p-8 shadow-xl
            bg-[var(--color-card)]
            border border-[var(--color-border)]
            transition-colors duration-300
          `,children:n.map((o,t)=>e.jsx(a,{question:o.question,answer:o.answer},t))})]})})};export{l as default};
