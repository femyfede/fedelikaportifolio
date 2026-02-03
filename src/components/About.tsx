import { motion } from "framer-motion";
import { User, MapPin, GraduationCap, Code } from "lucide-react";

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
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I am <span className="text-foreground font-semibold">Maxmus Fedelika</span>, a passionate AI/ML Engineer, Data Scientist, and Web Developer with a strong interest in building intelligent, data-driven, and impactful digital solutions. I specialize in designing and developing scalable systems that combine artificial intelligence, machine learning, web technologies, and IoT to solve real-world problems.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I have hands-on experience in Python, Django, Flask, REST APIs, machine learning models, data analysis, and modern web development. My work focuses on creating clean, efficient, and user-centered applications, from AI-powered chatbots and predictive models to full-stack web platforms.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I enjoy transforming ideas into functional products, paying close attention to performance, usability, and maintainability. I am also deeply motivated by projects with social and business impact, especially those that improve access to information, automation, and decision-making through technology.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am continuously learning, experimenting, and improving my skills to stay aligned with modern industry standards. I am open to freelance work, collaborations, research opportunities, and full-time roles, where I can contribute value, grow professionally, and help organizations achieve their goals through technology.
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
                  <Code className="w-6 h-6 text-accent" />
                </div>
                <span className="text-sm text-muted-foreground">Web Developer</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Data Analyst</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-3">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <span className="text-sm text-muted-foreground">Tanzania</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
