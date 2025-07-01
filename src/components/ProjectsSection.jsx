import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "BUYNOW E-COMMERCE WEB APPLICATION",
    description:
      "Designed and developed a dynamic e-commerce web application using PHP, HTML, CSS, JavaScript and MySQL. " +
      "Implemented core features such as user authentication, product catalog, shopping cart, order management, and an admin panel for managing inventory and orders. " +
      "Ensured responsive design for mobile and desktop compatibility, and optimized database interactions for efficient performance.",
    image: "/projects/project1.png",
    tags: ["PHP", "HTML/CSS", "JavaScript", "MySQL"],
    githubURL: "#",
  },

  {
    id: 2,
    title: "SOCIAL MEDIA WEB APPLICATION",
    description:
      "Built a full-stack social media web application using Next.js, Clerk for authentication, ShadCN UI " +
      "for modern interface design, and Prisma for database management. Implemented core features such as user profiles, posts, likes, " +
      "comments, and real-time updates. Focused on delivering a responsive, secure, and user-friendly experience.",
    image: "/projects/project2.png",
    tags: ["Next.js", "ShadCN UI", "Prisma"],
    githubURL: "#",
  },

  {
    id: 3,
    title: "INVENTORY MANAGEMENT SYSTEM",
    description:
      "Developed an inventory management system using Java, Hibernate, and MySQL to streamline " +
      "cafe operations and enhance transaction speed between cashier and customer. The system " +
      "features product management, Goods Received Note (GRN) handling, real-time stock tracking, and " +
      "invoice generation. Optimized for performance and ease of use to support fast-paced retail environments.",
    image: "/projects/project3.png",
    tags: ["Java", "Hibernate", "MySQL"],
    githubURL: "#",
  },

  {
    id: 4,
    title: "CHAT APPLICATION",
    description:
      "Developed a real-time chat application using React " +
      "for the front end and Java for the back end. Key features include user authentication, one-on-one " +
      "messaging, and real-time communication. Designed for a responsive and interactive user experience with efficient client-server " +
      "communication.",
    image: "#",
    tags: ["React", "Java"],
    githubURL: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {" "}
          Featured
          <span className="text-primary "> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card overflow-hidden shadow-xs card-hover rounded-lg"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap mb-4 gap-2">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 font-medium text-xs border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {" "}
                  {project.title}{" "}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex justify-between items-center">
                    <a
                      href={project.githubURL}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button flex items-center w-fit mx-auto gap-2"
            target="_blank"
            href="https://github.com/Tharindu-Dharmadasa"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
