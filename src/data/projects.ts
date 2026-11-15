export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  summary: string;
  status: string;
  stage: "in-progress" | "concept" | "analysis" | "prototype";
  technologies: string[];
  problem: string;
  importance: string;
  solution: string;
  role: string;
  process: string;
  implementation: string;
  impact: string;
  githubUrl?: string;
  metric?: { value: string; label: string };
}

export const churnDataset = { records: 7043, variables: 21, churned: 1869, retained: 5174 };
export function churnRate() { return (churnDataset.churned / churnDataset.records) * 100; }

export const featuredProjects: CaseStudy[] = [
  {
    id: "seedyai", title: "SeedyAI", category: "AGRICULTURE · EMBEDDED AI",
    summary: "Helping Tanzanian smallholder farmers identify maize seed varieties through computer vision and on-device AI.",
    status: "Model trained · device in progress", stage: "in-progress",
    technologies: ["Edge Impulse", "Computer Vision", "XIAO ESP32-S3 Sense"],
    problem: "Distinguishing maize seed varieties can be difficult for smallholder farmers without accessible identification tools.",
    importance: "Knowing a seed variety can help farmers make more informed planting choices. A locally relevant, offline tool could make this information more accessible.",
    solution: "An image-classification system for local/Asili, OPV/Huria, hybrid/Chotara maize seeds, with a separate unrelated-image category. The design targets offline use on a Seeed XIAO ESP32-S3 Sense with a proposed farmer-friendly interface and display.",
    role: "I developed and trained the Edge Impulse model and am working on the embedded-device integration.",
    process: "Model development uses a dataset of approximately 23,727 images across the four categories. The next steps are hardware deployment and interface integration, followed by evaluation of the integrated device.",
    implementation: "The machine learning model has been trained. Hardware deployment is still in progress; offline classification and the display remain intended capabilities. No field validation or commercial deployment is claimed.",
    impact: "Expected impact: more accessible seed identification for Tanzanian smallholders. Real-world accuracy and farmer outcomes have not yet been established.",
    metric: { value: "23,727", label: "images in the training dataset, approximately" },
    githubUrl: "https://github.com/femyfede/seed_classifer",
  },
  {
    id: "grainsentinel", title: "GrainSentinel", category: "AGRICULTURE · IOT",
    summary: "An intelligent monitoring concept that listens for possible insect activity in stored maize.",
    status: "Monitoring concept", stage: "concept",
    technologies: ["Acoustic Monitoring", "Temperature & Humidity", "AI Sound Analysis"],
    problem: "Insect activity in stored grain can go unnoticed until damage is visible.",
    importance: "Reducing post-harvest loss matters for farmers' food security, income, and the quality of stored maize.",
    solution: "A proposed monitoring system combining microphone-based acoustic monitoring, temperature and humidity sensing, and AI-based sound-pattern analysis to support early warnings.",
    role: "I am exploring the monitoring concept and how sensor readings and acoustic signals could work together.",
    process: "The concept brings together sound capture, environmental monitoring, pattern analysis, and an early-warning interface. Hardware implementation and validation are not established yet.",
    implementation: "Concept stage. A deployed monitoring device, validated insect-detection model, or measured loss reduction is not claimed.",
    impact: "Expected impact: earlier awareness of possible insect activity and better-informed grain-storage decisions. This requires prototype testing and validation.",
  },
  {
    id: "customer-churn", title: "Customer Churn Analysis", category: "BUSINESS · DATA ANALYTICS",
    summary: "Turning telecommunications customer data into clearer insights about customer behaviour and retention.",
    status: "Analysis project", stage: "analysis",
    technologies: ["Data Cleaning", "Exploratory Data Analysis", "Business Analytics"],
    problem: "A telecommunications business needs to understand which customers leave and what patterns may relate to retention.",
    importance: "Understanding churn helps teams focus retention efforts and ask better questions about customer experience, rather than relying on assumptions.",
    solution: "An analysis of 7,043 customer records and 21 variables, covering data preparation, exploratory analysis, customer behaviour, and retention patterns.",
    role: "During my business analysis internship at Saiket Systems, I cleaned and prepared the data, explored patterns, and translated findings into business insights and analytical reports.",
    process: "Data cleaning and preparation were followed by exploratory analysis and comparison of churned and retained customer groups, then reporting of the findings.",
    implementation: "The dataset contains 1,869 churned customers and 5,174 retained customers, giving an observed churn rate of approximately 26.54%. This is an analytical finding, not a claim of improved retention.",
    impact: "The analysis gives a clearer picture of customer behaviour and a basis for informed retention discussions. No revenue improvement or causal impact is claimed.",
    metric: { value: "26.54%", label: "observed customer churn rate" },
    githubUrl: "https://github.com/femyfede/saikit_system",
  },
  {
    id: "green-pulse", title: "Green Pulse / Pulse NCD", category: "HEALTH · INNOVATION",
    summary: "A health-focused innovation prototype exploring practical technology for community health challenges.",
    status: "Health innovation prototype", stage: "prototype", technologies: ["Health Innovation", "Prototype Development"],
    problem: "The project explores a health-focused challenge. A specific clinical problem and target population are not established in the available project materials.",
    importance: "Health innovation needs a clear understanding of people's needs and careful evaluation before making claims about health outcomes.",
    solution: "A health-focused technology prototype. Specific device features, clinical capabilities, and a final implementation are not yet documented here.",
    role: "I am involved in the health-focused innovation prototype. The available materials do not establish a more detailed division of responsibilities.",
    process: "Prototype exploration. A detailed development record is not available in the existing materials, so technical stages and testing results are not inferred.",
    implementation: "Prototype stage; no clinical validation, patient results, or deployed health service is claimed.",
    impact: "Intended direction: practical health-focused innovation. Measurable benefits depend on a defined use case and future evaluation.",
  },
  {
    id: "jenga-ai", title: "JENGA AI", category: "FINANCE · GENERATIVE AI",
    summary: "A Kiswahili–English financial decision-support concept for Tanzanian individuals and small businesses.",
    status: "Concept / prototype", stage: "concept",
    technologies: ["AI Decision Support", "Kiswahili & English", "Financial Guidance"],
    problem: "Individuals and small businesses need financial information they can understand and use in their own context.",
    importance: "Accessible explanations can help people compare choices and better understand financial decisions, without replacing their judgement.",
    solution: "A bilingual AI concept proposing financial guidance and understandable AI-powered insights in Kiswahili and English. Its guiding principle is: ‘The AI explains; the user decides.’",
    role: "I am exploring the concept and its direction as a financial decision-support tool for Tanzanian users.",
    process: "Concept and prototype exploration focused on bilingual explanations and keeping the user in control of decisions. A production implementation is not established.",
    implementation: "Concept/prototype, not a fully deployed product. Specific integrations, user adoption, and financial outcomes are not claimed.",
    impact: "Expected impact: more understandable financial information for individuals and small businesses. It is not a promise of financial returns or a substitute for professional advice.",
  },
];