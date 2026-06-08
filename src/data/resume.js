export const personal = {
  name: "Ishan Vaibhav Bhoir",
  nameShort: "Ishan Bhoir",
  email: "ishan.bhoir1@gmail.com",
  phone: "+1 (619) 723-0983",
  location: "San Diego, CA",
  linkedin: "https://linkedin.com/in/ishanbhoir",
  github: "https://github.com/ishanbhoir7796",
  roles: [
    "Software Engineer",
    "Backend Systems Engineer",
    "Distributed Systems Engineer",
    "Cloud Infrastructure Engineer",
  ],
  bio: "Software Engineer with 2 years at TIAA, a Fortune 500 financial institution. Built distributed microservices handling real financial data at scale. Specialized in backend systems, REST APIs, and cloud infrastructure. Recently completed MS in Computer Science from SDSU.",
};

export const skills = [
  {
    category: "Languages",
    items: ["Java", "Python", "JavaScript", "SQL"],
  },
  {
    category: "Backend",
    items: [
      "Spring Boot 3.x",
      "Spring Security",
      "Spring MVC",
      "REST APIs",
      "Microservices",
      "Distributed Systems",
      "JWT",
      "Maven",
      "Gradle",
    ],
  },
  {
    category: "Testing & Quality",
    items: [
      "JUnit 5",
      "Mockito",
      "TDD",
      "BDD",
      "Integration Testing",
      "Code Review",
    ],
  },
  {
    category: "Databases",
    items: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Query Optimization",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS (EC2, S3)",
      "Docker",
      "Jenkins",
      "OpenShift",
      "Git",
      "CI/CD",
    ],
  },
  {
    category: "Tools",
    items: [
      "Postman",
      "Swagger/OpenAPI",
      "Splunk",
      "Jira",
      "Claude AI",
    ],
  },
];

export const experience = [
  {
    title: "Software Engineer",
    company: "TIAA Global Capabilities",
    location: "Pune, India",
    period: "July 2023 - July 2024",
    tech: ["Java", "Spring Boot", "Microservices", "MongoDB", "REST APIs", "Jenkins", "AWS", "Docker", "OpenShift"],
    bullets: [
      "Architected microservices handling 1M+ monthly transactions, improving scalability and reducing downtime by 20%.",
      "Delivered data migration pipelines transferring financial, payroll and retirement data from legacy systems into TIAA's cloud platforms, ensuring data accuracy across Tableau and MongoDB.",
      "Engineered 10+ RESTful APIs across distributed services, improving request processing by 15% and reducing latency through performance tuning.",
      "Participated in code reviews and design discussions, driving engineering best practices and mentoring an intern across onboarding, system walkthroughs and knowledge sharing.",
    ],
  },
  {
    title: "Software Engineer Trainee",
    company: "TIAA Global Capabilities",
    location: "Pune, India",
    period: "July 2022 - July 2023",
    tech: ["Java", "Spring Boot", "MongoDB", "REST APIs", "JUnit 5", "Mockito", "Splunk", "Jenkins", "Cucumber"],
    bullets: [
      "Diagnosed and resolved critical production defects using Splunk logs and deep debugging, reducing defect leakage and directly contributing to stakeholder discussions on system reliability.",
      "Maintained 90%+ automated test coverage using JUnit 5 and Mockito, reducing regressions and improving release confidence.",
      "Optimized Cucumber BDD test suites integrated into Jenkins CI pipelines, reducing test execution time and improving build feedback cycles.",
    ],
  },
];

export const projects = [
  {
    featured: true,
    title: "PRISM",
    subtitle: "Pull Request Intelligence & Smart Review Monitor",
    description:
      "AI-powered code review automation that captures GitHub PR webhooks, extracts diffs, and posts structured Claude AI reviews directly as GitHub comments within seconds of a PR being opened.",
    tech: ["Java 21", "Spring Boot", "Claude AI", "GitHub Webhooks", "React", "MongoDB", "Docker"],
    bullets: [
      "Built webhook handler with Claude AI integration posting structured reviews as GitHub comments in seconds.",
      "Engineered MongoDB persistence storing review history with quality scores, complexity analysis and security flags.",
      "Designed a React dashboard to filter, search and track AI review history across repositories.",
      "Containerized full stack with Docker Compose covering webhook processing and AI response handling.",
    ],
    github: "https://github.com/ishanbhoir7796",
    live: null,
  },
  {
    featured: false,
    title: "PayrollCore",
    subtitle: "Enterprise Payroll Management System",
    description:
      "Three independent microservices for Auth, Employee, and Payroll with JWT-based RBAC, configurable tax engine, and comprehensive test coverage.",
    tech: ["Java 21", "Spring Boot", "MongoDB", "JWT", "JUnit 5", "Swagger"],
    bullets: [
      "Engineered 3 independent microservices (Auth, Employee, Payroll) with separate MongoDB databases and inter-service REST communication.",
      "Implemented JWT-based authentication with RBAC supporting admin, HR, finance and employee roles.",
      "Designed payroll calculation engine with configurable tax slabs, provident fund and health insurance deductions.",
      "Built full Swagger/OpenAPI documentation and integration tests covering success, failure and edge case scenarios.",
    ],
    github: "https://github.com/ishanbhoir7796",
    live: null,
  },
];

export const education = [
  {
    degree: "M.S. in Computer Science",
    institution: "San Diego State University",
    location: "San Diego, CA",
    period: "Aug 2024 - May 2026",
    note: null,
    gpa: "3.66 / 4.0",
    coursework: ["Algorithm Analysis & Design", "Machine Learning", "Database Theory", "Distributed Systems", "Computer Security", "Data Mining", "Networks & Distributed Systems"],
  },
  {
    degree: "B.E. in Computer Science",
    institution: "Savitribai Phule Pune University",
    location: "Pune, India",
    period: "Aug 2018 - May 2022",
    note: null,
    gpa: "3.9 / 4.0",
    coursework: ["Data Structures & Algorithms", "Database Management Systems", "Computer Networks", "Operating Systems", "Cloud Computing", "Machine Learning", "Artificial Intelligence", "Software Engineering", "Theory of Computation", "Cyber Security", "Embedded Systems & IoT"],
  },
];
