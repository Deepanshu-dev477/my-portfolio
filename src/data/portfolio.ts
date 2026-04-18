export const personalInfo = {
  name: "Deepanshu Kumar",
  role: "UX Engineer & Frontend Architect",
  tagline: "I turn complex product problems into clean, scalable frontend experiences.",
  valueProp:
    "5.6 years shipping React & Next.js SaaS — I sit at the intersection of design systems, product thinking, and engineering precision.",
  email: "kdeepanshu475@gmail.com",
  phone: "+91-9811297177",
  location: "New Delhi, India",
  linkedin: "https://linkedin.com/in/frontenduiux-bydeepanshu",
  availability: "Open to Senior Frontend / UX Engineering roles",
  techBadges: ["React.js", "Next.js", "Zustand", "TypeScript", "Figma", "Tailwind CSS"],
  profile: [
    "I'm the engineer who asks *why* before *how* — bridging the gap between product vision and production code. With 5.6+ years at the same company, I've owned full product lifecycles: from Figma wireframes to deployed SaaS used by 10,000+ students across India.",
    "My background in UI/UX design means I don't just implement designs — I question them, improve them, and build component systems that make future iterations 3× faster. I've modernized two legacy ASPX codebases, led a design system from scratch, and mentored a team of frontend engineers.",
    "I specialize in high-complexity UX: real-time exam engines, dynamic document builders, and data-heavy admin dashboards — the kind of products where both pixel precision and architectural decisions matter.",
  ],
  whatIBring: [
    {
      title: "Product + Engineering Hybrid",
      description:
        "I prototype in Figma and ship in React in the same sprint. Design decisions inform my code architecture.",
    },
    {
      title: "SaaS at Scale",
      description:
        "Built and owned 5 production SaaS products — from 0 to 10,000+ concurrent users — with Zustand, REST APIs, and Next.js.",
    },
    {
      title: "Legacy → Modern",
      description:
        "Migrated 2 legacy ASP.NET ASPX codebases to React without downtime, cutting UI bug reports by 40%.",
    },
  ],
};

export const experiences = [
  {
    company: "Yoctel Solutions Pvt. Ltd.",
    role: "Frontend Engineer / UX Engineer",
    period: "Jul 2024 – Present",
    location: "New Delhi, India",
    current: true,
    summary: "Leading frontend architecture and UX across 5 active SaaS products.",
    achievements: [
      "Architected 3 production SaaS platforms (LMS, Exam Player, Admin Dashboard) with Next.js + Zustand, serving 10,000+ concurrent users with zero critical UI failures post-launch",
      "Modernized 5-year-old ASP.NET ASPX codebase into a React design system — cut UI bug reports by 40% and halved onboarding time for new developers",
      "Rebuilt LMS student panel UX from scratch — restructured navigation, improved accessibility (WCAG AA), reducing support ticket volume by 35%",
      "Engineered Questopedia: a dynamic question paper generator with 8+ section types, bulk grouping, and real-time print preview — adopted by 200+ educators within 2 months",
      "Built 30+ shared UI components and 12 custom hooks across 4 products, reducing per-feature dev time by 25%",
      "Replaced manual spreadsheet operations with an internal admin dashboard — key issuance, subscription lifecycle, and overdue tracking now automated end-to-end",
      "Mentored 2 junior engineers via weekly code reviews; established company-wide UI/UX standards now enforced across all products",
    ],
  },
  {
    company: "Yoctel Solutions Pvt. Ltd.",
    role: "Senior Frontend Developer (UI/UX)",
    period: "Sep 2022 – Jul 2024",
    location: "New Delhi, India",
    current: false,
    summary: "Owned frontend development for 3 client-facing enterprise applications.",
    achievements: [
      "Delivered 3 enterprise dashboards using React.js — each shipped within sprint deadlines with full Figma-to-code fidelity",
      "Introduced component-driven architecture using Storybook principles, reducing design-to-dev handoff friction by 50%",
      "Optimized critical rendering paths — improved Lighthouse scores from 54 → 88 across 2 major products",
      "Partnered directly with designers to close design-dev gaps, eliminating a full QA revision cycle on 6 consecutive releases",
    ],
  },
  {
    company: "Yoctel Solutions Pvt. Ltd.",
    role: "Frontend Developer / UI Designer",
    period: "Apr 2021 – Sep 2022",
    location: "New Delhi, India",
    current: false,
    summary: "Dual role across design and development for client campaigns and products.",
    achievements: [
      "Designed and developed 10+ responsive landing pages and client marketing sites — all delivered on time with zero revision cycles post-handoff",
      "Created mobile app UI for 2 products using Figma and Adobe XD — designs were implemented 1:1 without revision",
      "Produced 50+ digital marketing assets (banners, creatives, motion graphics) for campaigns reaching 100K+ impressions",
    ],
  },
  {
    company: "Yoctel Solutions Pvt. Ltd.",
    role: "Web & Graphic Designer",
    period: "Oct 2020 – Apr 2021",
    location: "New Delhi, India",
    current: false,
    summary: "Foundation role — built visual design and branding capabilities.",
    achievements: [
      "Designed visual identity and UI assets for 3 digital product brands from scratch",
      "Developed responsive landing pages using HTML/CSS/JS — all pages scored 90+ on PageSpeed Insights",
    ],
  },
];

