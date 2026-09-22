export const personal = {
  name: "Ishan Vaibhav Bhoir",
  nameShort: "Ishan Bhoir",
  email: "ishan.bhoir1@gmail.com",
  phone: "+1 (619) 723-0983",
  location: "San Francisco, CA",
  linkedin: "https://linkedin.com/in/ishanbhoir",
  github: "https://github.com/ishanbhoir7796",
  roles: [
    "Software Engineer",
    "Backend Systems Engineer",
    "Distributed Systems Engineer",
    "Cloud Infrastructure Engineer",
  ],
  bio: "Software Engineer with 2 years of production experience at TIAA, a US Fortune 500 financial services firm, building distributed backend services in Java 17 and Spring Boot processing 1M+ monthly transactions. M.S. in Computer Science from San Diego State University. Strong in REST APIs, distributed systems, microservices, MongoDB, SQL, OpenShift, Docker, Kubernetes and CI/CD.",
};

export const skills = [
  {
    category: "Languages",
    items: ["Java 17", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Backend",
    items: [
      "Spring Boot 3.x",
      "Spring Security",
      "REST APIs",
      "Microservices",
      "Distributed Systems",
      "Kafka",
      "Redis",
      "JWT",
      "Maven",
      "Gradle",
    ],
  },
  {
    category: "Frontend",
    items: ["React", "Angular", "HTML", "CSS"],
  },
  {
    category: "Databases",
    items: [
      "MongoDB",
      "MySQL",
      "Indexing",
      "Aggregation Pipelines",
      "Query Optimization",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS (EC2, S3)",
      "Docker",
      "Kubernetes (OpenShift)",
      "Jenkins",
      "Git",
      "GitHub",
      "CI/CD",
    ],
  },
  {
    category: "Testing & Quality",
    items: [
      "JUnit 5",
      "Mockito",
      "SonarQube",
      "Cucumber",
      "TDD",
      "BDD",
      "Unit & Integration Testing",
      "Code Review",
    ],
  },
  {
    category: "Tools",
    items: [
      "Postman",
      "Swagger/OpenAPI",
      "Splunk",
      "Grafana",
      "Jira",
      "Claude API",
    ],
  },
  {
    category: "Methodologies",
    items: ["Agile", "Scrum"],
  },
];

export const experience = [
  {
    title: "Software Engineer",
    company: "TIAA Global Capabilities",
    location: "Pune, India",
    period: "July 2023 - July 2024",
    tech: ["Java 17", "Spring Boot", "Microservices", "MongoDB", "REST APIs", "OpenShift", "Angular", "TypeScript", "Tableau", "SQL"],
    bullets: [
      "Built and shipped Java 17 and Spring Boot microservices powering contribution, compensation, retirement and benefits processing for a Fortune 500 retirement platform, handling 1M+ monthly records across 15+ services on OpenShift.",
      "Cut a nightly data processing job's runtime from 2 hours to 10 minutes through query tuning, MongoDB indexing and aggregation-pipeline optimization.",
      "Designed and developed 20+ production REST API endpoints, improving request processing by 15% and integrating several with Angular, JavaScript and TypeScript front ends.",
      "Led migration of millions of payroll and retirement records from legacy systems and Tableau sources into MongoDB, resolving SQL-to-NoSQL schema mismatches to preserve accuracy at scale.",
      "Delivered client-specific APIs and a dedicated data environment for Harvard University's onboarding, coordinating across 10+ cross-functional teams on one of the firm's largest client launches.",
      "Mentored an incoming engineer for a full year across onboarding, system walkthroughs, knowledge transfer and code reviews.",
    ],
  },
  {
    title: "Software Engineer Trainee",
    company: "TIAA Global Capabilities",
    location: "Pune, India",
    period: "July 2022 - July 2023",
    tech: ["Java", "Spring Boot", "JUnit 5", "Mockito", "SonarQube", "Cucumber", "Jenkins", "Splunk", "Grafana"],
    bullets: [
      "Raised automated test coverage above 90% across multiple services with JUnit 5, Mockito and SonarQube, cutting regressions and raising release confidence.",
      "Owned production monitoring and incident response across distributed services, using Splunk log analysis and Grafana dashboards to triage live incidents and resolve critical defects before they reached customers.",
      "Accelerated CI feedback by optimizing Cucumber BDD suites in Jenkins pipelines, cutting test execution time on every build.",
      "Debugged breaking changes across service boundaries, escalating and resolving defects that surfaced in downstream integrations.",
    ],
  },
];

export const projects = [
  {
    featured: true,
    title: "PRISM",
    subtitle: "Pull Request Intelligence & Smart Review Monitor",
    year: "2026",
    description:
      "AI-powered code review automation that captures GitHub PR webhooks, extracts diffs, and posts structured Claude API reviews directly as GitHub comments within seconds of a PR being opened.",
    tech: ["Java 21", "Spring Boot", "React", "Claude API", "GitHub Webhooks", "MongoDB", "Docker"],
    bullets: [
      "Built an AI-powered code review tool that captures GitHub PR webhooks, extracts diffs and posts structured Claude API reviews as GitHub comments within seconds of a PR being opened.",
      "Engineered a Spring Boot backend with webhook handling, prompt engineering and MongoDB persistence for quality scores, complexity analysis and security flags.",
      "Secured the API with Spring Security and containerized the stack with Docker Compose; tested webhook and AI response handling with JUnit 5 and Mockito.",
    ],
    github: "https://github.com/ishanbhoir7796/prism",
    live: null,
  },
  {
    featured: false,
    title: "PayrollCore",
    subtitle: "Enterprise Payroll Management System",
    year: "2025",
    description:
      "Three independent microservices for Auth, Employee, and Payroll with JWT-based RBAC, configurable tax engine, and comprehensive test coverage.",
    tech: ["Java 21", "Spring Boot", "MongoDB", "Spring Security", "JWT", "JUnit 5", "Swagger/OpenAPI"],
    bullets: [
      "Engineered 3 independent microservices with separate MongoDB databases and inter-service REST communication, achieving 90%+ unit test coverage across success, failure and edge cases.",
      "Implemented Spring Security with JWT authentication and role-based access control for admin, HR, finance and employee roles across all services.",
      "Designed a payroll engine with configurable tax, provident fund and health insurance deductions for monthly payslips.",
    ],
    github: "https://github.com/ishanbhoir7796/payrollcore",
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
    institution: "Pimpri Chinchwad College of Engineering (SPPU)",
    location: "Pune, India",
    period: "Aug 2018 - May 2022",
    note: null,
    gpa: "3.90 / 4.0",
    coursework: ["Data Structures & Algorithms", "Database Management Systems", "Computer Networks", "Operating Systems", "Cloud Computing", "Machine Learning", "Artificial Intelligence", "Software Engineering", "Theory of Computation", "Cyber Security", "Embedded Systems & IoT"],
  },
];
