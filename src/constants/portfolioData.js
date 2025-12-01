export const portfolioData = {
  name: "Anas Bousrih",
  headline: "Full-stack student developer building clean UIs and practical tools.",
  summary:
    "I ship projects that balance clean UI with real-world engineering: storefronts, admin dashboards, multiplayer games, and portfolio UX with AI assist.",
  projects: [
    {
      slug: "fbla-merch-site",
      title: "FBLA Merch Website",
      shortDescription: "Full-stack merch platform for a student-made apparel business.",
      year: "2025",
      stack: ["Next.js", "TypeScript", "Django", "Tailwind", "Supabase", "PostgreSQL"],
      status: "in-development",
      category: "FBLA",
      overview:
        "Developing a full-stack merch web app for the FBLA Academy to manage a student apparel business with inventory, variants, and admin workflows.",
      features: [
        "Inventory system with low-stock alerts",
        "Variant support for sizes/colors and custom orders",
        "Admin product management and order oversight",
        "Security audits and role-based access",
      ],
      learning: [
        "Building business workflows end-to-end",
        "Handling image-heavy pages while keeping performance acceptable",
        "Documenting handoff for non-technical admins",
      ],
      notes: "Iterating on design system and considering Supabase Auth migration.",
      role: "Developer and Administrator",
      awards: ["Regional TSA Winner"],
      nextTasks: [
        "Integrate Supabase Auth",
        "Finish ordering model with approved payment processor",
        "Analytics dashboard with ML predictions",
      ],
    },
    {
      slug: "BlindBids",
      title: "Blind Bids",
      shortDescription: "Multiplayer web auction game with hidden item values.",
      year: "2024",
      stack: ["React", "Flask", "Vite"],
      status: "live",
      category: "Independent",
      overview:
        "Real-time classroom-friendly auction game where players bid on hidden-value items. Started as an assignment, became a shared game with classmates.",
      features: [
        "Responsive multiplayer bidding interface",
        "Fast updates via lightweight API/websocket approach",
        "Handles full classroom load smoothly",
        "AI integration for creative items",
      ],
      learning: [
        "Planning real-time flows: rooms, joins/leaves, bids, item rotation, scoring",
        "Optimizing updates without over-engineering",
        "Balancing fun visuals with accessibility",
      ],
      role: "Solo Developer",
      tags: ["realtime", "api architecture", "classroom", "web game"],
      nextTasks: ["Performance pass", "More classroom feedback"],
    },
    {
      slug: "portfolio-refresh",
      title: "Portfolio Refresh",
      shortDescription: "Intentional, minimal portfolio with AI-aided storytelling.",
      year: "2025",
      stack: ["React", "Vite", "Tailwind"],
      status: "live",
      category: "Independent",
      overview:
        "Rebuilt my portfolio to focus on clarity and consistent storytelling, adding AI Q&A and mixed showcases (live site + design embeds).",
      features: [
        "AI assistant for project Q&A",
        "Responsive cards with consistent layout",
        "Content-first sections with controlled motion",
        "Mixed showcase: live site + design embeds",
      ],
      learning: [
        "Balancing animation with performance budgets",
        "Building reusable content schemas",
        "Designing for quick skims on mobile",
      ],
      role: "Designer/Developer",
      tags: ["portfolio", "ui", "performance"],
      nextTasks: ["Content QA", "Performance polish"],
    },
  ],
};
