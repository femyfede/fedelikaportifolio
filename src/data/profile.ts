export const profile = {
  name: "Fedelika Maxmus Ng’olo",
  email: "femyfede@gmail.com",
  github: "https://github.com/femyfede",
  githubUsername: "femyfede",
  linkedin: "https://www.linkedin.com/in/fedelika-maxmus/",
  labs: "https://blecasmartlabs.co.tz",
  whatsapp: "https://wa.me/255684049130",
  phone: "+255684049130",
  buyMeACoffee: "https://www.buymeacoffee.com/femyfede",
  education: {
    degree: "BEng in Data Science",
    university: "Mbeya University of Science and Technology",
    abbreviation: "MUST",
    start: 2022,
    end: 2026,
  },
};

export interface ContactDraft {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function createEmailDraft(draft: ContactDraft) {
  const subject = draft.subject.trim() || `Portfolio enquiry from ${draft.name.trim()}`;
  const body = `Name: ${draft.name.trim()}\nReply to: ${draft.email.trim()}\n\n${draft.message.trim()}`;
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function createGmailDraft(draft: ContactDraft) {
  const mail = createEmailDraft(draft);
  const params = new URLSearchParams(mail.split("?")[1]);
  const compose = new URLSearchParams({ view: "cm", fs: "1", to: profile.email, su: params.get("subject") || "", body: params.get("body") || "" });
  return `https://mail.google.com/mail/?${compose.toString()}`;
}