interface Project {
  title: string;
  company: string;
  dateFrom: string;
  dateTo: string;
  url: string;
  description: string;
  technologies: string[];
}

export const workProjects: Project[] = [
  {
    title: "Head of Frontend Development",
    company: "Interventure - team New Win",
    dateFrom: "Aug 2022",
    dateTo: "Present",
    url: "https://www.interventure.info/",
    description:
      "Multi-tenant multi-product application for the healthcare industry in Switzerland. Leading a team of frontend developers. Aside from responsibilities from previous position, I am also responsible for the technical direction of the frontend development, code quality and mentoring junior developers.",
    technologies: ["Next.js", "React", "TypeScript", "Keycloak", "Kubernetes", "Docker", "Node.js", "Azure"],
  },
  {
    title: "Senior Frontend Engineer",
    company: "Interventure - team New Win",
    dateFrom: "Nov 2020",
    dateTo: "Aug 2022",
    url: "https://www.interventure.info/",
    description:
      "Multi-tenant multi-product application for the healthcare industry in Switzerland. Responsible for the frontend and backend architecture, code quality, testing, build configuration and deployment and partly in the role of the Scrum master for the project.",
    technologies: ["Next.js", "React", "Redux", "TypeScript", "Keycloak", "Docker", "Node.js"],
  },
  {
    title: "Senior Frontend Engineer",
    company: "Holycode - team Get Local",
    dateFrom: "Sep 2019",
    dateTo: "Nov 2020",
    url: "https://www.holycode.com/",
    description:
      "Rebuilt the company b2b application from scratch in React. Get Local is one of the most prominent Swiss startups in the hospitality industry. Responsible for the frontend architecture, code quality, testing.",
    technologies: ["React", "Redux", "TypeScript", "Docker"],
  },
  {
    title: "Frontend Engineer",
    company: "Futurice",
    dateFrom: "Dec 2018",
    dateTo: "Sep 2019",
    url: "https://www.futurice.com/",
    description: "Worked on two different project. Most focus was on the huge scale intranet project for one of the bigger German clients. I was a part of the team of more than 20 developers and designers.",
    technologies: ["React", "AngularJs", "TypeScript", "Node.js"],
  },
  {
    title: "Frontend CMS Engineer",
    company: "Wunder",
    dateFrom: "Dec 2017",
    dateTo: "Nov 2018",
    url: "https://wunder.io/",
    description: "Worked on Drupal CMS projects, including activity on the Drupal open source, contributing to different modules.",
    technologies: ["React", "Drupal CMS", "JavaScript", "PHP"],
  },
  {
    title: "Frontend Engineer - Intern",
    company: "MD Systems Zurich",
    dateFrom: "Sep 2016",
    dateTo: "Apr 2017",
    url: "https://www.md-systems.ch/en",
    description: "Worked on Drupal CMS projects, including activity on the Drupal open source, contributing to different modules.",
    technologies: ["React", "Drupal CMS", "JavaScript", "PHP"],
  },
  {
    title: "Frontend Engineer - Intern",
    company: "Pix4D",
    dateFrom: "Jul 2015",
    dateTo: "Jan 2016",
    url: "https://www.pix4d.com/",
    description: "Web frontend development with JavaScript and 3D modelling libraries. Working on the 3D web model viewer for the drone images.",
    technologies: ["JavaScript", "Three.js", "D3.js", "JQuery"],
  },
];

export const freelanceProjects: Project[] = [
  {
    title: "Fullstack Developer",
    company: "Olai",
    dateFrom: "Jun 2024",
    dateTo: "Present",
    url: "https://olai.com/",
    description:
      "Working on an AI project as a single developer. Responsible for the architecture, code quality, testing, and deployment.",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Gemini AI", "Google Cloud"],
  },
  {
    title: "Technical Lead",
    company: "TryHackMe",
    dateFrom: "Jun 2023",
    dateTo: "Oct 2023",
    url: "https://tryhackme.com/",
    description: "Lead a team of developers and designers working on a rebuild of the application in React. Responsible for the architecture, alignment with other teams, code quality, testing, and mentoring younger developers.",
    technologies: ["React", "Node.js", "TypeScript", "MongoDB"],
  },
  {
    title: "Senior Frontend Engineer",
    company: "Analytic Partners",
    dateFrom: "Dec 2022",
    dateTo: "Mar 2023",
    url: "https://analyticpartners.com/",
    description: "Built a huge scale React application for the client in the financial analytics.",
    technologies: ["React", "Redux", "Redux-Saga", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    title: "Senior Frontend Engineer",
    company: "Effortel",
    dateFrom: "Jun 2021",
    dateTo: "Apr 2022",
    url: "https://www.effortel.com/",
    description: "Built a platform for a huge mobile networks supplier in Sencha framework.",
    technologies: ["Sencha", "Javascript"],
  },
];

export const hobbyProjects: Project[] = [
  {
    title: "Mobile Trivia Game",
    company: "Personal Project",
    dateFrom: "Oct 2024",
    dateTo: "Present",
    url: "",
    description: "Developing mobile trivia game in Godot game engine. Backend is Node.js server with MongoDB hosted on DigitalOcean",
    technologies: ["Godot", "Node.js", "MongoDB"],
  },
  {
    title: "Ardeo World",
    company: "Personal Project",
    dateFrom: "Oct 2023",
    dateTo: "Mar 2024",
    url: "https://www.ardeo.world/",
    description:
      "Created a web application for a RPG Tabletop games with my personal content. Application was a test of using a Markdown in CMS environments, within Next.js.",
    technologies: ["Next.js", "React", "MDX"],
  },
  {
    title: "Event scheduling app",
    company: "Personal Project",
    dateFrom: "Mar 2023",
    dateTo: "Oct 2023",
    url: "",
    description: "Built a fullstack b2b and b2c application for a client. The goal of the app was to make it easier to book sport facilites with your friends.",
    technologies: ["Next.js", "Prisma", "Apollo Client", "GraphQL", "Node.js", "PostgreSQL"],
  },
];

export const conferences: Project[] = [
  {
    title: "Speaker",
    company: "City.JS, Athens",
    dateFrom: "Jun 6, 2024",
    dateTo: "Jun 8, 2024",
    url: "https://www.youtube.com/watch?v=HId_gRdXpwk&list=PLYDCh9vbt8_KhsMD7Z8EFS45NMaWyFfBc&index=5&ab_channel=CITYJSCONFERENCE",
    description: "Presented a talk on Next.js Scalability - 'Scaling Heights: Highly scalable architecture with Next.js.",
    technologies: ["Next.js", "Performance Optimization", "Scalability", "Security"],
  },
  {
    title: "Speaker",
    company: "Developer Days, Lisbon",
    dateFrom: "2018",
    dateTo: "2018",
    url: "",
    description:
      "Presented a talk on Drupal CMS - 'Future of Drupal in numbers'",
    technologies: ["Open Source", "CMS", "Drupal"],
  },
  {
    title: "Speaker",
    company: "Developer Days, Seville",
    dateFrom: "2017",
    dateTo: "2017",
    url: "",
    description: "Presented a talk on Drupal CMS - 'What factors do influence someone not to choose Drupal?'",
    technologies: ["Open Source", "CMS", "Drupal"],
  },
  {
    title: "Speaker",
    company: "Drupal Mountain Camp, Davos",
    dateFrom: "2017",
    dateTo: "2017",
    url: "",
    description: "Presented a talk on Drupal CMS",
    technologies: ["Open Source", "CMS", "Drupal"],
  },
];
