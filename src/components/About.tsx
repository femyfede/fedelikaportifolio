import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export default function About() {
  return <section id="about" className="section-space">
    <div className="page-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <div><SectionHeading number="01" eyebrow="ABOUT ME" title="Technology grounded in real life." /><p className="max-w-sm font-display text-xl leading-relaxed text-accent">I believe intelligent technology should be useful, understandable, and built around people.</p></div>
      <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
        <p>I am <strong className="font-medium text-foreground">{profile.name}</strong>, a Tanzanian Data Science graduate working across AI, machine learning, data analytics, and embedded systems. I enjoy turning data and ideas into practical solutions.</p>
        <p>My work connects model development, computer vision, connected hardware, and analysis. I am especially interested in how these technologies can support agriculture, education, health, and community development.</p>
        <p>As founder of <strong className="font-medium text-foreground">BLECA SmartLabs</strong>, I bring technology innovation and entrepreneurship together. Alongside project development, I support collaboration, technology awareness, and girls' participation in technology through BLECA NextGen Girls.</p>
        <p>I am open to professional opportunities, research collaborations, and projects where I can contribute technical skills and help solve meaningful problems.</p>
        <Button variant="link" asChild className="px-0"><a href={profile.labs} target="_blank" rel="noopener noreferrer">Meet BLECA SmartLabs<ArrowUpRight /></a></Button>
        <div className="grid grid-cols-3 gap-4 border-t border-border pt-6"><div><p className="font-display text-lg text-foreground">AI</p><p className="mt-1 text-xs">Practical intelligence</p></div><div><p className="font-display text-lg text-foreground">Data</p><p className="mt-1 text-xs">Informed decisions</p></div><div><p className="font-display text-lg text-foreground">People</p><p className="mt-1 text-xs">Community impact</p></div></div>
      </div>
    </div>
  </section>;
}
