// portfolioData.js

export const portfolioData = {
  bio: {
    name: "Anas Bousrih",
    location: "Louisville, KY",
    identity: "Student developer focused on building useful tools for schools and communities.",
    summary: `
I am a student developer who found confidence through service, outreach, and technology.
I build practical software—from full-stack merch systems to real-time games—
and I care deeply about clarity, empathy, and tools that help people.
    `,
    goals: [
      "Earn admission to UofL’s J.B. Speed School of Engineering",
      "Pursue Computer Science & Engineering",
      "Build software that makes education and community systems better",
      "Develop tools that serve students, teachers, and community members"
    ]
  },

  education: {
    school: "Seneca High School (JCPS)",
    graduation: "May 2026",
    gpa: "3.5 (Projected 3.7+)",
    relevant_courses: [
      "Dual-Credit Problem Solving & Logic Design (KSU)",
      "Intro to Computer Science",
      "Advanced Pre-Calculus (Spring 2026)",
      "Web Page Development"
    ],
    intended_major: "Computer Science & Engineering"
  },

  service: {
    summary: `
A core part of my identity comes from serving through my masjid:
answering questions at the Kentucky State Fair outreach booth,
organizing interfaith discussions with local churches,
and offering support at youth programs and community events.
These moments taught me patience, empathy, and how human connections
break stereotypes and build understanding.
    `,
    initiatives: [
      {
        name: "Kentucky State Fair Outreach Booth",
        impact: `
Spoke with people curious about Islam, cleared misunderstandings,
and helped build connections across different backgrounds.
Learned to communicate despite language insecurities and cultural gaps.
        `,
        themes: ["diversity", "communication", "confidence-building"]
      },
      {
        name: "Masjid Interfaith Events",
        impact: `
Helped organize discussions with local churches, prepared educational slides,
and spoke publicly about Islamic beliefs. Strengthened public speaking and cultural bridge-building.
        `
      },
      {
        name: "Homeless Shelter Meal Service",
        impact: `
Helped prepare and distribute warm meals to people downtown,
learning humility and the importance of showing up for others.
        `
      },
      {
        name: "Eid Carnival Cultural Booth",
        impact: `
Operated a booth showcasing a traditional Tunisian drink, sharing culture
and connecting with attendees from diverse backgrounds.
        `
      }
    ],
    key_lessons: [
      "Service builds confidence, not the other way around.",
      "Small conversations can break stereotypes and change perspectives.",
      "Acting with empathy and clarity creates trust.",
      "Service shaped my worldview and strengthened my desire to build helpful technology."
    ]
  },

  experience: [
    {
      organization: "Spectrum (Charter Communications)",
      role: "Customer Service Internet Repair Intern",
      period: "June 2025 – Present",
      responsibilities: [
        "Help frustrated customers resolve internet issues with calm, clear explanations.",
        "Translate technical problems into simple language non-technical users can understand.",
        "Practice empathy, patience, and active listening in high-pressure situations.",
        "Recognized for meeting/exceeding performance goals and turning difficult calls into positive experiences."
      ]
    }
  ],

  awards: [
    {
      name: "Amazon Innovation Award",
      year: 2023,
      description:
        "Awarded for password vulnerability and security research using a custom Python brute-force tool."
    },
    {
      name: "Regional TSA Winner — Webmaster Competition",
      year: 2025,
      description:
        "Led a team to build a fully responsive vegan restaurant website. Recognized for concept, UI, and structure."
    },
    {
      name: "GMetrix HTML & CSS Certification",
      year: 2025
    }
  ],

  skills: {
    programming: [
      "Python",
      "JavaScript",
      "TypeScript (working proficiency)",
      "React",
      "Next.js",
      "Django",
      "Flask",
      "SQL",
      "Git/GitHub",
      "Tailwind CSS"
    ],
    languages: ["English", "Arabic"],
    interests: [
      "AI Development",
      "Software & Web Engineering",
      "UI/UX Design",
      "Educational Technology",
      "Cultural Outreach",
      "Entrepreneurship"
    ]
  },

  projects: [
    {
      id: "fbla-merch-site",
      name: "FBLA Merch Website",
      year: 2025,
      status: "In-Development",
      category: "FBLA Student Initiative",
      stack: ["Next.js", "TypeScript", "Tailwind", "Django", "PostgreSQL", "Supabase"],
      overview: `
A full-stack merch platform for a student-run apparel business.
Built with real business workflows, variant models, inventory tracking,
order flows, role-based admin access, and a responsive UI.
      `,
      features: [
        "Structured product variants with SKUs",
        "Inventory & order management workflows",
        "Role-based access control",
        "Supabase CDN asset storage",
        "Django API + scalable Next.js frontend",
        "Secure authentication with future plan for Supabase Auth"
      ],
      learning: [
        "Full business workflow modeling",
        "Building large, scalable codebases",
        "Coordinating with school leadership to meet requirements",
        "Balancing simple student UI with powerful admin tools",
        "Following maintainable architecture practices",
        "Realizing my ability to build tools that help other students"
      ],
      reflection: `
One of the most complex projects I’ve built.
Helped me understand real-world commerce logic and how to design
systems that must be reliable, secure, and easy for others to use.
      `
    },

    {
      id: "blindbids",
      name: "BlindBids — Multiplayer Auction Game",
      year: 2025,
      status: "Live",
      category: "Independent",
      stack: ["React", "Flask", "Vite"],
      overview: `
A real-time multiplayer auction game where players bid on items with hidden value.
Started as a classroom assignment and expanded into a polished classroom-friendly game.
Also integrates an AI item generator to help teachers and players set up games quickly.
      `,
      features: [
        "Fast update cycles with optimized low-interval API polling",
        "Fully in-memory game state (no database)",
        "Room creation, player join/leave, bidding, rotation, scoring",
        "Lightweight enough for an entire classroom",
        "AI integration for dynamic item generation"
      ],
      learning: [
        "Turned a simple idea into a full working product",
        "Designed a real-time interaction loop without WebSockets",
        "Learned API optimization and state management",
        "Understood the importance of user clarity and fast feedback"
      ],
      reflection: `
Showed me how fun small ideas can become meaningful tools.
Teachers told me it could be a classroom resource, which pushed me to polish it.
      `
    },

    {
      id: "tsa-webmaster",
      name: "TSA Vegan Restaurant Website",
      year: 2025,
      status: "Live",
      category: "TSA Competition",
      stack: ["HTML", "CSS", "JavaScript", "Flask", "SQLAlchemy"],
      overview: `
Team-led competition project: a vegan restaurant experience with reservation system,
admin panel, role-based access control, and responsive layout.
      `,
      features: [
        "Multi-step reservation flow",
        "Admin + staff views",
        "Flask backend with SQLAlchemy ORM",
        "Fully responsive UI",
        "Team coordination and repeated iteration"
      ],
      learning: [
        "Backend fundamentals with Flask",
        "Using SQLAlchemy ORM for structured data",
        "Team leadership and deadline management",
        "Aligning design with constraints (competition rules)"
      ],
      reflection: `
This was the first project that made me feel real pride.
Today I could rebuild it 10x better, but that’s why it matters:
it marks the start of the journey and reminds me how far I've come.
      `
    }
  ],

  essay: {
    prompt_summary:
      "Reflection on service, diversity, community-building, and personal growth through outreach and volunteering.",
    full_text: `
For OpenAI: use summarized references instead of quoting full paragraphs.
Key Ideas:
- Moving to the U.S. and learning English shaped confidence.
- Service at the State Fair booth introduced connection + community.
- Interfaith work taught empathy and cultural understanding.
- Helping frustrated customers at Spectrum mirrors these skills.
- Service shaped worldview: kindness, clarity, and the desire to give back.
- Technology growth is enabled by others’ service—tutorials, open-source, etc.
- Inspired to use software skills to contribute meaningfully.
    `.trim()
  }
};
