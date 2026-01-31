import { motion } from "framer-motion";
import { Brain, Database, Code, Cpu, BarChart3, Cloud, LineChart, Heart } from "lucide-react";

const skills = [
  {
    icon: Brain,
    title: "Artificial Intelligence (AI)",
    description: "Building intelligent systems that learn and adapt",
    color: "primary",
  },
  {
    icon: Cpu,
    title: "Machine Learning (ML)",
    description: "Developing predictive models and algorithms",
    color: "accent",
  },
  {
    icon: Database,
    title: "Data Science & Analytics",
    description: "Extracting insights from complex datasets",
    color: "primary",
  },
  {
    icon: Code,
    title: "Python",
    description: "Advanced programming for data solutions",
    color: "accent",
  },
  {
    icon: Cloud,
    title: "IoT Systems",
    description: "Connecting devices for smart solutions",
    color: "primary",
  },
  {
    icon: BarChart3,
    title: "API Development",
    description: "Creating robust data interfaces",
    color: "accent",
  },
  {
    icon: LineChart,
    title: "Data Visualization",
    description: "Transforming data into visual stories",
    color: "primary",
  },
  {
    icon: Heart,
    title: "AI for Social Impact",
    description: "Using tech to empower communities",
    color: "accent",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Combining technical expertise with a passion for social impact
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="card-elevated rounded-2xl p-6 h-full border border-border hover:border-primary/50 transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl bg-${skill.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className={`w-7 h-7 ${skill.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
