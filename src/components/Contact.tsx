import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, Github, Linkedin, MessageCircle, Copy, Check, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SectionHeading from "./SectionHeading";
import { profile, createEmailDraft, createGmailDraft } from "@/data/profile";

export default function Contact() {
  const [draft, setDraft] = useState({ name: "", email: "", subject: "", message: "" });
  const [prepared, setPrepared] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [copiedNumber, setCopiedNumber] = useState(false);
  const [copyNumberError, setCopyNumberError] = useState(false);
  const update = (key: keyof typeof draft, value: string) => { setDraft(current => ({ ...current, [key]: value })); setPrepared(false); };
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!draft.name.trim() || !draft.message.trim()) return;
    window.location.href = createEmailDraft(draft);
    setPrepared(true);
  };
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setCopyError(false); }
    catch { setCopyError(true); }
  };
  const copyAirtelNumber = async () => {
    try { await navigator.clipboard.writeText(profile.airtelMoney.copyValue); setCopiedNumber(true); setCopyNumberError(false); }
    catch { setCopyNumberError(true); }
  };
  return <section id="contact" className="section-space">
    <div className="page-container grid gap-10 lg:grid-cols-2 lg:gap-20">
      <div><SectionHeading number="09" eyebrow="CONTACT" title="Let’s build something that matters." description="Let’s collaborate on impactful AI solutions." />
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">I am open to AI and analytics projects, research, embedded-system innovation, professional opportunities, and technology mentorship.</p>
        <div className="mt-8 flex items-center gap-2"><a href={`mailto:${profile.email}`} className="break-all font-display text-lg hover:text-accent">{profile.email}</a><Button variant="ghost" size="icon" onClick={copyEmail} aria-label={copied ? "Email copied" : "Copy email address"} title={copied ? "Email copied" : "Copy email address"}>{copied ? <Check /> : <Copy />}</Button></div>
        {copyError && <p className="mt-2 text-xs text-muted-foreground" role="status">Copy is unavailable. Email me at {profile.email}.</p>}
        <div className="mt-6 flex flex-wrap gap-3"><Button asChild variant="outline"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin />LinkedIn<ArrowUpRight /></a></Button><Button asChild variant="outline"><a href={profile.github} target="_blank" rel="noopener noreferrer"><Github />GitHub<ArrowUpRight /></a></Button></div>
        <div id="support" className="mt-8 max-w-md rounded-lg border border-border bg-card p-5">
          <div className="flex items-center gap-2 font-display text-base font-medium"><Smartphone className="text-accent" />Support my work — Airtel Money</div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">If my work has helped you, you can support me directly through Airtel Money.</p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="font-display text-lg font-semibold tracking-wide">{profile.airtelMoney.number}</span>
            <Button variant="ghost" size="icon" onClick={copyAirtelNumber} aria-label={copiedNumber ? "Airtel Money number copied" : "Copy Airtel Money number"} title={copiedNumber ? "Number copied" : "Copy number"}>{copiedNumber ? <Check /> : <Copy />}</Button>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">Name: {profile.airtelMoney.name}</p>
          {copyNumberError && <p className="mt-2 text-xs text-muted-foreground" role="status">Copy is unavailable. The number is {profile.airtelMoney.number}.</p>}
        </div>
        <Button asChild variant="link" className="mt-4 px-0 text-whatsapp"><a href={profile.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle />WhatsApp · {profile.phone}<ArrowUpRight /></a></Button>
      </div>
      <form onSubmit={submit} className="space-y-5">
        <h3 className="mb-6 font-display text-xl font-medium">Start a conversation.</h3>
        <div className="grid gap-5 sm:grid-cols-2"><div className="space-y-2"><Label htmlFor="contact-name">Your name</Label><Input id="contact-name" name="name" autoComplete="name" required maxLength={120} value={draft.name} onChange={e => update("name", e.target.value)} placeholder="Name" className="bg-card" /></div><div className="space-y-2"><Label htmlFor="contact-email">Your email</Label><Input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} value={draft.email} onChange={e => update("email", e.target.value)} placeholder="you@example.com" className="bg-card" /></div></div>
        <div className="space-y-2"><Label htmlFor="contact-subject">Subject <span className="font-normal text-muted-foreground">(optional)</span></Label><Input id="contact-subject" name="subject" value={draft.subject} maxLength={200} onChange={e => update("subject", e.target.value)} placeholder="What would you like to discuss?" className="bg-card" /></div>
        <div className="space-y-2"><Label htmlFor="contact-message">Your message</Label><Textarea id="contact-message" name="message" required maxLength={4000} value={draft.message} onChange={e => update("message", e.target.value)} placeholder="Tell me a little about your idea…" className="min-h-36 resize-y bg-card" /></div>
        <div className="flex flex-wrap items-center gap-4"><Button type="submit" size="lg" className="px-6"><Mail />Prepare email<ArrowUpRight /></Button><Button type="button" asChild variant="link" className="px-0"><a href={createGmailDraft(draft)} target="_blank" rel="noopener noreferrer">Open in Gmail<ArrowUpRight /></a></Button></div>
        {prepared && <p role="status" className="border-l-2 border-accent pl-3 text-sm leading-relaxed text-muted-foreground">Your email draft is ready for {profile.email}. Send it from your email app, or open it in Gmail. Your message has not been sent yet.</p>}
      </form>
    </div>
  </section>;
}
