import type { OtterVariant } from "@/components/ui/otter";

export const enquiryEmail = "hello@nookaa.in";
export type EnquiryField = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "url" | "number" | "date" | "textarea" | "select" | "radio";
  required?: boolean;
  options?: string[];
  autoComplete?: string;
  min?: number;
};
export type EnquiryStep = { title: string; fields: EnquiryField[] };
export type Enquiry = { slug: string; label: string; title: string; description: string; intro: string; otter: OtterVariant; steps: EnquiryStep[] };
const personal: EnquiryField[] = [
  { name: "name", label: "Full name", required: true, autoComplete: "name" },
  { name: "email", label: "Email address", type: "email", required: true, autoComplete: "email" },
  { name: "phone", label: "Phone number", type: "tel", required: true, autoComplete: "tel" },
];
const yesNo = ["Yes", "No"];

export const enquiries: Enquiry[] = [
  {
    slug: "jobs", label: "Jobs", title: "Make happy sips happen.",
    description: "Explore working with Nookaa. Share your experience, availability and interest in our grab-and-go beverage team.",
    intro: "Good drinks start with good people. Tell us a little about yourself and the role you’re interested in.", otter: "barista",
    steps: [{ title: "Jobs", fields: [...personal,
      { name: "city", label: "Location (city)", required: true, autoComplete: "address-level2" },
      { name: "position", label: "Position applying for", required: true },
      { name: "experience", label: "Experience level", type: "select", required: true, options: ["Fresher", "1–2 years", "3+ years"] },
      { name: "availability", label: "Availability", type: "select", required: true, options: ["Immediate", "15 days", "30+ days"] },
      { name: "portfolio", label: "Portfolio / work link", type: "url" },
      { name: "motivation", label: "Why would you like to work with Nookaa?", type: "textarea" },
    ] }],
  },
  {
    slug: "franchise-inquiry", label: "Franchise Enquiry", title: "Bring Nookaa to your neighbourhood.",
    description: "Start a Nookaa operator enquiry. Tell us about your background, motivation, involvement and financial readiness.",
    intro: "Interested in operating a Nookaa grab-and-go beverage outlet? Start a conversation with our team through this application.", otter: "inspector",
    steps: [
      { title: "Personal details", fields: [...personal, { name: "age", label: "Age", type: "number", min: 18 }] },
      { title: "Background & experience", fields: [
        { name: "occupation", label: "Current occupation or business", required: true },
        { name: "business-experience", label: "Have you run a food, retail or hospitality business?", type: "radio", options: yesNo, required: true },
        { name: "experience-details", label: "Your experience and key learnings", type: "textarea" },
        { name: "team-experience", label: "Have you managed a team?", type: "radio", options: yesNo, required: true },
      ] },
      { title: "Motivation & values", fields: [
        { name: "motivation", label: "Why would you like to operate a Nookaa outlet?", type: "textarea", required: true },
        { name: "guest-experience", label: "What makes a great customer experience?", type: "textarea", required: true },
        { name: "values", label: "What values guide your work?", type: "textarea", required: true },
        { name: "leadership", label: "Your leadership approach", type: "radio", required: true, options: ["Hands-on leadership", "Systems and delegation", "Team motivation"] },
      ] },
      { title: "Involvement & commitment", fields: [
        { name: "involvement", label: "Your involvement in daily operations", type: "radio", required: true, options: ["Full-time", "Part-time with a manager", "Passive role"] },
        { name: "commitments", label: "Other current or planned business commitments", type: "textarea", required: true },
        { name: "exclusive", label: "Can you focus exclusively on the Nookaa outlet?", type: "radio", options: yesNo, required: true },
      ] },
      { title: "Financial readiness", fields: [
        { name: "budget", label: "Your planned investment budget", type: "radio", required: true, options: ["₹10–20 lakhs", "₹20–40 lakhs", "₹40–60 lakhs", "Above ₹60 lakhs"] },
        { name: "model", label: "Open to discussing profit-sharing or lease-based operating models?", type: "radio", required: true, options: ["Yes", "No", "Tell me more"] },
      ] },
      { title: "Personal insight", fields: [
        { name: "standout", label: "How would your Nookaa outlet stand out locally?", type: "textarea", required: true },
        { name: "community", label: "How would you connect with your community?", type: "textarea", required: true },
        { name: "achievement", label: "Something you’ve built or managed that makes you proud", type: "textarea", required: true },
      ] },
    ],
  },
  {
    slug: "feedback", label: "Feedback", title: "Every sip. Every little detail.",
    description: "Share feedback about Nookaa beverages, counter service or the app. Tell us what you loved and what we can improve.",
    intro: "Loved a beverage? Have an idea that could make your next visit better? We’d love to hear it.", otter: "smile",
    steps: [{ title: "Feedback", fields: [...personal, { name: "message", label: "Your message", type: "textarea", required: true }] }],
  },
  {
    slug: "brand-collaborations", label: "Brand Collaborations", title: "Good ideas taste better together.",
    description: "Start a brand, creator or event collaboration enquiry with Nookaa. Share your brand, channels, idea and timeline.",
    intro: "Brands, creators and fresh ideas—let’s explore a collaboration that brings a little more happiness to everyday life.", otter: "laptop",
    steps: [{ title: "Brand collaborations", fields: [...personal,
      { name: "brand", label: "Brand / company name", required: true },
      { name: "collaboration-type", label: "Type of collaboration", type: "select", required: true, options: ["Influencer", "Brand", "Event", "Other"] },
      { name: "website", label: "Social media / website link", type: "url", required: true },
      { name: "idea", label: "Your collaboration idea", type: "textarea" },
      { name: "timeline", label: "When are you planning this?", required: true },
    ] }],
  },
  {
    slug: "stalls-and-catering", label: "Stalls and Catering", title: "Happy sips for your next event.",
    description: "Enquire about a Nookaa beverage stall or beverage catering for corporate events, weddings, parties and college festivals.",
    intro: "Planning a gathering? Tell us about your event and the beverages you have in mind. All stall and catering enquiries are for beverages only.", otter: "waiter",
    steps: [{ title: "Stalls and catering", fields: [...personal,
      { name: "event-type", label: "Event type", type: "select", required: true, options: ["Corporate", "Wedding", "Private party", "College fest", "Other"] },
      { name: "service", label: "Service requested", type: "select", required: true, options: ["Beverage stall", "Beverage catering", "Both"] },
      { name: "date", label: "Event date", type: "date", required: true },
      { name: "location", label: "Event location", required: true },
      { name: "footfall", label: "Approximate footfall", type: "number", min: 1, required: true },
      { name: "duration", label: "Event duration", required: true },
      { name: "setting", label: "Event setting", type: "radio", options: ["Indoor", "Outdoor"], required: true },
      { name: "requirements", label: "Custom beverage requirements", type: "textarea" },
      { name: "budget", label: "Budget range", required: true },
    ] }],
  },
];

export const enquiryLinks = enquiries.map(({ slug, label }) => ({ href: `/${slug}`, label }));
export function getEnquiry(slug: string) { return enquiries.find(enquiry => enquiry.slug === slug); }
