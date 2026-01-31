import { motion } from "framer-motion";
import { Mic, Radio, MessageSquare } from "lucide-react";

const Speaking = () => {
  return (
    <section id="speaking" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Speaking & <span className="gradient-text">Media</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge and insights on AI and technology
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card-elevated rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mic className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                  BLCA SMART TALK
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Featured speaker discussing AI innovations and their applications in solving real-world challenges in Tanzania.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-elevated rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Radio className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                  Tech Forums & Podcasts
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Regular contributor to technology discussions, sharing insights on data science and AI for social impact.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 card-elevated rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                  Community Workshops
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Conducting educational workshops on AI, data science, and technology for students and aspiring developers across Tanzania.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Speaking;
