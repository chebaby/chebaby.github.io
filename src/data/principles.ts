export interface Principle {
  title: string;
  description: string;
}

export const principles: Principle[] = [
  {
    title: 'Conventions over cleverness',
    description:
      'I follow established framework and industry conventions where they fit, so a new developer can find their way around quickly.',
  },
  {
    title: 'Built to be maintained',
    description:
      'Clear structure and naming, with software a team can understand, change and extend after I have moved on.',
  },
  {
    title: 'Business logic, modelled properly',
    description: 'Complex workflows deserve explicit, readable code. I model the real process before reaching for tools.',
  },
  {
    title: 'Security from the start',
    description: 'Access control, input handling and dependencies are design decisions, not a final checklist.',
  },
  {
    title: 'Ready for production',
    description: 'Deployment, queues, workers and maintenance are part of the job, not an afterthought.',
  },
  {
    title: 'Pragmatic about technology',
    description:
      'I weigh trade-offs and technical debt before choosing tools, and that includes AI: I will say plainly when a simpler approach is the better one.',
  },
];
