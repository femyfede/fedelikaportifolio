import { GraduationCap, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "@/data/profile";

export default function Education() {
  return <section id="education" className="section-space bg-secondary/40">
    <div className="page-container grid gap-8 md:grid-cols-2 md:gap-16">
      <SectionHeading number="08" eyebrow="EDUCATION" title="A foundation in data." />
      <div className="border-l-2 border-accent pl-6 md:pl-8">
        <div className="mb-5 flex items-center justify-between gap-4"><GraduationCap className="h-8 w-8 text-accent" strokeWidth={1.4} /><span className="font-mono text-sm text-muted-foreground">{profile.education.start} — {profile.education.end}</span></div>
        <h3 className="font-display text-2xl font-medium">{profile.education.degree}</h3>
        <p className="mt-3 text-muted-foreground">{profile.education.university} (MUST)</p>
        <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4" />Mbeya, Tanzania</p>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">My Data Science background informs how I work with data, develop models, and approach practical technology challenges.</p>
      </div>
    </div>
  </section>;
}