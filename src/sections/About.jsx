import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing scalable and maintainable code with best practices.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Building fast and optimized web applications for better UX.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working with teams to turn ideas into real-world products.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "Always learning new technologies and improving my skills.",
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
              Building the web experiences,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a passionate Frontend Developer with around 2 years of
                experience building responsive and user-friendly web
                applications. My journey started with curiosity about how
                websites work, and it has grown into a strong focus on modern
                frontend development.
              </p>
              <p>
                I specialize in React and modern JavaScript, creating clean,
                scalable, and visually appealing interfaces. I enjoy turning
                ideas into real products while maintaining a strong focus on
                UI/UX and performance.
              </p>
              <p>
                Currently, I'm working as a frontend intern, continuously
                improving my skills and exploring new technologies to build
                better and more efficient applications.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to build modern, user-focused web applications
                that are fast, scalable, and enjoyable to use."
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
