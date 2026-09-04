import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Modern E-Commerce Web Application",
    description:
      "A modern and fully responsive e-commerce web application built with Next.js, React, and Tailwind CSS. Users can browse products, explore categories, view product details, and shop through a clean and intuitive interface. The application focuses on responsive UI, smooth navigation, reusable components, optimized performance, and a seamless shopping experience across desktop and mobile devices.",
    image: "/projects/project1.png",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "E-Commerce",
      "Responsive Design",
      "UI/UX",
      "Product Catalog",
      "API Integration",
      "Frontend Development",
      "Web Development",
    ],
    link: "https://repairfect-ecommerce.vercel.app/",
    github: "https://github.com/akash-547/Repairfect-ecommerce",
  },
  {
    title: "AI-Powered Appointment Booking SaaS",
    description:
      "A modern and fully responsive SaaS appointment booking platform built with React and Tailwind CSS. Users can discover local self-care businesses, select services, choose a location and time, and book appointments through a clean and intuitive interface. The platform is designed with scalable SaaS architecture and AI-ready features for smarter service discovery and personalized booking experiences.",
    image: "/projects/project2.png",
    tags: [
      "React",
      "Tailwind CSS",
      "SaaS",
      "AI Integration",
      "Responsive Design",
    ],
    link: "https://style-book-one.vercel.app/",
    github: "https://github.com/akash-547/your-repo",
  },
{
  title: "AI-Powered SaaS Dashboard",
  description:
    "A production-focused SaaS dashboard prototype built with Lovable.dev and Supabase, combining AI-powered rapid development with modern full-stack engineering. The application includes a responsive dashboard interface, secure authentication, database integration, reusable UI components, and scalable data-driven functionality designed for real-world SaaS products and MVPs.",
  image: "/projects/project3.png",
  tags: [
    "Lovable.dev",
    "Supabase",
    "SaaS",
    "AI Development",
    "AI-Powered Applications",
    "Rapid Prototyping",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Authentication",
    "PostgreSQL",
    "Database Architecture",
    "API Integration",
    "Responsive Design",
    "Dashboard Development"
  ],
  link: "https://router-pro.vercel.app/dashboard",
  github: "https://github.com/akash-547",
},
  {
    title: "User-Friendly SaaS Interface",
    description:
      "A fully responsive and user-friendly web application built with HTML5, CSS3, JavaScript, and Tailwind CSS. Designed with a clean, modern interface, reusable components, and a smooth user experience across mobile, tablet, and desktop devices.",
    image: "/projects/project4.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    link: "https://axionix-figma.vercel.app/",
    github: "https://github.com/akash-547/AxionixFigma",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              deliver real impact.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my work showcasing AI-powered applications, SaaS
            prototypes, modern frontend development, and production-focused web
            solutions built with modern technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    taget="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>

                  <a
                    href={project.github}
                    taget="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
