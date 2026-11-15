import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUpRight, Github, MapPin } from "lucide-react";
import profileImage from "@/assets/fede.jpg";
import { profile } from "@/data/profile";

export default function Hero() {
  return <section id="home" className="hero-surface relative isolate flex items-center overflow-hidden pt-20">
    <img src={profileImage} alt="Fedelika Maxmus Ng’olo" className="hero-photo" fetchPriority="high" />
    <div className="hero-wash" />
    <div className="page-container relative z-10 py-12 pt-[360px] md:py-16">
      <div className="reveal max-w-lg lg:max-w-xl">
        <p className="mb-6 flex items-center gap-2 text-xs font-medium text-accent"><span className="h-1.5 w-1.5 rounded-full bg-accent" />FOUNDER, BLECA SMARTLABS</p>
        <h1 className="font-display text-4xl font-medium leading-[1.08] sm:text-5xl lg:text-6xl">Fedelika Maxmus<br /><span className="text-accent">Ng’olo.</span></h1>
        <p className="mt-6 max-w-md font-display text-lg font-medium leading-relaxed md:text-xl">AI & Machine Learning. Data Analytics.<br className="hidden sm:block" /> Embedded AI. Technology Innovation.</p>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground lg:max-w-md lg:text-base">I am a Data Science graduate building practical AI-powered solutions and leading innovation for real-world challenges in Tanzania.</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button size="lg" asChild className="px-6"><a href="#projects">Explore my work<ArrowUpRight /></a></Button>
          <Button size="lg" variant="outline" asChild className="px-6"><a href="#contact">Let’s collaborate<ArrowUpRight /></a></Button>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />Tanzania</span>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-foreground"><Github className="h-3.5 w-3.5" />@femyfede<ArrowUpRight className="h-3 w-3" /></a>
        </div>
      </div>
      <a href="#about" className="mt-10 inline-flex items-center gap-3 text-xs text-muted-foreground md:mt-12"><ArrowDown className="h-4 w-4" />THE STORY BEHIND THE WORK</a>
    </div>
  </section>;
}
