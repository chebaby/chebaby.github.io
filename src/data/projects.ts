/** One area of engineering responsibility: a short lead-in label and the sentence that backs it. */
export interface ScopeItem {
  title: string;
  detail: string;
}

export interface Project {
  /** Used for the dialog id and to find artwork: src/assets/projects/<slug>-concept.webp */
  slug: string;
  name: string;
  category: string;
  /** What the product is: one or two sentences for the landing page card and the dialog lead. */
  summary: string;
  /** Level and nature of my responsibility, shown on the card. Differs per project on purpose. */
  role: string;
  /** What I owned versus what belongs to the wider codebase, shown first in the dialog. */
  ownership: string;
  /** The architectural and technical scope of my involvement, as a few areas rather than a task list. */
  engineeringScope: ScopeItem[];
  technologies: string[];
  /** Publication or attribution caveat, shown prominently in the dialog. */
  note?: string;
  link?: { href: string; label: string };
}

// Cards carry the same fields for every project. Each entry reads as a short case study:
// summary = what the product is, role = level and nature of responsibility, ownership = my responsibility versus the
// wider codebase, engineeringScope = the technical areas I worked in, technologies = only those tied to my own work.
// Do not add leadership titles, team sizes, outcomes or architecture claims that the repositories do not support,
// and do not give every project the same ownership label.
export const projects: Project[] = [
  {
    slug: 'tradix',
    name: 'Tradix',
    category: 'Location-based scavenger hunt platform / Full-stack application',
    summary:
      'A location-based scavenger hunt platform. Players take timed hunts, alone or in groups, completing missions through questions, QR codes or augmented reality, and earn points and rewards.',
    role: 'Primary developer — architecture and full-stack implementation',
    ownership:
      'I was the primary developer of the Tradix Laravel application, responsible for its architecture and implementation from the initial foundations through its core functionality. That is full-stack ownership across the Laravel backend and the React and Inertia interface: the gameplay workflows, administration, integrations and production infrastructure.',
    engineeringScope: [
      {
        title: 'Application architecture and domain design',
        detail:
          'established the application’s foundations and a service-oriented domain layer for play sessions, missions, groups, points, leaderboards, badges and coupons, with architectural decisions recorded in ADR and RFC documents in the repository.',
      },
      {
        title: 'Gameplay backend workflows',
        detail:
          'timed play sessions that expire through a dedicated command, group play with leaderboards, and mission completion and point awards handled in row-locked database transactions, with a database constraint against duplicate mission completion.',
      },
      {
        title: 'Administration',
        detail:
          'management tooling for hunts, missions, QR codes and access codes, including a Google Maps location picker with coordinate validation and radius presets, backed by Vitest tests.',
      },
      {
        title: 'Integrations and AR',
        detail:
          'server-side location and image-target validation for augmented-reality missions, and real-time messaging through Laravel Reverb.',
      },
      {
        title: 'Production infrastructure',
        detail:
          'a Docker Compose topology that runs the web application, queue worker, scheduler, Reverb and MariaDB as separate services, with production environment configuration and a scripted, ordered deployment sequence covering application build, migrations and cache rebuilding.',
      },
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
    note: 'This describes the Laravel web application (React, TypeScript and Inertia), not a native mobile app. The product’s separate UI/design and mobile repositories are not covered here.',
  },
  {
    slug: 'doctori',
    name: 'Doctori',
    category: 'Healthcare platform / Ophthalmology domain',
    summary:
      'A healthcare platform connecting patients and practitioners through discovery, appointments and consultations. I designed and implemented its ophthalmology domain.',
    role: 'Full-stack engineer — ophthalmology domain in an existing platform',
    ownership:
      'I contributed to an existing, multi-contributor Laravel platform; I did not architect or build the platform as a whole. Within it I designed and implemented the ophthalmology domain, integrating specialized clinical records, access control and follow-up workflows with the platform’s existing patients, practitioners, authentication, media attachment and PDF generation instead of building a separate system. I also made a smaller correction to the prescription PDF.',
    engineeringScope: [
      {
        title: 'Domain modelling',
        detail:
          'attached ophthalmology records, such as vision exams, eye pressure readings and eyeglass or contact-lens prescriptions, to consultations and to existing patient and practitioner entities, so nothing in the core system is duplicated.',
      },
      {
        title: 'Reuse of platform infrastructure',
        detail:
          'built on the platform’s existing media attachment (Spatie Media Library, for additional exam files) and PDF generation (Laravel Snappy, for eyeglass prescriptions) rather than introducing parallel mechanisms.',
      },
      {
        title: 'Access control',
        detail:
          'a patient can be linked to several practitioners, so eye-care records are restricted to ophthalmologists and to the practitioner who owns each record, covered by tests. This is application-level access control, not a security audit.',
      },
      {
        title: 'Follow-up workflows',
        detail:
          'scheduled and event-driven reminders for prescription renewals, annual checkups and records that call for follow-up, with the consultation screens to enter and review them. These are workflow reminders, not medical advice.',
      },
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
    category: 'Business platform / Application architecture',
    summary:
      'A multilingual business platform where project holders, partner organizations and administrators manage projects, programs and submissions.',
    role: 'Primary developer, initial phase — architecture and core workflows',
    ownership:
      'I was the primary developer during the application’s initial phase and established its architecture, deliberately following Laravel conventions so the codebase stays easy to understand and easy for newcomers to join. That covered the domain model and the core business workflows, and I later supported the project through infrastructure and maintenance. Another contributor also worked on the application.',
    engineeringScope: [
      {
        title: 'Application architecture and domain modelling',
        detail:
          'the initial structure and the relationships between projects, programs and their support, with feature tests for partner authentication.',
      },
      {
        title: 'Business workflows',
        detail:
          'weighted, eligibility-based matching of projects to programs, workflow middleware, and event-driven notifications with activity recording.',
      },
      {
        title: 'Infrastructure and maintenance',
        detail:
          'a Docker Compose environment with container healthchecks, plus hands-on server maintenance, installations and environment configuration. Measured results are not covered here.',
      },
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
      'An early-stage concept for a digital showroom presenting Agadir’s artisanal products through multilingual content. The showroom itself is unfinished.',
    role: 'Software engineer — application foundation and data model',
    ownership:
      'I established the Laravel application and designed the data model for artisans and localized content, in early work spanning two commits. This is foundation work only: it stops at the data layer, and there is no functioning public showroom, gallery, product browsing, e-commerce or language switching.',
    engineeringScope: [
      {
        title: 'Application foundation',
        detail: 'a conventionally structured Laravel project as the base for the showcase.',
      },
      {
        title: 'Data modelling',
        detail:
          'separated language-neutral artisan identity (name, unique email, active flag) from language-specific biographies, with database constraints that prevent duplicate translations and remove them together with their artisan. The models are basic and no translation retrieval exists yet.',
      },
    ],
    technologies: ['PHP', 'Laravel 8', 'MySQL', 'Eloquent ORM', 'Blade', 'Laravel Mix'],
    note: 'Status: early-stage, work in progress. The checked-in application is unfinished (the homepage is still Laravel’s default page), and this entry links to the public source repository rather than to a live showroom.',
    link: { href: 'https://github.com/chebaby/showroom', label: 'View the source on GitHub' },
  },
  {
    slug: 'fundbid',
    name: 'Fundbid',
    category: 'Real-estate financing platform / Business workflows',
    summary:
      'A French-language real-estate financing platform connecting borrowers and lenders through financing applications and offers. It supports applications and offers; it is not a bank or a lender.',
    role: 'Backend and full-stack engineer — within an existing team codebase',
    ownership:
      'I worked as a backend and full-stack engineer inside an existing, multi-developer Laravel codebase. I did not build or own the platform as a whole, and its initial architecture is not my work. My contribution was to its business workflows, data consistency, document generation and search.',
    engineeringScope: [
      {
        title: 'Request lifecycle and data consistency',
        detail:
          'automated lifecycle handling of financing requests, including a scheduled command that closes requests older than a configurable period, and fixes to co-borrower reuse and duplicate transfer notifications. The production schedule is not covered here.',
      },
      {
        title: 'Document generation',
        detail:
          'the PDF produced when an accepted application is transferred to an agent, covering borrower and co-borrower, income and financing details.',
      },
      {
        title: 'Search',
        detail:
          'replaced loading a full city list into each request form with search-as-you-type, coordinating the form, a search endpoint and a database index. No benchmark was taken, so there is no speed claim.',
      },
    ],
    technologies: ['PHP', 'Laravel 5.6', 'MySQL', 'Eloquent ORM', 'Blade', 'JavaScript', 'Laravel DomPDF'],
    note: 'Fundbid is a multi-developer codebase and a private repository. This entry describes only my own contributions, and no borrower data, documents or application screenshots are shown.',
  },
];
