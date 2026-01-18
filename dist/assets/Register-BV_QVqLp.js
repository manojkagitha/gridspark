import{r,C as g,j as e}from"./index-zUn8u5fx.js";const h="https://api.gridsparksolutions.com",y=()=>{const[n,u]=r.useState(""),[l,d]=r.useState(""),[a,p]=r.useState(""),[m,o]=r.useState(null),[i,c]=r.useState(!1),x=g(),b=async t=>{if(t.preventDefault(),o(null),!l||!n){o("Please enter your name and email.");return}if(!a||a.length<6){o("Password must be at least 6 characters.");return}c(!0);try{const s=await fetch(h,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fullName:n,email:l,password:a})}),f=await s.json();if(!s.ok)throw new Error(f.error||"Registration failed.");alert("Registration successful! Please check your email to verify your account."),x("/")}catch(s){o(s.message)}finally{c(!1)}};return e.jsx("section",{className:`
        min-h-screen flex items-center justify-center 
        py-8 sm:py-10 md:py-12 px-4 
        bg-[var(--color-bg)]
        text-[var(--color-text)]
        transition-colors duration-300
      `,children:e.jsxs("div",{className:`
          w-full max-w-md 
          p-6 sm:p-8 rounded-lg shadow-2xl
          bg-[var(--color-card)] 
          border border-[var(--color-border)]
        `,children:[e.jsx("h2",{className:`
            text-2xl sm:text-3xl font-extrabold text-center mb-4 sm:mb-6
            text-[var(--color-primary)]
          `,children:"Create Your Account"}),e.jsx("p",{className:"text-center mb-6 sm:mb-8 opacity-80 text-sm sm:text-base",children:"Join Gridspark and unlock the future of AI-driven solutions."}),m&&e.jsx("p",{className:`
              bg-[var(--color-primary)]/10
              border border-[var(--color-primary)]
              text-[var(--color-text)]
              text-center p-3 rounded mb-4 sm:mb-6 text-sm
            `,children:m}),e.jsxs("form",{onSubmit:b,noValidate:!0,children:[e.jsx("label",{htmlFor:"fullName",className:"block text-xs sm:text-sm font-medium mb-2 opacity-90",children:"Full Name"}),e.jsx("input",{type:"text",id:"fullName",value:n,onChange:t=>u(t.target.value),className:`
              w-full p-2.5 sm:p-3 mb-3 sm:mb-4 rounded border
              bg-[var(--color-bg)]
              border-[var(--color-border)]
              text-[var(--color-text)]
              focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]
              transition text-sm sm:text-base touch-manipulation
            `,required:!0,autoComplete:"name",placeholder:"Your full name"}),e.jsx("label",{htmlFor:"email",className:"block text-xs sm:text-sm font-medium mb-2 opacity-90",children:"Email Address"}),e.jsx("input",{type:"email",id:"email",value:l,onChange:t=>d(t.target.value),className:`
              w-full p-2.5 sm:p-3 mb-3 sm:mb-4 rounded border
              bg-[var(--color-bg)]
              border-[var(--color-border)]
              text-[var(--color-text)]
              focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]
              transition text-sm sm:text-base touch-manipulation
            `,required:!0,autoComplete:"email",placeholder:"you@example.com"}),e.jsx("label",{htmlFor:"password",className:"block text-xs sm:text-sm font-medium mb-2 opacity-90",children:"Password"}),e.jsx("input",{type:"password",id:"password",value:a,onChange:t=>p(t.target.value),className:`
              w-full p-2.5 sm:p-3 mb-4 sm:mb-6 rounded border
              bg-[var(--color-bg)]
              border-[var(--color-border)]
              text-[var(--color-text)]
              focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]
              transition text-sm sm:text-base touch-manipulation
            `,required:!0,autoComplete:"new-password",placeholder:"Create a password (min 6 chars)"}),e.jsx("button",{type:"submit",className:"w-full btn-primary py-2.5 sm:py-3 text-base sm:text-lg touch-manipulation active:scale-95 transition-transform",disabled:i,children:i?"Creating Account...":"Sign Up"})]})]})})};export{y as default};
