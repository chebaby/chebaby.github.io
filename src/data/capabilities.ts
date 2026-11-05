export type Maturity = 'core' | 'focus' | 'hands-on' | 'exploring';

export interface Capability {
  title: string;
  /** How established this area is in my work. Shown as a label so the page does not oversell. */
  maturity: Maturity;
  maturityLabel: string;
  description: string;
}

export const capabilities: Capability[] = [
  {
    title: 'Backend & Full-Stack Engineering',
    maturity: 'core',
    maturityLabel: 'Core strength',
    description:
      'Laravel and PHP applications with React interfaces: business logic, integrations, APIs and an architecture the next developer can follow.',
  },
  {
    title: 'Application Modernization',
    maturity: 'core',
    maturityLabel: 'Core strength',
    description:
      'Improving applications that already exist: refactoring legacy functionality, updating dependencies and frameworks, and making the code easier to maintain.',
  },
  {
    title: 'Application Security',
    maturity: 'focus',
    maturityLabel: 'Focus area',
    description:
      'Security as part of application engineering: access control, input handling, dependency management and hardening, plus review of application-level risks. This is engineering work, not a formal audit or certification.',
  },
  {
    title: 'Deployment & Infrastructure',
    maturity: 'hands-on',
    maturityLabel: 'Hands-on',
    description:
      'Getting applications into production and keeping them there: server configuration, Docker-based environments, queues, background workers and operational maintenance.',
  },
  {
    title: 'Pragmatic AI Integration',
    maturity: 'exploring',
    maturityLabel: 'Exploring',
    description:
      'Assessing where AI genuinely improves a product or workflow, and exploring suitable integrations. It is an area I am actively learning, not a long commercial track record.',
  },
];
