import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, MapPin, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import profileImage from "@/assets/fede.jpg";
import { profile } from "@/data/profile";
import { workPhotos } from "@/data/work-photos";
import { cn } from "@/lib/utils";

const heroPhotos = [
  { id: "portrait", src: profileImage, alt: "Fedelika Maxmus Ng’olo", title: "Fedelika Maxmus Ng’olo" },
  ...workPhotos.map(photo => ({ id: photo.id, src: photo.src, alt: photo.alt, title: photo.title })),
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [interacting, setInteracting] = useState(false);
  const [focused, setFocused] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const update = () => setPageVisible(!document.hidden);
    update();
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);

  useEffect(() => {
    if (!playing || interacting || focused || !pageVisible || reducedMotion) return;
    const timer = window.setInterval(() => setCurrent(value => (value + 1) % heroPhotos.length), 5000);
    return () => window.clearInterval(timer);
  }, [playing, interacting, focused, pageVisible, reducedMotion]);

  return <section id="home" className="hero-surface relative isolate flex items-center overflow-hidden pt-20">
    <div
      className="hero-photo"
      onMouseEnter={() => setInteracting(true)}
      onMouseLeave={() => setInteracting(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
    >
      {heroPhotos.map((photo, index) => (
        <img
          key={photo.id}
          src={photo.src}
          alt={current === index ? photo.alt : ""}
          aria-hidden={current !== index || undefined}
          className={cn("hero-slide", current === index && "is-active")}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={index === 0 ? "high" : "low"}
        />
      ))}
    </div>
    <div className="hero-wash" />
    <div className="hero-photo-controls">
      <div className="flex items-center gap-1">
        {heroPhotos.map((photo, index) => (
          <Button
            key={photo.id}
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full"
            aria-label={`Show ${photo.title}`}
            aria-current={current === index ? "true" : undefined}
            onClick={() => setCurrent(index)}
          >
            <span className={cn("h-2 w-2 rounded-full", current === index ? "bg-accent" : "bg-muted-foreground/40")} />
          </Button>
        ))}
      </div>
      {!reducedMotion && <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" aria-label={playing ? "Pause photo slideshow" : "Play photo slideshow"} onClick={() => setPlaying(value => !value)}>
            {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>{playing ? "Pause photos" : "Play photos"}</TooltipContent>
      </Tooltip>}
    </div>
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
