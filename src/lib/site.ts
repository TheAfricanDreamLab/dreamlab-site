/**
 * Where sign-in, sign-up and organisation set-up live (dreamlab-web). Empty in production: the
 * site and the app share a hostname (the edge sends app paths to the web app), so links stay
 * relative and one build serves prod and staging. Local development sets it to the web app's URL.
 */
const APP_URL = (import.meta.env.PUBLIC_APP_URL ?? '').replace(/\/$/, '');

export const app = (path: string) => `${APP_URL}${path}`;

export const NAV = [
  { href: '/courses', label: 'Courses', app: true },
  { href: '/programme', label: 'Programme' },
  { href: '/organisations', label: 'For organisations' },
  { href: '/about', label: 'About' },
];

export const PILLARS = [
  { title: 'Learn', text: 'Courses and programmes you can take at your own pace or with a cohort.' },
  { title: 'Build', text: 'Projects, assignments and feedback from people who have done the work.' },
  { title: 'Lead', text: 'Certificates for what you finish, and a network that stays with you.' },
];
