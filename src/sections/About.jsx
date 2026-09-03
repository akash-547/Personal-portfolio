import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Engineering",
    description:
      "Building clean, scalable, and production-ready web applications with modern full-stack technologies.",
  },
  {
    icon: Rocket,
    title: "SaaS & MVP Development",
    description:
      "Turning ideas and AI-generated prototypes into reliable SaaS products and production-ready MVPs.",
  },
  {
    icon: Users,
    title: "Production-Ready Solutions",
    description:
      "Helping founders, startups, and growing teams build applications that are ready for real users and business growth.",
  },
  {
    icon: Lightbulb,
    title: "AI-Powered Development",
    description:
      "Combining AI-driven rapid development with solid engineering to build faster without compromising quality.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Turning AI prototypes into,
              <span className="font-serif italic font-normal text-white">
                {" "}
                production-ready products.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm an AI Full-Stack Developer specializing in building
                production-ready SaaS products, MVPs, and AI-powered web
                applications. I combine AI-driven rapid development with solid
                full-stack engineering to turn ideas and prototypes into
                reliable products built for real users.
              </p>

              <p>
                I specialize in Lovable.dev, Base44, and Supabase, along with
                React, Next.js, TypeScript, PostgreSQL, Node.js, and modern
                cloud technologies. My focus goes beyond simply writing code —
                I build clean architecture, secure authentication, scalable
                databases, responsive interfaces, and reliable integrations.
              </p>

              <p>
                I work with founders, startups, and growing teams to launch new
                MVPs, complete unfinished AI-built projects, improve existing
                applications, and prepare products for production. Whether it's
                building from scratch or rescuing a broken prototype, I focus
                on delivering fast, maintainable, and scalable solutions.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to turn ideas and AI-generated prototypes into
                secure, scalable, and production-ready products that create
                real business value."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};