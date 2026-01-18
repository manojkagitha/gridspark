import{r as n,j as e}from"./index-zUn8u5fx.js";const c=()=>{const[o,l]=n.useState(!1),[t,s]=n.useState(!1),i=async a=>{a.preventDefault(),s(!0);const r=new FormData(a.target);r.append("form_for","newsletter");try{(await fetch("https://formspree.io/f/mwpwzlng",{method:"POST",body:r,headers:{Accept:"application/json"}})).ok?l(!0):alert("Something went wrong. Try again or contact us directly.")}catch{alert("Unable to submit. Try later or email us.")}finally{s(!1)}};return e.jsxs("div",{className:"glass-panel max-w-md mx-auto text-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 rounded-2xl shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"}),e.jsx("h2",{className:"text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-white",children:"Stay Updated"}),e.jsx("p",{className:"mb-6 sm:mb-8 text-gray-400 text-sm sm:text-base",children:"Get the latest AI insights and product updates delivered to your inbox."}),o?e.jsxs("div",{className:"p-6 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 shadow-sm transition",children:[e.jsx("div",{className:"font-semibold mb-1",children:"Thanks for subscribing!"}),e.jsx("div",{className:"text-sm",children:"We'll keep you updated with our latest news."})]}):e.jsxs("form",{onSubmit:i,method:"POST",className:"flex flex-col gap-3 sm:gap-4",children:[e.jsx("input",{type:"email",name:"email",placeholder:"Enter your email",required:!0,autoComplete:"email",className:`
              px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg w-full
              border-[var(--color-border)]
              bg-[var(--color-bg)]
              text-white
              placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]
              focus:border-transparent
              text-sm sm:text-base
              transition touch-manipulation
            `,disabled:t}),e.jsx("input",{type:"hidden",name:"form_for",value:"newsletter"}),e.jsx("button",{type:"submit",className:`
              w-full py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-semibold
              btn-primary touch-manipulation active:scale-95
            `,disabled:t,children:t?"Subscribing...":"Subscribe"}),e.jsx("div",{className:"text-xs text-gray-500",children:"Unsubscribe anytime. No spam, we promise."})]})]})};export{c as N};
