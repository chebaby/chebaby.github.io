export interface Project {
  /** Used for the dialog id and to find artwork: src/assets/projects/<slug>-concept.webp */
  slug: string;
  name: string;
  category: string;
  /** One or two sentences for the landing page card. */
  summary: string;
  /** Very short statement of my part, shown on the card. */
  role: string;
  /** Longer role description, shown in the detail dialog. */
  roleDetail: string;
  /** Paragraphs of extra context for the dialog. */
  context?: string[];
  /** Specific contributions, listed only where they are evidenced. */
  contributions: string[];
  technologies: string[];
  /** Publication or attribution caveat, shown prominently in the dialog. */
  note?: string;
  link?: { href: string; label: string };
}

// Cards carry the same fields for every project. Only the dialog may differ in depth, depending on the evidence available.
// Each entry reads as a short case study: summary = what it is, roleDetail + context = my part versus the wider codebase,
// contributions = at most four highlights, technologies = only those tied to my own work.
export const projects: Project[] = [
  {
    slug: 'tradix',
    name: 'Tradix',
    category: 'Mobile scavenger hunt game / Backend engineering',
    summary:
      'An interactive scavenger hunt game built around real-world exploration. Players take timed hunts, alone or in groups, completing missions based on questions, QR codes or augmented reality, and earn points and rewards. I worked on its backend, admin tools and deployment.',
    role: 'Full-stack Engineer — Backend & Deployment',
    roleDetail:
      'Full-stack engineer on the Tradix Laravel application, focused on backend engineering and on getting the application ready to run in production.',
    context: [
      'The platform itself handles timed play sessions, group play with leaderboards, a points system and protection against duplicate mission rewards. That design belongs to the codebase as a whole; my own contributions are the ones listed below.',
    ],
    contributions: [
      'Production deployment setup: a containerized stack that runs the web application, background jobs, scheduled tasks, real-time messaging and the database as separate services, so each can be managed on its own. This describes the configuration, not how a live deployment performed.',
      'Mission-location administration: reworked the admin controls for a mission’s location with coordinate checking, radius presets and clearer errors that keep the admin’s input for correction, backed by frontend tests for edge cases and accessibility.',
      'Deployment script: production environment configuration and a script improved for error handling and the order of its commands.',
      'Seeding reliability: fixed a seeding failure reported in production by correcting how the admin and user factories generate fake data.',
    ],
    technologies: [
      'Laravel 13',
      'React 19',
      'Docker Compose',
      'Laravel Reverb',
      'TypeScript',
      'Inertia.js',
      'Nginx',
      'MariaDB',
      'Vitest',
    ],
    note: 'This describes the Laravel web application in the repository (React, TypeScript and Inertia), not a native mobile app.',
  },
  {
    slug: 'doctori',
    name: 'Doctori',
    category: 'Healthcare / Practitioner platform',
    summary:
      'A healthcare platform connecting patients with practitioners for discovery, booking and consultations. I implemented its ophthalmology module: specialized clinical records, practitioner-level access control and automated follow-up reminders for ophthalmologists.',
    role: 'Full-stack Engineer — Healthcare Domain',
    roleDetail:
      'Full-stack engineer on an existing, multi-contributor Laravel platform, contributing to its ongoing development and maintenance. The ophthalmology module is the work I can attribute most directly to myself; I also made a smaller correction to the prescription PDF.',
    context: [
      'The wider platform lets patients find practitioners and book appointments or remote consultations, and gives practitioners tools for patients, consultations, prescriptions, documents and invoices. The ophthalmology module extends that practitioner application with eye-care records such as vision exams, eye pressure readings and eyeglass or contact-lens prescriptions. It reuses the platform’s existing patients, practitioners and login instead of becoming a separate application.',
    ],
    contributions: [
      'Specialized data model: designed how ophthalmology records attach to a consultation and to the platform’s existing patients and practitioners, so nothing in the core system is duplicated.',
      'Access control: a patient can be linked to several practitioners, so a patient ID alone must not unlock their eye-care records. Access is limited to ophthalmologists and to the practitioner who owns each record, with tests for both cases. This is application-level access control, not a security audit.',
      'Automated follow-ups: a daily scheduled job creates reminders for prescription renewals and annual checkups, and saving a high eye-pressure reading or a cataract or LASIK procedure creates a follow-up reminder. These are workflow reminders, not medical advice.',
      'Clinical interface: built the consultation screens, including an interactive eye diagram and a pressure chart, and removed the patient’s age from the prescription PDF.',
    ],
    technologies: [
      'Laravel 8',
      'PHP 7.4 / 8.x',
      'Blade',
      'JavaScript',
      'MySQL',
      'PHPUnit',
      'Spatie Media Library',
      'Laravel Snappy',
    ],
    note: 'Doctori handles sensitive healthcare data, so this entry shows no patient information, clinical records or application screenshots, and the artwork is conceptual.',
  },
  {
    slug: 'abrid',
    name: 'ABRID',
    category: 'Business platform / Backend architecture / Infrastructure',
    summary:
      'A multilingual platform where project holders, partner organizations and administrators manage projects, program participation and submissions. I was the primary developer in its initial phase and set the application’s architecture, later supporting its infrastructure and maintenance.',
    role: 'Primary developer, initial phase',
    roleDetail:
      'Primary application developer during the initial phase. I made the initial architecture decisions, deliberately following established Laravel conventions so the application stays easy to understand and easy for newcomers to join, and I later supported the project through infrastructure and maintenance. Another contributor also worked on the application.',
    context: [
      'The application was built by more than one developer. The highlights below are the parts I can attribute to my own work.',
    ],
    contributions: [
      'Program and project matching: a weighted ranking that matches projects to programs using eligibility criteria.',
      'Workflow logic: selection of a project holder’s lead active project, workflow middleware, and event-driven notifications with activity recording.',
      'Architecture and modelling: set the initial structure and modelled how projects, programs and their support relate, following Laravel conventions, with feature tests for partner authentication.',
      'Infrastructure and maintenance: Docker build and Compose changes, container healthcheck corrections, and hands-on server maintenance, application installations and environment configuration. Measured results are not covered here.',
    ],
    technologies: [
      'Laravel 11',
      'PHP 8.2+',
      'Docker Compose',
      'Laravel Horizon',
      'MySQL',
      'Redis',
      'Nginx',
      'PHP-FPM',
      'Pest',
    ],
    note: 'The repository is private and the project is government-funded, so this is a sanitized summary: no source code, screens or internal data are shown, and the artwork is conceptual.',
  },
  {
    slug: 'showroom',
    name: 'Agadir Medina Showroom',
    category: 'Early-stage Laravel project / Data modelling',
    summary:
      'An early-stage Laravel project exploring a digital showcase for Agadir’s artisanal products. I set up the application and designed the data model for artisan profiles and localized biographies. The showroom itself is unfinished.',
    role: 'Software Engineer — Backend Development',
    roleDetail:
      'I set up the initial Laravel application and designed its artisan and localized-biography schema. This is early work from two commits, and there is no functioning public showroom.',
    context: [
      'The repository describes an online showroom for artisanal products in several languages, but what is checked in is unfinished: the homepage is still Laravel’s default page, with no gallery, product browsing, e-commerce or working language switching.',
    ],
    contributions: [
      'Initial application setup: a conventionally structured Laravel project as the base for the showcase.',
      'Artisan data model: profiles with shared identity details, such as name, unique email and an active flag, kept apart from language-specific content.',
      'Localized biographies: a separate biography per language for each artisan, with the database preventing duplicates and removing translations together with their artisan. The models are basic and no translation retrieval exists yet.',
    ],
    technologies: ['PHP', 'Laravel 8', 'MySQL', 'Eloquent ORM', 'Blade', 'Laravel Mix'],
    note: 'Status: early-stage, work in progress. The checked-in application is unfinished, and this entry links to the public source repository rather than to a live showroom.',
    link: { href: 'https://github.com/chebaby/showroom', label: 'View the source on GitHub' },
  },
  {
    slug: 'fundbid',
    name: 'Fundbid',
    category: 'Financial / Real-estate platform',
    summary:
      'A French-language real-estate financing platform connecting borrowers with lenders. Borrowers submit financing requests for a purchase, construction or loan redemption, and lenders respond with offers. I contributed backend and full-stack features within a multi-developer team.',
    role: 'Software Engineer — Backend & Full-Stack',
    roleDetail:
      'Backend and full-stack developer in a multi-contributor Laravel codebase. I did not build or own the whole platform; this describes the specific work I can attribute to myself.',
    context: [
      'Borrowers and co-borrowers provide financial details and documents, lenders review eligible requests and submit offers, and an accepted application is transferred to an agent. Fundbid supports applications and offers; it is not a bank or a lender. The platform as a whole was built by a team.',
    ],
    contributions: [
      'Demand lifecycle automation: a scheduled command that automatically closes financing requests older than a configurable period. Its production schedule is not covered here.',
      'City search: replaced loading a full city list into each of the three request forms with search-as-you-type, coordinating the form, a search endpoint and a database index. No benchmark was taken, so there is no speed claim.',
      'Transfer document: made the PDF in the accepted-application transfer more accurate and complete, covering borrower and co-borrower details, living arrangements, income and profession information, and financing summary labels and dates.',
      'Data consistency: fixed co-borrower reuse so submitted details update the existing record, and prevented duplicate transfer notifications and an offer display bug.',
    ],
    technologies: ['PHP', 'Laravel 5.6', 'MySQL', 'Eloquent ORM', 'Blade', 'JavaScript', 'Laravel DomPDF'],
    note: 'Fundbid is a multi-developer codebase and a private repository. This entry describes only my own contributions, and no borrower data, documents or application screenshots are shown.',
  },
];
