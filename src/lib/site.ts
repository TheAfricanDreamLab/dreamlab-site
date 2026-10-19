/** Where sign-in, sign-up and organisation set-up live (dreamlab-web). */
const APP_URL = (import.meta.env.PUBLIC_APP_URL ?? 'http://localhost:3100').replace(/\/$/, '');

export const app = (path: string) => `${APP_URL}${path}`;

export const NAV = [
  { href: '/programme', label: 'Programme' },
  { href: '/organisations', label: 'For organisations' },
  { href: '/about', label: 'About' },
];

export const PILLARS = [
  { title: 'Learn', text: 'Courses and programmes you can take at your own pace or with a cohort.' },
  { title: 'Build', text: 'Projects, assignments and feedback from people who have done the work.' },
  { title: 'Lead', text: 'Certificates for what you finish, and a network that stays with you.' },
];
