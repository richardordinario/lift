import type { IconName } from "@/components/icons"

/**
 * Program content, copied from the approved design.
 *
 * Values in [square brackets] are facts that have not been approved yet. They
 * render as dashed "to be confirmed" boxes. Do not replace them with guesses.
 */
export type Program = {
  slug: string
  /** Browser tab title. */
  pageTitle: string
  title: string
  /** Short name used in the footer. */
  shortTitle: string
  icon: IconName
  home: { summary: string; audience: string; cta: string }
  index: { summary: string; audience: string; cta: string }
  hero: {
    title: string
    lead: string
    primaryCta: string
    secondaryCta: string
    photoLabel: string
  }
  audience: string[]
  outcomes: string[]
  modules: { title: string; focus: string }[]
  facts: { label: string; value: string }[]
  close: { title: string; body: string }
}

export const programs: Program[] = [
  {
    slug: "ai-for-teachers",
    pageTitle: "AI Education for Teachers | LIFT",
    title: "AI Education for Teachers",
    shortTitle: "AI for Teachers",
    icon: "book",
    home: {
      summary:
        "Bring AI into teaching and learning thoughtfully. Explore how educators can save time, strengthen preparation and create more engaging learning experiences.",
      audience: "Teachers, school leaders and education professionals",
      cta: "Explore Teacher Training",
    },
    index: {
      summary:
        "Help AI support teaching preparation, learning activities and responsible classroom use.",
      audience: "Teachers, school leaders and education professionals.",
      cta: "View Teacher Program",
    },
    hero: {
      title: "Bring AI into your teaching practice with confidence.",
      lead: "A practical learning pathway for educators exploring how artificial intelligence can support planning, instruction, assessment and everyday professional work while keeping teacher judgment and learner welfare at the center.",
      primaryCta: "Enquire About Teacher Training",
      secondaryCta: "Request Training for a School",
      photoLabel: "Photo to supply: teachers designing digital learning materials",
    },
    audience: [
      "K–12 teachers and school leaders exploring responsible AI use.",
      "Higher education instructors and faculty development teams.",
      "Pre-service teachers and education professionals developing digital teaching capability.",
    ],
    outcomes: [
      "Explain common AI capabilities, limitations and risks in education.",
      "Use effective prompts to support lesson preparation and content adaptation.",
      "Review AI-generated content for accuracy, bias, accessibility and appropriateness.",
      "Apply sound privacy, ethical and academic-integrity practices.",
      "Prepare a classroom-relevant AI-assisted output or activity plan.",
    ],
    modules: [
      {
        title: "Understanding AI for educators",
        focus: "Capabilities, appropriate use and common errors.",
      },
      {
        title: "Prompting and preparation",
        focus: "Lesson outlines, resources and differentiated activities.",
      },
      {
        title: "Feedback and assessment",
        focus: "Drafting with human review; authentic student learning.",
      },
      {
        title: "Responsible classroom AI",
        focus: "Privacy, safety, bias, verification and integrity.",
      },
      {
        title: "Practical application",
        focus: "A teacher-produced demonstration, lesson or implementation plan.",
      },
    ],
    facts: [
      { label: "Delivery mode", value: "[Confirm onsite, live online or blended]" },
      { label: "Duration", value: "[Confirm approved hours]" },
      { label: "Schedule", value: "[Insert next intake]" },
      { label: "Fees", value: "[Insert approved amount or “Enquire for details”]" },
      {
        label: "Completion documentation",
        value: "[State only what LIFT is authorized to issue]",
      },
    ],
    close: {
      title: "Build your next teaching skill with LIFT.",
      body: "Share your school, grade level and training goals so we can guide you to the appropriate cohort.",
    },
  },
  {
    slug: "ai-for-bpos",
    pageTitle: "AI Education for BPOs | LIFT",
    title: "AI Education for BPOs",
    shortTitle: "AI for BPOs",
    icon: "headset",
    home: {
      summary:
        "Prepare for AI-supported service and business workflows. Build practical confidence with AI tools while reinforcing judgment, communication and data care.",
      audience: "Current and aspiring BPO talent and their teams",
      cta: "Explore BPO Training",
    },
    index: {
      summary:
        "Explore practical AI applications for service operations, workplace productivity and professional development.",
      audience:
        "Current BPO professionals, aspiring entrants and organizations developing their teams.",
      cta: "View BPO Program",
    },
    hero: {
      title: "Develop AI skills for the evolving BPO workplace.",
      lead: "Learn how AI can support customer-facing work, information handling and productivity—while strengthening the human communication, judgment and data-care practices that service roles continue to require.",
      primaryCta: "Enquire About BPO Training",
      secondaryCta: "Train Your BPO Team",
      photoLabel: "Photo to supply: BPO learners practicing service workflows",
    },
    audience: [
      "Current customer service, shared services and IT-BPM professionals.",
      "Individuals exploring an entry point or transition into BPO work.",
      "Team leaders and employers considering AI-skills training for their workforce.",
    ],
    outcomes: [
      "Recognize practical AI use cases in service operations and daily work.",
      "Draft and refine prompts for common communication and knowledge tasks.",
      "Use AI-assisted drafting and summarization with appropriate human review.",
      "Understand risks involving privacy, confidential information and inaccurate output.",
      "Practice a role-relevant AI-supported workflow or scenario.",
    ],
    modules: [
      {
        title: "AI fundamentals for service work",
        focus: "Core concepts, strengths, limitations and examples.",
      },
      {
        title: "Prompting for productivity",
        focus: "Drafting, summarizing, organizing and refining work.",
      },
      {
        title: "Customer communication scenarios",
        focus: "Service interactions and tone with human oversight.",
      },
      {
        title: "Quality and data care",
        focus: "Checking output, respecting privacy and protecting sensitive data.",
      },
      {
        title: "Practical scenario",
        focus: "Role-based exercise based on the cohort’s work or career goals.",
      },
    ],
    facts: [
      {
        label: "Delivery mode",
        value: "[Confirm live online, onsite or company cohort]",
      },
      { label: "Duration", value: "[Confirm approved hours]" },
      { label: "Schedule", value: "[Insert next intake]" },
      { label: "Fees", value: "[Insert approved amount or “Enquire for details”]" },
      { label: "Completion documentation", value: "[Verify certificate wording]" },
    ],
    close: {
      title: "Help yourself or your team prepare for AI-supported work.",
      body: "Tell LIFT about your role, organization and target outcomes.",
    },
  },
  {
    slug: "ai-for-youth",
    pageTitle: "AI Education for Youth | LIFT",
    title: "AI Education for Youth and Young Professionals",
    shortTitle: "AI for Youth",
    icon: "sparkles",
    home: {
      summary:
        "Build digital fluency early. Learn to use AI to research, create, solve problems and produce work that demonstrates your developing skills.",
      audience: "Students, recent graduates and emerging professionals",
      cta: "Explore Youth Training",
    },
    index: {
      summary:
        "Build confidence using AI for learning, creativity, research and early career productivity.",
      audience: "Students, recent graduates and emerging professionals.",
      cta: "View Youth Program",
    },
    hero: {
      title: "Start building your AI advantage.",
      lead: "Discover how artificial intelligence can support learning, research, creativity and early career productivity. Build useful digital habits and begin creating work you can explain, review and improve.",
      primaryCta: "Enquire About Youth Training",
      secondaryCta: "Arrange a School or Group Cohort",
      photoLabel:
        "Photo to supply: young adults collaborating on an AI project (consent required)",
    },
    audience: [
      "Senior high school and college students looking to build applied AI literacy.",
      "Recent graduates and young professionals preparing for digital workplaces.",
      "Youth programs, schools and sponsors supporting early career capabilities.",
    ],
    outcomes: [
      "Understand everyday AI tools and where human thinking remains essential.",
      "Ask better questions and verify AI-generated information.",
      "Apply AI to study, research, communication and creative tasks.",
      "Practice responsible use, privacy and honest attribution.",
      "Complete an introductory project or personal productivity workflow.",
    ],
    modules: [
      {
        title: "AI literacy and digital judgment",
        focus: "Core ideas, limitations and critical thinking.",
      },
      {
        title: "Research and productivity",
        focus: "Prompting, information checks and workflow habits.",
      },
      {
        title: "Creativity and communication",
        focus: "Ideas, drafts, presentations and creative exploration.",
      },
      {
        title: "Ethical and responsible use",
        focus: "Privacy, bias, academic integrity and digital citizenship.",
      },
      {
        title: "Personal project",
        focus: "A small applied artifact with reflection and explanation.",
      },
    ],
    facts: [
      { label: "Entry age and guardian consent", value: "[Confirm]" },
      { label: "Delivery mode", value: "[Confirm]" },
      { label: "Duration", value: "[Confirm]" },
      { label: "Schedule", value: "[Insert next intake]" },
      { label: "Fees", value: "[Insert approved amount or “Enquire for details”]" },
      { label: "Completion documentation", value: "[Confirm authorization]" },
    ],
    close: {
      title: "Your future skills journey can begin with one practical step.",
      body: "Ask about the next available LIFT AI learning opportunity.",
    },
  },
]

export function programPath(program: Program) {
  return `/programs/${program.slug}`
}
