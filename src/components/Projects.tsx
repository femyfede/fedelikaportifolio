import { useState } from "react";
import { ArrowUpRight, Github, Sprout, ChartNoAxesCombined, HeartPulse, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import SectionHeading from "./SectionHeading";
import { featuredProjects, type CaseStudy } from "@/data/projects";

const icons = { seedyai: Sprout, "customer-churn": ChartNoAxesCombined, "green-pulse": HeartPulse, "jenga-ai": Languages };
const details: { key: keyof CaseStudy; title: string }[] = [
  { key: "problem", title: "The problem" }, { key: "importance", title: "Why it matters" },
  { key: "solution", title: "Proposed solution" }, { key: "role", title: "My contribution" },
  { key: "process", title: "Development process" }, { key: "implementation", title: "Current implementation" },
  { key: "impact", title: "Results & intended impact" },
];

export default function Projects() {
  const [selected, setSelected] = useState<CaseStudy | null>(null);
  return <section id="projects" className="section-space">
    <div className="page-container">
      <SectionHeading number="03" eyebrow="PROJECTS & INNOVATION" title="Ideas becoming practical solutions." description="A closer look at what I am building, the problems behind the work, and where each project stands." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, index) => {
          const Icon = icons[project.id as keyof typeof icons] || Sprout;
          return <article className="project-card group" key={project.id}>
            <div className="flex h-32 items-center justify-between border-b border-border bg-secondary/40 px-6"><Icon className="h-12 w-12 text-accent" strokeWidth={1} /><span className="self-start pt-5 font-mono text-xs text-muted-foreground">0{index + 1}</span></div>
            <div className="flex flex-1 flex-col p-6">
              <p className="mb-3 text-[10px] font-medium text-accent">{project.category}</p>
              <h3 className="font-display text-xl font-medium">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">{project.technologies.map(tech => <span key={tech} className="text-[11px] text-muted-foreground">{tech}</span>)}</div>
              <div className="mt-5 border-t border-border pt-4"><p className="mb-3 flex items-center gap-2 text-xs text-accent"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{project.status}</p><Button variant="ghost" className="w-full justify-between px-0 hover:bg-transparent hover:text-accent" onClick={() => setSelected(project)} aria-label={`Read ${project.title} case study`}>Read case study<ArrowUpRight /></Button></div>
            </div>
          </article>;
        })}
        <div className="flex flex-col justify-center border-l border-border p-6 md:p-8"><p className="mb-3 text-xs text-accent">MORE FROM MY WORKBENCH</p><h3 className="font-display text-2xl font-medium">The code behind<br />the ideas.</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">Explore my public repositories in AI, analytics, web development, and automation.</p><Button variant="link" asChild className="mt-5 justify-start px-0"><a href="#github">Browse GitHub projects<ArrowUpRight /></a></Button></div>
      </div>
    </div>
    <Dialog open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}>
      <DialogContent className="max-h-[85svh] w-[calc(100%-2rem)] max-w-xl overflow-y-auto rounded-lg p-6 md:p-8">
        {selected && <>
          <DialogHeader className="pr-6 text-left"><p className="mb-2 text-xs text-accent">{selected.category}</p><DialogTitle className="font-display text-2xl font-medium leading-tight md:text-3xl">{selected.title}</DialogTitle><DialogDescription className="pt-2 leading-relaxed">{selected.summary}</DialogDescription></DialogHeader>
          <p className="border-y border-border py-3 text-sm font-medium text-accent">{selected.status}</p>
          {selected.metric && <div className="py-2"><p className="font-display text-3xl text-foreground">{selected.metric.value}</p><p className="mt-1 text-xs text-muted-foreground">{selected.metric.label}</p></div>}
          <div className="space-y-6">{details.map(detail => <div key={detail.key}><h4 className="mb-2 text-sm font-semibold">{detail.title}</h4><p className="text-sm leading-relaxed text-muted-foreground">{String(selected[detail.key] || "")}</p></div>)}</div>
          <div className="border-t border-border pt-4"><h4 className="mb-2 text-sm font-semibold">Technologies & tools</h4><p className="text-sm text-muted-foreground">{selected.technologies.join(" · ")}</p></div>
          {selected.githubUrl && <Button asChild variant="outline"><a href={selected.githubUrl} target="_blank" rel="noopener noreferrer"><Github />View repository<ArrowUpRight /></a></Button>}
        </>}
      </DialogContent>
    </Dialog>
  </section>;
}
