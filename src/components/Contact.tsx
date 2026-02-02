import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ArrowRight, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in collaborating on impactful AI solutions? Let's talk!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="gradient-border rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/4 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 glow-effect">
                <Send className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Let's collaborate on impactful AI solutions.
              </h3>
              
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Whether you have a project idea, want to discuss AI for social impact, or just want to connect, I'd love to hear from you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Button variant="hero" size="lg" asChild>
                  <a href="mailto:fedelikangolo@gmail.com">
                    <Mail className="w-5 h-5" />
                    Send Email
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
              
              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com/femyfede"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/fedelika-ngolo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:fedelikangolo@gmail.com"
                  className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
