import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

const experience = [
  { organisation: "BLECA SmartLabs", role: "Founder", date: "Innovation & entrepreneurship", description: "I lead a technology innovation initiative focused on practical AI, machine learning, hardware, and software solutions.", responsibilities: ["Developing projects that connect technology with practical community needs.", "Coordinating teamwork and collaboration across hardware and software ideas.", "Supporting mentorship and technology awareness, including girls' empowerment through BLECA NextGen Girls."] },
  { organisation: "Saiket Systems", role: "Business Analysis Intern", date: "Business analytics", description: "I worked with telecommunications customer data to understand churn and turn analytical findings into business insights.", responsibilities: ["Cleaning and preparing data, then carrying out exploratory data analysis.", "Comparing customer behaviour and identifying retention patterns.", "Preparing analytical reports that make findings useful for business discussions."] },
  { organisation: "National Bureau of Statistics", role: "Field Data Collection", date: "Data quality & fieldwork", description: "I collected and verified field data through interviews, questionnaires, and direct engagement with respondents.", responsibilities: ["Maintaining data accuracy, confidentiality, and respectful respondent communication.", "Checking responses and meeting collection deadlines while communicating with supervisors.", "Strengthening my data validation, communication, and analytical skills through hands-on fieldwork."] },
  { organisation: "IoT Boot Camp", role: "Practical Training", date: "July – September 2025", description: "I gained practical exposure to connected hardware, sensors, and cloud-based monitoring.", responsibilities: ["Working with NodeMCU and Arduino, temperature and humidity sensors, and soil moisture sensors.", "Exploring IoT-based monitoring, hardware integration, and cloud monitoring."] },
];

export default function Experience() {
  return <section id="experience" className="section-space bg-secondary/40">
    <div className="page-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <div><SectionHeading number="02" eyebrow="PROFESSIONAL JOURNEY" title="Experience with purpose." description="From field data to intelligent systems, my work connects analysis, innovation, and people." />
        <BriefcaseBusiness className="h-8 w-8 text-muted-foreground" strokeWidth={1.4} />
      </div>
      <Accordion type="multiple" defaultValue={["BLECA SmartLabs"]}>
        {experience.map((item, index) => <AccordionItem key={item.organisation} value={item.organisation} className="border-border">
          <AccordionTrigger className="gap-4 py-6 text-left hover:no-underline">
            <div className="flex gap-4"><span className="mt-1 font-mono text-xs text-muted-foreground">0{index + 1}</span><div>
              <p className="mb-1 text-xs text-muted-foreground">{item.date}</p>
              <h3 className="font-display text-xl font-medium">{item.organisation}</h3>
              <p className="mt-1 text-sm font-normal text-accent">{item.role}</p>
            </div></div>
          </AccordionTrigger>
          <AccordionContent className="pl-8 text-muted-foreground">
            <p className="mb-4 leading-relaxed">{item.description}</p>
            <ul className="list-disc space-y-2 pl-4 leading-relaxed marker:text-accent">{item.responsibilities.map(text => <li key={text}>{text}</li>)}</ul>
            {index === 0 && <Button asChild variant="link" className="mt-4 px-0"><a href={profile.labs} target="_blank" rel="noopener noreferrer">Visit BLECA SmartLabs<ArrowUpRight /></a></Button>}
          </AccordionContent>
        </AccordionItem>)}
      </Accordion>
    </div>
  </section>;
}