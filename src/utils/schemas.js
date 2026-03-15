/**
 * Structured data schemas for GridSpark Solutions
 * Use these pre-built schemas with the SEO component
 */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "GridSpark Solutions",
  "url": "https://www.gridsparksolutions.com",
  "logo": "https://www.gridsparksolutions.com/logo.png",
  "description": "AI-powered solutions for modern businesses. Custom AI agents, document intelligence, and private LLM deployment.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://www.linkedin.com/company/gridspark-solutions",
    "https://twitter.com/gridspark"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "contact@gridsparksolutions.com"
  }
};

export const serviceSchemas = {
  chatbot: {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Chatbot Development",
    "provider": {
      "@type": "Organization",
      "name": "GridSpark Solutions"
    },
    "description": "Custom AI chatbots for customer support, lead generation, and sales automation",
    "areaServed": "Worldwide",
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "Small to Enterprise Businesses"
    }
  },
  documentAI: {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Document AI & Automation",
    "provider": {
      "@type": "Organization",
      "name": "GridSpark Solutions"
    },
    "description": "Intelligent document processing, data extraction, and workflow automation using AI",
    "areaServed": "Worldwide"
  },
  privateLLM: {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Private LLM Deployment",
    "provider": {
      "@type": "Organization",
      "name": "GridSpark Solutions"
    },
    "description": "Secure, on-premises large language model deployment for enterprise data privacy",
    "areaServed": "Worldwide"
  },
  crmLeadAI: {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "CRM & Lead AI Integration",
    "provider": {
      "@type": "Organization",
      "name": "GridSpark Solutions"
    },
    "description": "AI-powered CRM automation, lead scoring, and sales pipeline optimization",
    "areaServed": "Worldwide"
  }
};

export const faqSchema = (faqItems) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
});

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const productSchema = (product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "brand": {
    "@type": "Brand",
    "name": "GridSpark Solutions"
  },
  "offers": {
    "@type": "Offer",
    "price": product.price || "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
});