export const projects = [
  {
    slug: "exam-player",
    title: "Gate Banking Online Exam Player",
    subtitle: "SaaS · EdTech",
    featured: true,
    problem:
      "Students were cheating on high-stakes banking exams by switching tabs, opening DevTools, and copying content — threatening assessment integrity at scale.",
    solution:
      "Built a fortified Next.js exam engine with Zustand-powered real-time state sync, anti-cheat layer (tab-switch detection, DevTools blocking, copy-paste restriction), timed auto-submit, and multi-device responsive UI.",
    impact:
      "Secured assessments for 10,000+ users. Zero reported cheating incidents post-launch. Platform now handles 500+ concurrent exam sessions.",
    tags: ["Next.js", "React", "Zustand", "Tailwind CSS", "REST APIs"],
    metrics: [
      { value: "10K+", label: "Users Secured" },
      { value: "500+", label: "Concurrent Sessions" },
      { value: "0", label: "Cheating Incidents" },
    ],
    techDeepDive: {
      architecture: "Next.js App Router with Zustand stores split per exam session — isolated state prevents cross-session leaks. Custom hooks abstract timer logic, question navigation, and answer persistence.",
      challenges: [
        "Tab-switch detection via Page Visibility API + beforeunload — graceful on mobile where backgrounding is common",
        "DevTools blocking using window size diff heuristic — avoids false positives on ultrawide monitors",
        "Auto-submit on disconnect: Zustand state serialized to localStorage every 30s as a recovery checkpoint",
        "Optimistic answer saves with queue-based sync — exam continues even during brief network drops",
      ],
      keyDecisions: "Chose Zustand over Redux for per-session isolation without boilerplate. Avoided server components for the exam player itself — client-only to guarantee real-time reactivity without hydration lag.",
    },
    color: "from-violet-600 to-purple-800",
    accentColor: "#7c3aed",
  },
  {
    slug: "questopedia",
    title: "Questopedia — Question Paper Generator",
    subtitle: "SaaS · EdTech Tool",
    featured: true,
    problem:
      "Educators spent 3–4 hours manually formatting question papers in Word — prone to errors, inconsistent formatting, and impossible to reuse.",
    solution:
      "Shipped a dynamic paper builder with 8 configurable section types, drag-and-drop grouping, instruction blocks, marks-per-question logic, and a real-time print preview that exports clean PDFs.",
    impact:
      "Reduced paper creation time from 3 hours → under 20 minutes. Adopted by 200+ educators within 2 months of launch.",
    tags: ["React.js", "JavaScript", "CSS3", "REST APIs"],
    metrics: [
      { value: "200+", label: "Educators" },
      { value: "90%", label: "Time Saved" },
      { value: "8+", label: "Section Types" },
    ],
    techDeepDive: {
      architecture: "React component tree mirroring the document structure — Section → Part → QuestionGroup → Question. Each level manages its own state slice; a root reducer assembles the final schema for print/export.",
      challenges: [
        "Real-time print preview required a hidden iframe synced to editor state via postMessage — no third-party lib",
        "Marks-per-question logic needed to cascade up (section totals auto-update) without circular state updates",
        "Drag-and-drop reordering with stable keys — used nanoid for question IDs to survive list mutations",
        "PDF export: window.print() scoped to the preview iframe with injected print-only CSS",
      ],
      keyDecisions: "Kept state local to the editor (no server round-trips during editing) for zero-latency preview updates. Chose a schema-first data model so the same structure feeds both preview and API submission.",
    },
    color: "from-cyan-600 to-blue-800",
    accentColor: "#0891b2",
  },
  {
    slug: "sims-panel",
    title: "SIMS Student Information Panel",
    subtitle: "SaaS · Dashboard",
    featured: false,
    problem:
      "Legacy student portal had confusing navigation, zero mobile support, and a 60% task-abandonment rate on key workflows like test registration and course tracking.",
    solution:
      "Rebuilt from scratch with Next.js App Router, clear information hierarchy, mobile-first layouts, and optimized flows for course management, test scheduling, and result tracking.",
    impact:
      "Task completion rate improved significantly; mobile traffic grew 60% post-launch. Student support tickets dropped by 35%.",
    tags: ["Next.js", "React", "Tailwind CSS", "Zustand"],
    metrics: [
      { value: "60%", label: "Mobile Traffic ↑" },
      { value: "35%", label: "Support Tickets ↓" },
      { value: "0→1", label: "Mobile-first" },
    ],
    techDeepDive: {
      architecture: "Next.js App Router with nested layouts — shell layout holds nav/sidebar, inner layouts are route-specific. Zustand handles transient UI state (active course, filter selections); server components fetch course/test data.",
      challenges: [
        "Legacy API returned deeply nested, inconsistent shapes — wrote a normalisation layer before feeding Zustand",
        "Test registration flow had 6 steps with conditional branching — modelled as a state machine to avoid impossible UI states",
        "Mobile sidebar: CSS-only drawer on small screens to avoid JS bundle weight on initial load",
        "Stale-while-revalidate pattern for course lists — instant perceived performance without client-side loading spinners",
      ],
      keyDecisions: "Rebuilt routing structure from flat pages to nested layouts — this alone eliminated 3 categories of navigation bugs. Chose Next.js server components for data fetching to remove waterfall API calls.",
    },
    color: "from-emerald-600 to-teal-800",
    accentColor: "#059669",
  },
  {
    slug: "admin-dashboard",
    title: "Internal B2B Admin Dashboard",
    subtitle: "Enterprise Tool",
    featured: false,
    problem:
      "Key account operations — license generation, subscription lifecycle, overdue tracking — were managed via spreadsheets. Manual, slow, and error-prone at scale.",
    solution:
      "Built a React admin panel with role-based views, one-click key generation, automated overdue alerts, subscription plan management, and an audit trail for all actions.",
    impact:
      "Key issuance time cut by 70%. Manual data entry errors eliminated. Ops team now manages 500+ accounts from a single dashboard.",
    tags: ["React.js", "Zustand", "REST APIs", "PHP/Laravel"],
    metrics: [
      { value: "70%", label: "Faster Key Issuance" },
      { value: "500+", label: "Accounts Managed" },
      { value: "0", label: "Manual Entry Errors" },
    ],
    techDeepDive: {
      architecture: "React + Zustand with role-based store slices — admin sees full account tree, ops staff sees filtered view. Each domain (keys, subscriptions, overdues) is a self-contained feature module with its own slice, hooks, and API layer.",
      challenges: [
        "Key generation needed to be idempotent — same input always produces the same key, preventing accidental duplicates",
        "Overdue alerts: polling vs. webhooks — chose long-polling (30s) since backend couldn't support webhooks at the time",
        "Audit trail UI: virtualized list (react-window) to handle 10K+ log entries without scroll jank",
        "Bulk operations (mass-expire keys, batch plan upgrades) needed optimistic UI with rollback on API failure",
      ],
      keyDecisions: "Feature-module architecture meant each domain team could work independently without merge conflicts. Kept business logic in custom hooks (not components) so the same logic could be reused across admin and ops views.",
    },
    color: "from-orange-600 to-red-800",
    accentColor: "#ea580c",
  },
];

