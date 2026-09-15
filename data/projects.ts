import type { Project } from "@/types/portfolio";

export const featuredProjects: Project[] = [
  {
    title: "Dreams Visual Workflow Automation Platform",
    shortDescription:
      "A type-safe visual workflow editor for building multi-channel automations across messaging, AI, CRM, HTTP services, scheduling, branching, and data processing.",
    description:
      "Dreams brings automation, messaging, CRM, and customer-engagement tools into one product surface, including a visual workflow builder, WhatsApp, SMS, Telegram, email, templates, executions, credentials, AI providers, knowledge sources, and localized RTL/LTR interfaces.",
    image: "/images/dreams-workflow-builder.png",
    imageAlt: "Dreams workflow automation builder showing connected trigger, condition, AI, and messaging nodes",
    technologies: [
      "React",
      "TypeScript",
      "React Flow",
      "Zustand",
      "TanStack React Query",
      "Axios",
      "REST APIs",
      "RTL",
      "i18n"
    ],
    role:
      "Frontend engineer responsible for the visual workflow editor, reusable UI patterns, typed node architecture, server-state flows, validation behavior, API integration, and responsive RTL-aware interfaces.",
    problem:
      "The product needed a scalable way to build complex communication workflows visually while keeping node behavior, validation, server data, localization, and product UI consistent.",
    challenges: [
      "Supporting 32 workflow node types across messaging, AI, CRM, HTTP, scheduling, branching, and data-processing use cases.",
      "Keeping node configuration, defaults, renderers, validation rules, localization, and styling extensible.",
      "Handling graph-aware validation for connection compatibility, branching, loops, cycles, triggers, and duplicate outputs.",
      "Coordinating REST-backed workflow, credential, execution, knowledge-source, WhatsApp, and AI domains."
    ],
    solutions: [
      "Developed extensible node and configuration architecture connecting typed domain models, renderers, forms, defaults, validation rules, localization, and visual styling.",
      "Used Zustand for editor state and TanStack React Query for caching, mutations, invalidation, dependent queries, and conditional polling.",
      "Integrated REST APIs with Axios across workflow, credential, execution, knowledge-source, WhatsApp, and AI domains.",
      "Implemented direction-aware canvas controls, sidebars, forms, validation states, and responsive layouts for English and Arabic workflow editing."
    ],
    features: [
      "Workflow Automation Builder",
      "32 automation node types",
      "Graph-aware validation",
      "WhatsApp Messaging",
      "WhatsApp Reports",
      "WhatsApp Flows",
      "WhatsApp Templates",
      "SMS and Email surfaces",
      "Telegram automation",
      "Audience Management",
      "CRM",
      "AI providers and knowledge sources",
      "Automation triggers",
      "Dynamic variables and credentials",
      "Workflow simulation",
      "Execution monitoring",
      "Service landing pages",
      "Arabic and English localization",
      "RTL and LTR layout support"
    ],
    impact:
      "Created a maintainable frontend foundation for complex visual automation by connecting typed models, reusable node patterns, validation logic, server-state management, and localized product UI. TODO: add verified business or product outcomes when available."
  }
];

export const additionalProjects: Project[] = [
  {
    title: "TODO: Add Verified Project",
    shortDescription: "TODO: Add a concise product description once the project details are confirmed.",
    description:
      "TODO: Add the full project context, verified stack, your role, links, and screenshots without inventing metrics or client names.",
    image: "/images/dreams-workflow-builder.png",
    imageAlt: "TODO project screenshot placeholder",
    technologies: ["TODO"],
    role: "TODO: Add your role.",
    problem: "TODO: Add the product or engineering problem.",
    challenges: ["TODO: Add confirmed engineering challenges."],
    solutions: ["TODO: Add confirmed technical solutions."],
    features: ["TODO: Add verified features you implemented."],
    impact: "TODO: Add verified qualitative or quantitative impact.",
    status: "todo"
  }
];
