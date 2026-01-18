import{j as t}from"./index-zUn8u5fx.js";const n=({title:a,description:e,tags:r,imageUrl:o})=>t.jsxs("div",{className:`
      rounded-lg shadow-xl overflow-hidden transform hover:scale-105 
      transition-transform duration-300 border
      bg-[var(--color-card)] 
      border-[var(--color-accent)]/10
      text-[var(--color-text)]
      dark:bg-[var(--color-bg)] 
      dark:text-[var(--color-text)]
    `,children:[t.jsx("img",{src:o,alt:a,className:"w-full h-40 sm:h-48 object-cover"}),t.jsxs("div",{className:"p-4 sm:p-5 md:p-6",children:[t.jsx("h3",{className:`
          text-lg sm:text-xl md:text-2xl font-bold mb-2
          text-[var(--color-primary)] 
          dark:text-[var(--color-primary)]
        `,children:a}),t.jsx("p",{className:"opacity-80 mb-3 sm:mb-4 text-xs sm:text-sm md:text-base",children:e}),t.jsx("div",{className:"flex flex-wrap gap-1.5 sm:gap-2",children:r.map(s=>t.jsx("span",{className:`
              text-xs font-semibold px-2.5 py-1 rounded-full
              bg-[var(--color-primary)] text-white
              dark:bg-[var(--color-primary)] dark:text-white
              transition
            `,children:s},s))})]})]}),c=()=>{const a=[{title:"Intelligent Support Chatbot",description:"A custom-trained NLP model that resolves over 80% of customer queries instantly, understands conversational context, and seamlessly hands off complex issues to human agents.",tags:["NLP","Customer Support","Automation","React"],imageUrl:"https://placehold.co/600x400/3498db/ffffff?text=AI+Chatbot"},{title:"Predictive Sales Analytics",description:"A machine learning dashboard that analyzes sales data and CRM activity to forecast revenue with 95% accuracy.",tags:["Machine Learning","Data Visualization","Salesforce","Python"],imageUrl:"https://placehold.co/600x400/2ecc71/ffffff?text=Analytics"},{title:"Automated Document Summarizer",description:"An AI-powered tool for legal teams that ingests contracts and reports, extracting key clauses and risks instantly.",tags:["AI","Document Processing","Compliance","Cloud"],imageUrl:"https://placehold.co/600x400/9b59b6/ffffff?text=Doc+AI"}];return t.jsx("section",{className:`
        py-12 sm:py-16 md:py-20 px-4
        bg-[var(--color-bg)] text-[var(--color-text)]
        dark:bg-[var(--color-bg)] dark:text-[var(--color-text)]
        transition-colors duration-300
      `,children:t.jsxs("div",{className:"max-w-7xl mx-auto text-center",children:[t.jsx("h2",{className:`
            text-3xl sm:text-4xl font-extrabold mb-3 sm:mb-4
            text-[var(--color-primary)] 
            dark:text-[var(--color-primary)]
          `,children:"Our AI in Action"}),t.jsx("p",{className:"text-base sm:text-lg mb-8 sm:mb-10 md:mb-12 opacity-80 px-4",children:"We don't just talk about AI—we build intelligent solutions that drive real business results."}),t.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8",children:a.map(e=>t.jsx(n,{...e},e.title))})]})})};export{c as default};