export const clients = [
  { name: "LevelUp IAS", category: "EdTech", users: "5K+ students" },
  { name: "Max IAS", category: "EdTech", users: "3K+ students" },
  { name: "Gate Banking", category: "Banking Exam Prep", users: "10K+ users" },
  { name: "Questopedia", category: "Ed Tool", users: "200+ educators" },
  { name: "SIMS Portal", category: "Academic", users: "Institutional" },
];

export const trustStats = [
  { value: "10,000+", label: "Users on shipped products" },
  { value: "5", label: "SaaS products owned end-to-end" },
  { value: "5.6 yrs", label: "At the same company — depth, not hops" },
  { value: "25%", label: "Dev time saved via design systems" },
];

export const skills = {
  "Core Frontend": [
    { name: "React.js", icon: "SiReact", color: "#61DAFB" },
    { name: "Next.js", icon: "SiNextdotjs", color: "#ffffff" },
    { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
    { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
    { name: "HTML5", icon: "SiHtml5", color: "#E34F26" },
    { name: "CSS3", icon: "SiCss3", color: "#1572B6" },
  ],
  "Styling": [
    { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
    { name: "Bootstrap", icon: "SiBootstrap", color: "#7952B3" },
    { name: "Framer Motion", icon: "SiFramer", color: "#ffffff" },
    { name: "Radix UI", icon: "SiRadixui", color: "#ffffff" },
  ],
  "State & Data": [
    { name: "Zustand", icon: "CUSTOM_ZUSTAND", color: "#6B4F3A" },
    { name: "Redux", icon: "SiRedux", color: "#764ABC" },
    { name: "REST APIs", icon: "SiPostman", color: "#FF6C37" },
    { name: "React Query", icon: "SiReactquery", color: "#FF4154" },
  ],
  "Backend & .NET": [
    { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
    { name: "Express.js", icon: "SiExpress", color: "#ffffff" },
    { name: "PHP", icon: "SiPhp", color: "#777BB4" },
    { name: "Laravel", icon: "SiLaravel", color: "#FF2D20" },
    { name: "ASP.NET MVC", icon: "SiDotnet", color: "#512BD4" },
    { name: "ASP.NET WebForms", icon: "SiDotnet", color: "#512BD4" },
  ],
  "Database": [
    { name: "MySQL", icon: "SiMysql", color: "#4479A1" },
    { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
  ],
  "Design": [
    { name: "Figma", icon: "SiFigma", color: "#F24E1E" },
    { name: "Adobe XD", icon: "SiAdobexd", color: "#FF61F6" },
    { name: "Photoshop", icon: "SiAdobephotoshop", color: "#31A8FF" },
    { name: "Illustrator", icon: "SiAdobeillustrator", color: "#FF9A00" },
    { name: "Canva", icon: "SiCanva", color: "#00C4CC" },
  ],
  "CMS & Platforms": [
    { name: "WordPress", icon: "SiWordpress", color: "#21759B" },
    { name: "Shopify", icon: "SiShopify", color: "#96BF48" },
  ],
  "Tools": [
    { name: "Git", icon: "SiGit", color: "#F05032" },
    { name: "GitHub", icon: "SiGithub", color: "#ffffff" },
    { name: "Docker", icon: "SiDocker", color: "#2496ED" },
    { name: "VS Code", icon: "SiVisualstudiocode", color: "#007ACC" },
  ],
};

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    university: "Chandigarh University",
    status: "Pursuing",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    university: "Indira Gandhi National Open University (IGNOU)",
    status: "Completed",
  },
];
