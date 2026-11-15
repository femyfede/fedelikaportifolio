import { Award, Globe, Users, Sparkles, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const achievements = [
  { year: "2026", icon: Globe, title: "IEEE IES Industrial Innovation Summit", detail: "Nairobi delegate · East Africa Hubs & Nodes" },
  { year: "2026", icon: Users, title: "DTI-A Mentorship Programme", detail: "Selected mentor" },
  { year: "2026", icon: Sparkles, title: "Girls in ICT", detail: "Technology & community participation" },
  { year: "Recognition", icon: Award, title: "IEEE Ambassador Recognition", detail: "IEEE IES Summit Ambassador · Top IEEE Ambassador · Best IEEE Ambassador" },
  { year: "Recognition", icon: Award, title: "Best Female Innovation", detail: "Innovation recognition" },
  { year: "Selection stage", icon: ArrowUpRight, title: "MEST AI Startup Program", detail: "Final interview stage" },
  { year: "2025", icon: Award, title: "Digital Innovation Award", detail: "Nominee · Founders Exhibition & Awards (FEA)" },
];

export default function Awards() {
  return <section id="awards" className="section-space">
    <div className="page-container grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <SectionHeading number="05" eyebrow="ACHIEVEMENTS & RECOGNITION" title="Progress worth recognising." description="Milestones in innovation, professional communities, and mentorship." />
      <div className="relative border-l border-border pl-6 md:pl-8">{achievements.map(item => <article className="relative border-b border-border py-5 first:pt-0 last:border-0" key={item.title}>
        <span className="absolute -left-[29px] top-7 h-2 w-2 rounded-full bg-accent first:top-2 md:-left-[37px]" />
        <p className="mb-2 font-mono text-[11px] text-accent">{item.year}</p>
        <h3 className="flex items-start gap-3 font-display text-lg font-medium"><item.icon className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" />{item.title}</h3>
        <p className="mt-2 pl-7 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
      </article>)}</div>
    </div>
  </section>;
}
