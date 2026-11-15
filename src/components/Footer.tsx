import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
export default function Footer() {
  return <footer className="border-t border-border py-9"><div className="page-container">
    <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center"><div><p className="font-display text-lg font-medium">{profile.name}</p><p className="mt-1 text-xs text-muted-foreground">Building intelligent solutions for a better future.</p></div>
      <div className="flex items-center gap-2">{[{ url: profile.github, label: "GitHub", icon: Github }, { url: profile.linkedin, label: "LinkedIn", icon: Linkedin }, { url: `mailto:${profile.email}`, label: "Email", icon: Mail }].map(link => <Button asChild key={link.label} variant="ghost" size="icon"><a href={link.url} target={link.label === "Email" ? undefined : "_blank"} rel="noopener noreferrer" aria-label={link.label} title={link.label}><link.icon /></a></Button>)}<Button asChild variant="outline" size="icon"><a href="#home" aria-label="Back to top" title="Back to top"><ArrowUp /></a></Button></div>
    </div><div className="mt-6 flex flex-wrap justify-between gap-3 border-t border-border pt-5 text-xs text-muted-foreground"><p>© {new Date().getFullYear()} {profile.name}</p><p>Based in Tanzania. Open to collaboration.</p></div>
  </div></footer>;
}
