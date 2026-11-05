/**
 * Site-wide settings. Change contact details here (or via environment variables) and nothing else needs touching.
 */
export const site = {
  name: 'Nour-Eddine Ech-Chebaby',
  jobTitle: 'Software Engineer',
  title: 'Nour-Eddine Ech-Chebaby | Software Engineer: Laravel, full-stack and application security',
  description:
    'Software engineer building web applications with a focus on reliability, maintainability and security: Laravel and PHP backends, React frontends, application security and deployment. Based in Morocco, working internationally.',

  /** Public contact address, shown on the page and used by the mailto fallback. */
  email: import.meta.env.PUBLIC_CONTACT_EMAIL || 'contact.chebaby@gmail.com',

  /**
   * Optional form backend: any service that accepts a multipart POST and answers with JSON (e.g. Formspree).
   * While empty, the contact form does NOT claim to send anything: it opens the visitor's email app instead.
   * Set PUBLIC_FORM_ENDPOINT at build time, or paste the URL here.
   */
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT || '',

  blog: '/blog/',
  social: [
    { label: 'GitHub', href: 'https://github.com/chebaby' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/chebaby' },
  ],
} as const;

export const enquiryTypes = [
  { value: 'project', label: 'Freelance or project work' },
  { value: 'employment', label: 'Employment opportunity' },
  { value: 'collaboration', label: 'Collaboration' },
  { value: 'security', label: 'Application security' },
  { value: 'other', label: 'Something else' },
] as const;
