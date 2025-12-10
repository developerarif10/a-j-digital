// Centralized content source based on sannewijbenga.com and instructions

export const personalInfo = {
  name: "Sanne Wijbenga",
  title: "Creative Developer & Designer",
  bio: "I build digital products with a focus on motion, interaction, and accessibility. Blending technical expertise with a keen eye for design to create memorable web experiences.",
  email: "hello@sannewijbenga.com"
}

export const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Production-grade frontend development using Next.js and React. I turn designs into pixel-perfect, accessible code.",
    tags: ["React", "Next.js", "Tailwind"]
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Clean, modern interface design that prioritizes user experience and conversion goals.",
    tags: ["Figma", "Prototyping", "Design Systems"]
  },
  {
    id: 3,
    title: "Technical Strategy",
    description: "Consulting on tech stacks, performance optimization, and headless CMS integrations.",
    tags: ["Architecture", "SEO", "Performance"]
  }
]

export const projects = [
  {
    slug: "creative-agency-redesign",
    title: "Creative Agency Redesign",
    category: "Development",
    excerpt: "A complete overhaul of a digital agency's web presence with WebGL interactions.",
    content: "We rebuilt the agency site from scratch using Next.js, focusing on high-performance animations and a headless CMS backend. The result was a 40% increase in lead generation.",
    stack: ["Next.js", "GSAP", "Sanity.io"],
    image: "/images/portfolio/work-1.webp",
    introduction: "In the rapidly evolving digital landscape, first impressions are everything. The agency needed a website that didnt just tell what they do, but demonstrated their creativity through the interface itself. The goal was to build an immersive digital experience that captures the essence of their innovative approach to branding and marketing.",
    challenges: "The primary challenge was balancing high-fidelity animations with performance. The design called for complex WebGL transitions and scroll-dependent animations that could easily bog down lower-end devices. Additionally, the content needed to be easily manageable by the marketing team without touching code.",
    solutions: "We chose Next.js for its robust performance and SEO capabilities, paired with GSAP for buttery-smooth animations. We implemented a headless CMS (Sanity.io) to give the team full control over their content. By optimizing assets and using dynamic importing for heavy libraries, we achieved a high lighthouse score while keeping the visual flair intact."
  },
  {
    slug: "fintech-dashboard",
    title: "Fintech Dashboard",
    category: "Product Design",
    excerpt: "Simplifying complex financial data for everyday users.",
    content: "The challenge was to take heavy data sets and present them in a friendly, approachable UI. We used soft pastels and clear typography to reduce cognitive load.",
    stack: ["React", "D3.js", "TypeScript"],
    image: "/images/portfolio/work-2.webp",
    introduction: "Financial data is often overwhelming. For this fintech startup, the mission was to democratize investment data, making it accessible not just to wall street traders but to everyday people. We needed a dashboard that felt inviting, secure, and incredibly intuitive.",
    challenges: "The main hurdle was the sheer volume of real-time data. Displaying live stock tickers, portfolio performance, and historical graphs simultaneously without overwhelming the user or crashing the browser required careful consideration of information architecture and component optimization.",
    solutions: "We utilized D3.js for custom, lightweight data visualizations and implemented a modular dashboard design where users could customize their view. A soothing color palette and generous whitespace helped reduce cognitive load, turning complex analytics into digestible insights."
  },
  {
    slug: "ecommerce-platform",
    title: "Artisan E-Commerce",
    category: "Full Stack",
    excerpt: "A custom Shopify headless storefront for a jewelry brand.",
    content: "A bespoke shopping experience focusing on brand storytelling and seamless checkout flow.",
    stack: ["Shopify Storefront API", "Next.js", "Tailwind"],
    image: "/images/portfolio/work-2.webp",
    introduction: "For this high-end jewelry brand, a standard template wouldn't cut it. They needed a digital storefront that mirrored the elegance and craftsmanship of their products. The project aimed to merge brand storytelling with a seamless, high-converting e-commerce flow.",
    challenges: "Synchronizing inventory in real-time while providing a completely custom frontend experience was the technical crux. On the UX side, the challenge was to weave narrative content—videos, artisan interviews, lookbooks—directly into the shopping experience without adding friction to the purchase path.",
    solutions: "We leveraged Shopify's Storefront API to build a fully headless architecture using Next.js. This allowed us to create rich, magazine-style layouts that traditional e-commerce themes couldn't support. We implemented a persistent cart and a streamlined one-page checkout to ensure that despite the immersive storytelling, the path to purchase remained friction-free."
  }
]

export const timeline = [
  { year: "2023 - Present", role: "Founder & Lead Developer", company: "Sanne Agency", desc: "Helping startups ship products faster." },
  { year: "2020 - 2023", role: "Senior Frontend Developer", company: "Tech Corp", desc: "Led the frontend team for the core consumer product." },
  { year: "2018 - 2020", role: "Freelance Designer", company: "Self-Employed", desc: "Worked with various clients on branding and web design." }
]