import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col min-h-screen px-4 items-center justify-center"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in-delay-1">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-2">
              Tharindu{" "}
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-3">
              Dharmadasa.
            </span>
          </h1>

          <p className="text-sm md:text-xl text-center text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
            I am Software Engineer passionate about building full-stack
            applications and websites using modern technologies. With strong communication
            and team collaboration skills, I thrive in dynamic, problem-solving
            environments. Always eager to learn, I combine technical expertise
            with a growth mindset to deliver impactful software solutions.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Works
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
