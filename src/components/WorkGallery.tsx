import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { workPhotos } from "@/data/work-photos";
import { cn } from "@/lib/utils";

export default function WorkGallery() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [interacting, setInteracting] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!api) return;
    const update = () => setCurrent(api.selectedScrollSnap());
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.25 });
    observer.observe(section);
    const updateVisibility = () => setPageVisible(!document.hidden);
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (!api || !playing || interacting || focused || !visible || !pageVisible || reducedMotion) return;
    const timer = window.setInterval(() => api.scrollNext(), 5000);
    return () => window.clearInterval(timer);
  }, [api, playing, interacting, focused, visible, pageVisible, reducedMotion]);

  return (
    <section id="in-action" ref={sectionRef} className="section-space bg-secondary/40" aria-labelledby="work-gallery-title">
      <div className="page-container">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-4 text-xs font-medium text-accent">BEHIND THE WORK</p>
            <h2 id="work-gallery-title" className="font-display text-3xl font-medium leading-tight md:text-4xl">My work, in action.</h2>
          </div>
          <p className="text-sm text-muted-foreground">Building. Sharing. Connecting.</p>
        </div>
        <Carousel
          setApi={setApi}
          opts={{ loop: true, duration: reducedMotion ? 0 : 30 }}
          aria-label="Photos of my work"
          onMouseEnter={() => setInteracting(true)}
          onMouseLeave={() => setInteracting(false)}
          onPointerDown={() => setInteracting(true)}
          onPointerUp={event => { if (event.pointerType !== "mouse") setInteracting(false); }}
          onPointerCancel={() => setInteracting(false)}
          onFocusCapture={() => setFocused(true)}
          onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
        >
          <CarouselContent>
            {workPhotos.map((photo, index) => (
              <CarouselItem key={photo.id} aria-label={`${index + 1} of ${workPhotos.length}`} aria-hidden={current !== index}>
                <figure>
                  <div className="flex aspect-[3/2] max-h-[560px] w-full items-center justify-center overflow-hidden bg-muted">
                    <img src={photo.src} alt={photo.alt} className="h-full w-full object-contain" loading="lazy" decoding="async" />
                  </div>
                  <figcaption className="min-h-36 border-b border-border py-6 md:min-h-28">
                    <h3 className="font-display text-xl font-medium">{photo.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{photo.caption}</p>
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-1" aria-label="Choose a photo">
              {workPhotos.map((photo, index) => (
                <Button
                  key={photo.id}
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full"
                  aria-label={`Show photo ${index + 1}: ${photo.title}`}
                  aria-current={current === index ? "true" : undefined}
                  onClick={() => api?.scrollTo(index)}
                >
                  <span className={cn("h-2 w-2 rounded-full", current === index ? "bg-accent" : "bg-muted-foreground/40")} />
                </Button>
              ))}
              <span className="ml-2 font-mono text-xs tabular-nums text-muted-foreground" aria-live="off">0{current + 1} / 0{workPhotos.length}</span>
            </div>
            <div className="flex items-center gap-2">
              {!reducedMotion && <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label={playing ? "Pause slideshow" : "Play slideshow"} onClick={() => setPlaying(value => !value)}>
                    {playing ? <Pause /> : <Play />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{playing ? "Pause slideshow" : "Play slideshow"}</TooltipContent>
              </Tooltip>}
              <Tooltip>
                <TooltipTrigger asChild><Button variant="outline" size="icon" aria-label="Previous work photo" onClick={() => api?.scrollPrev()}><ArrowLeft /></Button></TooltipTrigger>
                <TooltipContent>Previous photo</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild><Button variant="outline" size="icon" aria-label="Next work photo" onClick={() => api?.scrollNext()}><ArrowRight /></Button></TooltipTrigger>
                <TooltipContent>Next photo</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}