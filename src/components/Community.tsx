import { ArrowUpRight, Users, Lightbulb, Globe, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "./SectionHeading";
import { profile } from "@/data/profile";

const activities = [
  { icon: Lightbulb, title: "BLECA SmartLabs", description: "I bring people and ideas together to develop practical technology solutions, with a focus on community needs, innovation, and entrepreneurship." },
  { icon: Users, title: "BLECA NextGen Girls", description: "Through this girls' technology and mentorship initiative, I support opportunities for girls to explore technology and take part in STEM and innovation." },
  { icon: Globe, title: "Professional & AI Communities", description: "My involvement in IEEE, the Tanzania AI Community, the Youth Engineering Forum, and CITT-MUST connects me with ideas, collaborators, and shared learning." },
  { icon: Mic, title: "Mentorship & Technology Engagement", description: "I contribute through the DTI-A Mentorship Programme and CS Girlies Hackathon mentorship, alongside Girls in ICT and the AI Hackathon – Girls Shaping the Future with TCRA." },
];
export default function Community() {
  return <section id="community" className="section-space bg-secondary/40">
    <div className="page-container"><SectionHeading number="06" eyebrow="LEADERSHIP & COMMUNITY" title="Building together. Moving forward." description="My work is also about creating room for others to learn, contribute, and take part in technology." />
      <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">{activities.map(item => <article key={item.title} className="flex gap-4 border-t border-border pt-6"><item.icon className="mt-1 h-6 w-6 shrink-0 text-accent" strokeWidth={1.5} /><div><h3 className="font-display text-xl font-medium">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p></div></article>)}</div>
      <div className="mt-10 flex flex-col justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center"><div><h3 className="font-display text-lg font-medium">BLECA SMART TALK</h3><p className="mt-2 text-sm text-muted-foreground">Sharing ideas about AI, technology, and practical innovation.</p></div><Button asChild variant="outline"><a href={profile.labs} target="_blank" rel="noopener noreferrer">Connect with BLECA<ArrowUpRight /></a></Button></div>
    </div>
  </section>;
}
