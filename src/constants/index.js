import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React  Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  
  {
    name: "MongoDB",
    icon: mongodb,
  },
  
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Java Backend Developer Intern",
    company_name: "HULK HIRE",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Dec 2024 - Feb 2025",
    points: [
      "Integrated PayPal payment service into backend systems using Spring Boot, enabling secure and reliable transaction flows.",
      "Built and tested RESTful APIs with JUnit and Mockito, ensuring high code coverage and reliability.",
      "Utilized MySQL for persistent data storage and Redis for efficient session and cache management.",
      "Containerized the application with Docker and deployed it to AWS, improving scalability and deployment automation.",
      "Followed modular, maintainable coding practices and contributed to production-ready features in a real-world codebase.",
    ],
  },
  {
    title: "Java Backend Developer",
    company_name: "Jarurat Care",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Feb 2025 - july2 025",
    points: [

      " Integrated WhatsApp Business API using Spring Boot to handle webhook messages and send automated replies.",

" Developed DTO–Entity–Mapper architecture for clean request-response handling and Firebase persistence.",

"Implemented user onboarding system capturing user language preferences, intent, and profile using WhatsApp messages.",

"Used Firebase Firestore to persist and retrieve user data in real time.",

" Designed and deployed RESTful endpoints for webhook verification and message handling.",

" Built custom message handlers for multilingual responses and fallback flows.",

" Configured ngrok tunnels for local development and Meta Webhook verification.",

" Ensured clean architecture by separating concerns (Controller, Service, Mapper, DTO, Model).",

    ],
  },
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Smart Contact Manager",
    description:
      "I developed a Smart Contact Manager using Java and Spring Boot, where users can securely add, update, and delete contacts with details like email, LinkedIn, and profile images. I implemented authentication, image upload, search, and pagination, and followed clean architecture using DTOs, MVC, and MySQL for data storage",
    tags: [
      {
        name: "Spring boot",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/neeraj552/Smart-contact-manager-",
  },
  {
    name: "Library Mangement System",
    description:
      "I built a Library Management System using Java and Spring Boot that allows users to manage books, members, and issue/return records. I implemented features like book search, user registration, role-based access, and fine calculation. The system follows MVC architecture, uses MySQL for data persistence, and supports CRUD operations with proper validation and error handling.",
    tags: [
      {
        name: "Web Development",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "JS",
        color: "yellow-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/neeraj552/college-project",
  },
  {
    name: "Whats App ChatBot",
    description:
      "I developed a WhatsApp chatbot using Spring Boot and integrated it with the WhatsApp Business API. I implemented webhook handling, message parsing, and automated replies. The bot captures user preferences like language and intent, stores data in Firebase Firestore, and follows a modular architecture with DTOs and services for clean request-response handling.",
    tags: [
      {
        name: "Spring Boot",
        color: "blue-text-gradient",
      },
      {
        name: "FireBase",
        color: "green-text-gradient",
      },
      {
        name: "Rander",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/neeraj552/WhatsAppChatBot",
  },
];

export { services, technologies, experiences, testimonials, projects };