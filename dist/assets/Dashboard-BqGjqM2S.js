import{j as s,o as a,p as o,d as l,q as i}from"./index-zUn8u5fx.js";const c=[{label:"Active Projects",value:"8",icon:s.jsx(a,{className:"text-[var(--color-primary)]"})},{label:"Registered Users",value:"125",icon:s.jsx(o,{className:"text-[var(--color-primary)]"})},{label:"AI Models Deployed",value:"4",icon:s.jsx(l,{className:"text-[var(--color-primary)]"})},{label:"Cloud Services Active",value:"3",icon:s.jsx(i,{className:"text-[var(--color-primary)]"})}],n=[{id:1,text:"✔️ New project “Tinykola ERP” started (Oct 2025)"},{id:2,text:"✔️ Last invoice paid (Sep 2025)"},{id:3,text:"✔️ “Web Design Sprint” completed (Aug 2025)"}],m=()=>s.jsx("section",{className:`
      min-h-screen py-8 sm:py-10 px-4 sm:px-6
      bg-[var(--color-bg)]
      text-[var(--color-text)]
      transition-colors duration-300
    `,children:s.jsxs("div",{className:"max-w-5xl mx-auto",children:[s.jsx("h1",{className:`
          text-3xl sm:text-4xl font-bold mb-8 sm:mb-10
          text-[var(--color-primary)]
          transition-colors duration-300
        `,children:"Client Dashboard"}),s.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12",children:c.map(({label:e,value:r,icon:t})=>s.jsxs("div",{className:`
              flex items-center p-4 sm:p-5 md:p-6 shadow-xl rounded-xl
              border border-[var(--color-border)]
              bg-[var(--color-card)]
              text-[var(--color-text)]
              transition-colors duration-300
              hover:border-[var(--color-primary)]
            `,children:[s.jsx("div",{className:"mr-3 sm:mr-4 md:mr-5 text-2xl sm:text-3xl flex-shrink-0",children:t}),s.jsxs("div",{children:[s.jsx("div",{className:`
                  text-2xl sm:text-3xl font-bold
                  text-[var(--color-text)]
                `,children:r}),s.jsx("div",{className:"opacity-70 text-xs sm:text-sm",children:e})]})]},e))}),s.jsxs("div",{className:`
          p-4 sm:p-5 md:p-6 shadow-xl rounded-xl
          border border-[var(--color-border)]
          bg-[var(--color-card)]
          text-[var(--color-text)]
          transition-colors duration-300
        `,children:[s.jsx("h2",{className:`
            text-lg sm:text-xl font-semibold mb-3 sm:mb-4
            text-[var(--color-primary)]
          `,children:"Recent Activity"}),s.jsx("ul",{className:"list-disc list-inside opacity-90 space-y-2 text-sm sm:text-base",children:n.map(({id:e,text:r})=>s.jsx("li",{className:"mb-2",children:r},e))})]})]})});export{m as default};
