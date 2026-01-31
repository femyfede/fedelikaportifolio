import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Bot, Sparkles } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Tanzania Data Bot",
    description: "An AI-powered chatbot that provides interactive insights from the 2022 Tanzania Population & Housing Census, helping users explore national statistics through natural language.",
    technologies: ["AI", "NLP", "Python", "Data Analysis"],
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Smart Agriculture IoT",
    description: "IoT-based monitoring system for agricultural fields, providing real-time data on soil conditions and weather patterns to optimize farming decisions.",
    technologies: ["IoT", "Python", "Machine Learning", "API"],
    githubUrl: "#",
  },
  {
    title: "Health Data Analytics",
    description: "Data analytics platform for visualizing and analyzing health trends across Tanzanian regions to support policy decisions.",
    technologies: ["Data Science", "Visualization", "Python"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building intelligent solutions that make a difference
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className={`card-elevated rounded-2xl p-8 border ${project.featured ? 'gradient-border border-transparent' : 'border-border'} hover:border-primary/30 transition-all duration-300`}>
                {project.featured && (
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">Featured Project</span>
                  </div>
                )}
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      {project.featured && <Bot className="w-6 h-6 text-accent" />}
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3 flex-shrink-0">
                    {project.githubUrl && (
                      <Button variant="outline" size="default" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button variant="default" size="default" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
