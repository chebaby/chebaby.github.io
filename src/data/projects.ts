export interface Project {
  /** Used to find the artwork: src/assets/projects/<slug>-concept.<ext> */
  slug: string;
  name: string;
  category: string;
  /** What the product is. */
  summary: string;
  /** My involvement, shown on the card under "My contribution". */
  contribution: string;
  technologies: string[];
  /** Context a reader needs: privacy, confidentiality or unfinished status. */
  note?: string;
  link?: {
    href: string;
    label: string;
  };
}

// Every project carries the same fields and the card renders them in the same order.
// technologies = only those tied to my own engineering work, not everything present in a repository.
// Do not add leadership titles, team sizes, outcomes or other claims the repositories do not support.
export const projects: Project[] = [
  {
    slug: 'tradix',
    name: 'Tradix',
    category: 'Location-based scavenger hunt platform',
    summary:
      'A location-based scavenger hunt platform where players take timed hunts, alone or in groups, completing missions through questions, QR codes or augmented reality to earn points and rewards.',
    contribution:
      'Involved in the platform’s architecture and development from its initial foundations, building its core application functionality across gameplay, administration, integrations and production infrastructure.',
    technologies: ['Laravel 13', 'React 19', 'TypeScript', 'Inertia.js', 'MariaDB', 'Docker Compose', 'Laravel Reverb'],
    note: 'Covers the Laravel web application. The product’s separate mobile and design repositories are not covered here.',
  },
  {
    slug: 'doctori',
    name: 'Doctori',
    category: 'Healthcare platform',
    summary:
      'A healthcare platform connecting patients and practitioners through discovery, appointments, consultations and specialized healthcare workflows.',
    contribution:
      'Involved in the platform’s architecture and development from its initial foundations through its ongoing evolution, contributing to core application modules, domain modelling, business workflows and integrations.',
    technologies: ['Laravel 8', 'PHP 7.4 / 8.x', 'Blade', 'JavaScript', 'MySQL', 'PHPUnit'],
    note: 'Doctori handles sensitive healthcare data, so no patient information, clinical records or application screenshots are shown, and the artwork is conceptual.',
  },
  {
    slug: 'abrid',
    name: 'ABRID',
    category: 'Business platform',
    summary:
      'A multilingual business platform where project holders, partner organizations and administrators manage projects, programs and submissions.',
    contribution:
      'Contributed to the platform from its initial development phase, establishing its application architecture, domain models and core business workflows, with continued involvement in infrastructure and maintenance.',
    technologies: ['Laravel 11', 'PHP 8.2+', 'MySQL', 'Redis', 'Laravel Horizon', 'Docker Compose', 'Pest'],
    note: 'The repository is private and the project is government-funded, so no source code, screens or internal data are shown, and the artwork is conceptual.',
  },
  {
    slug: 'showroom',
    name: 'Agadir Medina Showroom',
    category: 'Digital showroom / Early-stage project',
    summary:
      'An early-stage concept for a digital showroom presenting Agadir’s artisanal products through multilingual content.',
    contribution:
      'Worked on the initial application development, establishing its Laravel foundation and designing the data model for artisans and localized content.',
    technologies: ['PHP', 'Laravel 8', 'MySQL', 'Eloquent ORM', 'Blade', 'Laravel Mix'],
    note: 'Status: early-stage and unfinished. There is no live showroom, and the link goes to the public source repository.'
  },
  {
    slug: 'fundbid',
    name: 'Fundbid',
    category: 'Real-estate financing platform',
    summary:
      'A French-language real-estate financing platform connecting borrowers and lenders through financing applications and offers.',
    contribution:
      'Contributed to the platform’s development across business workflows, data consistency, document generation and search, helping evolve its application functionality over time.',
    technologies: ['PHP', 'Laravel 5.6', 'MySQL', 'Eloquent ORM', 'Blade', 'JavaScript', 'Laravel DomPDF'],
    note: 'Fundbid is a financing platform, not a bank or a lender. The repository is private, so no borrower data, documents or application screenshots are shown.',
  },
];
