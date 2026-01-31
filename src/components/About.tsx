import { motion } from "framer-motion";
import { User, MapPin, GraduationCap, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-elevated rounded-2xl p-8 md:p-10 border border-border"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              <span className="text-foreground font-semibold">Fedelika Maxmus</span> (also known as <span className="text-foreground font-semibold">Fedelika Ng'olo</span>) is a Tanzanian AI/ML Engineer and Data Scientist recognized for leveraging technology to solve real-world and social challenges. She specializes in Artificial Intelligence, Machine Learning, IoT, and data-driven systems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              She is currently a Data Science student at <span className="text-foreground font-semibold">Mbeya University of Science and Technology (MUST)</span> and an active member of the <span className="text-primary font-semibold">Tanzania AI Community</span>, where she contributes to initiatives that promote AI and data science education across the region.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-8 border-t border-border">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">AI/ML Engineer</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-3">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <span className="text-sm text-muted-foreground">Tanzania</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Data Science Student</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <span className="text-sm text-muted-foreground">TZ AI Community</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
