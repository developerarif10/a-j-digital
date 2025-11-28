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
    image: "/images/project-1.jpg"
  },
  {
    slug: "fintech-dashboard",
    title: "Fintech Dashboard",
    category: "Product Design",
    excerpt: "Simplifying complex financial data for everyday users.",
    content: "The challenge was to take heavy data sets and present them in a friendly, approachable UI. We used soft pastels and clear typography to reduce cognitive load.",
    stack: ["React", "D3.js", "TypeScript"],
    image: "/images/project-2.jpg"
  },
  {
    slug: "ecommerce-platform",
    title: "Artisan E-Commerce",
    category: "Full Stack",
    excerpt: "A custom Shopify headless storefront for a jewelry brand.",
    content: "A bespoke shopping experience focusing on brand storytelling and seamless checkout flow.",
    stack: ["Shopify Storefront API", "Next.js", "Tailwind"],
    image: "/images/project-3.jpg"
  }
]

export const timeline = [
  { year: "2023 - Present", role: "Founder & Lead Developer", company: "Sanne Agency", desc: "Helping startups ship products faster." },
  { year: "2020 - 2023", role: "Senior Frontend Developer", company: "Tech Corp", desc: "Led the frontend team for the core consumer product." },
  { year: "2018 - 2020", role: "Freelance Designer", company: "Self-Employed", desc: "Worked with various clients on branding and web design." }
]