import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Menu, X, Sun, Moon, ArrowUpRight, Coffee } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { profile } from "@/data/profile";
import profileImage from "@/assets/fede.jpg";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#github", label: "GitHub" },
  { href: "#awards", label: "Recognition" },
  { href: "#community", label: "Leadership" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: "-15% 0px -65% 0px", threshold: 0 });
    document.querySelectorAll("main section[id]").forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
    <nav aria-label="Main navigation" className="page-container flex h-20 items-center justify-between gap-4">
      <a href="#home" onClick={() => setOpen(false)} className="flex shrink-0 items-center gap-2.5" aria-label="Fedelika Maxmus Ng’olo — home">
        <img src={profileImage} alt="" className="h-10 w-10 rounded-full border border-border object-cover object-[center_35%]" />
        <span className="font-display text-lg font-semibold">Fedelika<span className="text-accent">.</span></span>
      </a>
      <div className="hidden items-center gap-5 xl:flex">
        {navLinks.slice(1).filter(link => !["#community", "#education"].includes(link.href)).map(link => <a key={link.href} href={link.href} aria-current={active === link.href.slice(1) ? "location" : undefined} className={`text-xs transition-colors hover:text-foreground ${active === link.href.slice(1) ? "text-foreground" : "text-muted-foreground"}`}>{link.label}</a>)}
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <Tooltip><TooltipTrigger asChild><Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}>{theme === "light" ? <Moon /> : <Sun />}</Button></TooltipTrigger><TooltipContent>{theme === "light" ? "Dark theme" : "Light theme"}</TooltipContent></Tooltip>
        <Button size="sm" asChild variant="coffee" className="hidden sm:inline-flex"><a href={profile.buyMeACoffee} target="_blank" rel="noopener noreferrer"><Coffee />Buy me a coffee</a></Button>
        <Button size="sm" asChild className="hidden sm:inline-flex"><a href="#contact">Let’s talk<ArrowUpRight /></a></Button>
        <Button variant="ghost" size="icon" className="xl:hidden" onClick={() => setOpen(value => !value)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation">{open ? <X /> : <Menu />}</Button>
      </div>
    </nav>
    {open && <nav id="mobile-navigation" aria-label="Expanded navigation" className="max-h-[calc(100svh-80px)] overflow-y-auto border-t border-border bg-background xl:hidden">
      <div className="page-container grid grid-cols-2 gap-x-6 gap-y-1 py-5">{[...navLinks, { href: "#contact", label: "Contact" }].map(link => <a href={link.href} key={link.href} onClick={() => setOpen(false)} className="border-b border-border py-3 text-sm text-foreground hover:text-accent">{link.label}</a>)}</div>
      <div className="page-container pb-5"><Button asChild variant="coffee" className="w-full"><a href={profile.buyMeACoffee} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}><Coffee />Buy me a coffee<ArrowUpRight /></a></Button></div>
    </nav>}
  </header>;
}
