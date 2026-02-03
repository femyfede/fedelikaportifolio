import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, ArrowRight, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "+255684049130";
const EMAIL_ADDRESS = "femyfede@gmail.com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Create mailto link with form data
    const mailtoSubject = encodeURIComponent(subject || `Message from ${name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const mailtoLink = `mailto:${EMAIL_ADDRESS}?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast.success("Opening your email client...");
    
    // Reset form
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

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
            className="gradient-border rounded-2xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 glow-effect">
                <Send className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="font-display text-2xl font-bold text-foreground mb-4 text-center">
                Send me a message
              </h3>
              
              <p className="text-muted-foreground mb-8 max-w-md mx-auto text-center">
                Whether you have a project idea, want to discuss AI for social impact, or just want to connect, I'd love to hear from you.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4 mb-8">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="Your Name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-background border-border"
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Your Email *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-background border-border"
                    required
                  />
                </div>
                <Input
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="bg-background border-border"
                />
                <Textarea
                  placeholder="Your Message *"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-background border-border min-h-[150px]"
                  required
                />
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Mail className="w-5 h-5" />
                  Send Message
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
              
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
                  href="https://www.linkedin.com/in/fedelika-maxmus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] hover:bg-[#25D366]/20 hover:border-[#25D366]/50 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
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
