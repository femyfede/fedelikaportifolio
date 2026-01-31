import { motion } from "framer-motion";
import { Globe, Users, Lightbulb, TrendingUp } from "lucide-react";

const impacts = [
  {
    icon: Users,
    title: "Tanzania AI Community",
    description: "Active member contributing to initiatives that promote AI and data science education across the region.",
  },
  {
    icon: Lightbulb,
    title: "Education Advocacy",
    description: "Passionate about using AI to improve educational systems and learning outcomes.",
  },
  {
    icon: TrendingUp,
    title: "Policy Impact",
    description: "Leveraging data science to inform and improve social policy decisions.",
  },
  {
    icon: Globe,
    title: "Community Empowerment",
    description: "Building data-driven solutions that empower local communities.",
  },
];

const Community = () => {
  return (
    <section id="community" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Community & <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Using technology as a force for positive change in society
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-elevated rounded-2xl p-6 h-full border border-border hover:border-primary/30 transition-all duration-300 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <impact.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                    {impact.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {impact.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
