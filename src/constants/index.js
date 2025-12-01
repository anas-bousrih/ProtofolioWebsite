import codingPov from "../assets/coding-pov.png";
import reactLogo from "../assets/tech/reactjs.png";
import nextLogo from "../assets/tech/nextjs2.png";
import djangoLogo from "../assets/tech/django.png";
import tailwindLogo from "../assets/tech/tailwind.png";
import postgresLogo from "../assets/tech/postgresql.svg";
import flasklogo from "../assets/tech/flask.png";
import reactlogo from "../assets/tech/reactjs.png";
import supabaselogo from "../assets/tech/supabase.png";
import typescriptlogo from "../assets/tech/typescript.png"; 
import viteLogo from "../assets/tech/vitejs.png";
import htmlLogo from "../assets/tech/html.png"; 
import javascriptLogo from "../assets/tech/javascript.png"; 
import cssLogo from '../assets/tech/css3.png'



export const myProjects = [
  {
    id: 1,
    slug: "fbla-merch-site",
    title: "FBLA Merch Website",
    shortDescription: "Full-stack merch platform for a student made apparel business. ",
    year: "2025",
    stack: [
      { name: "Next.js", icon: nextLogo },
      { name: "TypeScript", icon: typescriptlogo },
      { name: "Django", icon: djangoLogo },
      { name: "Tailwind CSS", icon: tailwindLogo },
      { name: "Supabase", icon: supabaselogo },
      { name: "PostgreSQL", icon: postgresLogo }, 
    ],

    /// possible sections to add in project details page:
    /// timeline for incomplete projects
    /// reflection for completed projects
    /// what I am learning from each project

    status: "in-development", //  "live" | "in-development" | "prototype" 
    category: "FBLA", // "Independent" | "School" | "Competition" | "Club(name)"
    showcaseType: "image-gallery",
    images: [
        // Store view , Order Flow & Pickup, Security & Access, Admin Panel 
      {
        src: "/FBLAMerchScreenshots/HomePageView.png",
        title: "Home Page",
        description: "A responsive landing page showcasing featured products and categories.",
        category: "Store view",
      },
      {
        src: "/FBLAMerchScreenshots/ProductsPageView.png",
        title: "Products Page",
        description: "A grid layout showcasing all available products with filtering and sorting options.",
        category: "Store view",
        },
      {
      src: "/FBLAMerchScreenshots/ProductView.png",
      title: "Product View",
      description: "Variants for size/color with live inventory displayed for the user to ensure a smooth shopping experience.",
      category: "Store view",
      },

      {
      src: "/FBLAMerchScreenshots/HomePageMobileView.png",
      title: "Mobile Home Page",
      description: "Showcasing the responsive design of the home page on mobile devices. Hint: If you have this open on a computer it may look squished :) Try Inscpecting the page to see it on a mobile view!",
      category: "Store view",
      },

      // admin Panel 
      {
      src: "/FBLAMerchScreenshots/AdminPageView.png",
      title: "Admin Panel",
      description: "Made a dedicated interface for admins to manage products & inventory, orders, users, and other store configurations.",
      category: "Admin Panel",
      },

      {
      src: "/FBLAMerchScreenshots/ProductManagementView.png",
      title: "Product Management",
      description: "Made a working product management page where admins can view and manage product listings or add new ones along with integrating product images uploades to a supabase storage CDN for fast delivery and scalability.",
      category: "Admin Panel",
      },

      {
      src: "/FBLAMerchScreenshots/ProductEditView.png",
      title: "Product Editing",
      description: "Added a product editing interface to manage a product's variants such as sizes, colors etc. by adding new options or modifying existing ones or editing product details like descriptions and pricing.",
      category: "Admin Panel",
      },

      // Security & Access

      {
      src: "/FBLAMerchScreenshots/AdminRolesPageView.png",
      title: "Admin Roles Page",
      description: "Implemented role-based access control for admin users, allowing for different permission levels and a more secure management interface.",
      category: "Security & Access",
      },

      {
      src: "/FBLAMerchScreenshots/SecurityAuditPageSummury.png",
      title: "Security Audit Page",
      description: "Developed a backend security audit system and a frontend dashboard to monitor and review potential security issues and vulnerabilities within the web application to every change is recorded and website data protected.",
      category: "Security & Access",
      },

      {
      src: "/FBLAMerchScreenshots/LoginPageView.png",
      title: "Login Page",
      description: "Implemented secure authentication flows using Django Authentication System to ensure only authorized users can access their accounts and make purchases. addition: Authentication flows may be switched to Supabase Auth in the future for better scalability and ease of use.",
      category: "Security & Access",
      },

      {
      src: "/FBLAMerchScreenshots/SignupPageView.png",
      title: "Signup Page",
      description: "Designed a user friendly signup page to welcome new users quickly while ensuring data validation and security best practices are followed.",
      category: "Security & Access",
      },

    ],
   
    githubUrl: "https://github.com/anas-bousrih/fbla-merch-web-app.git",
    overview:
      "Developing a full-stack merch webapp for the FBLA Academy to manage a student made apparel business, with inventory tracking, dynamic variants, and admin friendly flows. Connected a Django API to handle orders and fulfillment while keeping the UI and responsive clean for students and staff.",
    features: [
      "Products support sizes, colors, academies, and customizations using a structured variant model with SKU's for dynamic management.",
      "A strong admin panel to manage products, inventory, orders, and user roles with ease.",
      "Simple product pages and variants that don’t overwhelm the user.",
      "A secure and scalable architecture with a CDN for assets, Supabase for the database, and Django for the API.",
      "Responsive design for mobile and desktop users.",
    ],
    learning: [
      "Building business workflows end-to-end",
      "Coordinating with other student leaders to gather the project requirements and the bussiness needs.",
      "Building a responsive design and a fast UI that would work on any device.",
      "Learning that following best practices could take more time but would pay off in the long run with a more maintainable and scalable codebase.",
      "Learning that with my software development skills I can help student lead initiatives and build useful tools for my school community that would last to other students even after my graduation.",

    ],
    progress: 80,
    role: "Developer and Administrator",
    notes: "Still Coordinating with the school for the payment processor and extending the current product model to custom products before the initial launch.",
    tags: ["commerce", "school", "full-stack", "API Architecture", "admin panel" , "role-based access control" , "inventory management" , "responsive design" ,],

    timeline: [
      // timeline status: "completed" | "in-progress" | "planned"
      { label: "Integrate supabase Auth ", date: "2025-12", status: "in-progress" },
      { label: "Integrate email&notifications automation with an email service provider", date: "2025-12", status: "in-progress" },
      { label: "Finish the ordering model with a district approved payment processor", date: "2025-12", status: "in-progress" },
      { label: "Develop the analytics dashboard with integrated machine learning for predictions", date: "2025-12", status: "planned" },
      { label: "Integrate more bussiness tools and automations", date: "2026-01", status: "planned" },

    ]
  },

  //----------------------------------------------------------------------------


  {
    id: 2,
    slug: "BlindBids",
    title: "Blind Bids",
    shortDescription: "A muitliplayer web based auction game, where players bid on items with hidden values.",
    year: "2024",
    stack: [
      { name: "React", icon: reactlogo },
      { name: "Flask", icon: flasklogo },
      { name: "Vite", icon: viteLogo },
    ],
    status: "live", //  "live" | "in-development" | "prototype" 
    category: "Independent", // "Independent" | "School" | "Competition" |
    showcaseType: "link-only",
    liveUrl: "https://blindbid-game.vercel.app/",
    githubUrl: "https://github.com/anas-bousrih/BlindBids.git",
    overview:
      "Built a real-time multiplayer web-based auction game where players bid on items with hidden values, aiming to accumulate the highest total worth. This was started as a classroom assignment and then turned to a game I've enjoyed playing with my freinds from here and there which had also got my teachers praise stating that it was a good classroom reasource. An open AI model was also integrated to generate items with a user prompt to ease the game setup. This webapp was developed with React for the front end and Flask for the backend with simple technologies and and just an API I was able to create a fun experince without over engineering the project.",
    features: [
      "responsive multiplayer bidding interface",
      "Real-time fast updates with optimized low interval API endpoint to keep the cost low and the game fast.",
      "Lightweight webapp that's capable of handling a full classroom of players smoothly.",
      "An AI integration for creating creative items with just a prompt."
    ],
    learning: [
      "Turning a simple idea into a a full webapp tought me a lot about project planning and how simple ideas dont always mean simple execution.",
      "I intentionally build the game entirely in memory (no database or saved JSON files). This helped me focus better understand and develop a fast and optimized API for real-time data flow which helped me focus on the core game mechanics that envolved : \n1. room creation \n2. player joins/leaves \n3. bid submissions \n4. Item rotation \n5. score updates",
      "Balancing fun visuals with accessibility",
    ],
    role: "Solo Developer",
    tags: ["realtime", "API Architecture", "classroom" , "Web-Based Game" , "AI Integration"],

  },

    //----------------------------------------------------------------------------

  {
    id: 3,
    slug: "portfolio-refresh",
    title: "TSA Webmaster competition project",
    shortDescription: "A vegan restaurant experience featuring a reservation ssytem and a responsive design. ",
    year: "2025",
    stack: [
      { name: "javascript", icon: javascriptLogo },
      { name: "html", icon: htmlLogo },
      { name: "css", icon: cssLogo },
      { name: "Flask", icon: flasklogo },
    ],
    status: "live", //  "live" | "in-development" | "prototype" 
    category: "TSA", // "Independent" | "School" | "Competition" |
    showcaseType: "mixed",
    images: [codingPov],
    githubUrl: "https://github.com/anas-bousrih/School-webproject.git",
    designEmbedUrl:
      "https://embed.figma.com/design/LyjvIcrvOKdFpJSDP6mM6v/Untitled?node-id=0-1&embed-host=share",
    liveUrl:"https://verdant-vegan-restaurant-h42h.onrender.com",
    overview:
      "Lead a 3 member team to develop a fully responsive vegan restaurant experience site for the TSA 2025 webmaster competition. Mentored some of the team members in technical areas and coordinated a structured deadline plan and designed the full website using Figma. ",
    features: [
      "Responsive design across all devicess.",
      "a muilty step reservation system. ",
      "A role-based access control. ",
      "An admin panel and a reservation staff view. "
    ],
    learning: [
      "Learned the fundamentals of backend systems using Flask, including routing, templates, and request handling.",
      "Used SQLAlchemy as an ORM to understand data models, relationships, and structured database queries.",
      "Led a 3 member team, coordinating work, providing guidance, and ensuring design consistency.",
    ],
    reflection: [
      "My TSA Webmaster project was one of the first websites I ever built, and finishing it was the first time I felt real pride in a completed project. Looking back, I could rebuild it today at a much higher level, but that’s exactly why it matters to me. It marks the starting point of my journey the version of me who pushed through every struggle and kept learning. It may not reflect my current skill level, but it reflects how far I’ve grown."
    ],
    role: "Designer/Developer",
    notes: "Naviagte to the Overview page for more project detials and use 'admin@example.com' and 'admin123' to login and view the staff reservation view under '/reservations' and the admin panel under '/admin' ",
    tags: ["TSA webmaster", "ui", "admin panel" , "role-based access" , "lightweight and simple "],
  },
];
