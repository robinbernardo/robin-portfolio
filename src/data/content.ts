/**
 * Single source of truth for all page content.
 * Edit here — components render from this data.
 */

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  about: string;
  education: string;
  email: string;
  phone: string;
  phoneHref: string;
  linkedin: string;
  feedbackUrl: string;
}

export interface Strength {
  title: string;
  description: string;
}

/** Discriminated union — a project either links out or is under NDA. */
export type Project =
  | {
      kind: 'live';
      slug: string;
      title: string;
      tag: string;
      description: string;
      image: string;
      href: string;
    }
  | {
      kind: 'nda';
      slug: string;
      title: string;
      tag: string;
      description: string;
      image: string;
    };

export interface Testimonial {
  quote: string;
  author: string;
  authorRole: string;
}

export const profile: Profile = {
  name: 'Robin Bernardo',
  role: 'Senior Product Designer',
  tagline: 'Designing user-centered SaaS — then building it in clean, semantic code.',
  about:
    "Senior UI/UX Engineer with 8+ years of experience prototyping and designing user-centered SaaS products — and shipping them with semantic HTML, CSS/SCSS, and JavaScript. I've worked side by side with software developers on projects using React, Angular, Git, Docker, MongoDB, and Kubernetes, and I'm currently folding AI (Claude and Figma AI) into my day-to-day workflow.",
  education: 'BS in Information Technology, STI Southwoods',
  email: 'robinbernardo01@gmail.com',
  phone: '0976 058 6497',
  phoneHref: 'tel:+639760586497',
  linkedin: 'https://www.linkedin.com/in/robin-bernardo/',
  feedbackUrl:
    'https://repeated-elbow-3c7.notion.site/Comment-and-feedback-2e2c3cfa2052467584ce4b66a1619a94',
};

export const featured = {
  eyebrow: 'My Work — Latest',
  title: 'Policy Management System',
  nda: true,
  lede: 'An enterprise policy library that clients had stopped paying attention to — rebuilt from a plain SharePoint list into a modern product.',
  meta: 'Enterprise SaaS · Figma → React · Evocate',
  heading: 'From requirements to production',
  body: "Gathered the CTO's requirements, built the design system and prototype in Figma, then developed the frontend myself — semantic HTML, custom React components, SCSS — working alongside a software developer on structure, backend, and deployment.",
  stat: '4 sales leads',
  statSuffix: ' scheduled to sign in the quarter after launch.',
  image: '/images/policy-management.jpg',
  imageAlt: 'Policy Management System interface — redesigned policy library',
};

export const projects: Project[] = [
  {
    kind: 'nda',
    slug: 'sharepoint-hub',
    title: 'SharePoint Hub',
    tag: 'Product Redesign · Evocate',
    description:
      'Legacy HTML/CSS/JS rebuilt into scalable React components, with a drag-and-drop widget edit mode. Profitable by 2024, with client retention after.',
    image: '/images/sharepoint-hub.jpg',
  },
  {
    kind: 'live',
    slug: 'stratapp',
    title: 'StratApp',
    tag: 'SaaS Platform · 2 Years · Live ↗',
    description:
      'Responsive pages, dashboards, work boards, and reusable components across a two-year engagement. Client rated the work 10/10.',
    image: '/images/stratapp-2.jpg',
    href: 'https://stratappsaas.com/',
  },
  {
    kind: 'nda',
    slug: 'job-seeking-webapp',
    title: 'Job Seeking WebApp',
    tag: 'Web App · 4 Personas',
    description:
      'New flows and pages for candidate, employer, admin, and super admin — plus a full rebrand, from research to hi-fi prototype to UI code.',
    image: '/images/job-seeking.jpg',
  },
  {
    kind: 'nda',
    slug: 'risk-management-app',
    title: 'Risk Management App',
    tag: 'Web App · 3 Personas',
    description:
      'Designed from scratch after a three-day discovery — flows for risk officers, admins, and employees, taken to hi-fi and built in code.',
    image: '/images/risk-management.jpg',
  },
  {
    kind: 'nda',
    slug: 'application-evaluation-system',
    title: 'Application Evaluation System',
    tag: 'Enterprise Tool · 3 Personas',
    description:
      'Simplified a legacy tree-structure navigation across two demos while mentoring an associate designer. Turnover was a success.',
    image: '/images/app-evaluation.jpg',
  },
  {
    kind: 'nda',
    slug: 'property-selling-website',
    title: 'Property Selling Website',
    tag: 'Website · MVC C#',
    description:
      'Main designer and UI developer from kick-off to turnover, collaborating with the client and developers on flows and features.',
    image: '/images/property-selling.jpg',
  },
];

export const challenges: Project[] = [
  {
    kind: 'live',
    slug: 'offshorly-redesign',
    title: 'Offshorly Landing Redesign',
    tag: 'Figma Prototype ↗',
    description: "Reimagining the company's landing page as a Figma exercise.",
    image: '/images/offshorly.jpg',
    href: 'https://www.figma.com/proto/nsojlwVNaV31gyJj1p7wfy/Offshorly-Landing-page-team-library?page-id=0%3A1&node-id=1625-2804&viewport=-633%2C87%2C0.5&scaling=min-zoom',
  },
  {
    kind: 'live',
    slug: 'ysg-career-ladder',
    title: 'YSG Career Ladder',
    tag: 'Figma Prototype ↗',
    description:
      'A quiz-based tool so employees can take — and leads can track — the company career ladder.',
    image: '/images/ysg.jpg',
    href: 'https://www.figma.com/proto/rm7jkbiJzq4oFQ4saDN25E/-2023-Q1-----Figma-Challenge-----Robin-?node-id=634-1097&p=f&viewport=2976%2C-3557%2C1&t=mhiPuYtLbtwer2hn-1&scaling=contain&content-scaling=fixed&starting-point-node-id=671%3A3786&page-id=0%3A1',
  },
  {
    kind: 'live',
    slug: 'write-minds',
    title: 'Write Minds',
    tag: 'Adobe XD Prototype ↗',
    description:
      'Snapchat × Medium mashup: articles, memes, and wacky face filters in one feed.',
    image: '/images/write-minds.jpg',
    href: 'https://xd.adobe.com/view/63b07485-93a8-4c58-a4d8-0b2f9959bc46-36e3/',
  },
];

export const strengths: Strength[] = [
  {
    title: 'End-to-end product delivery',
    description:
      'Requirements and user data → design system → Figma prototype → production React or Angular code.',
  },
  {
    title: 'Design systems & style guides',
    description:
      'Custom-styled Fluent UI, React, and Angular components with BEM/SCSS conventions that scale.',
  },
  {
    title: 'Prototyping, lo-fi to hi-fi',
    description:
      'Responsive web and mobile app prototypes in Figma and Adobe XD that translate business goals into flows.',
  },
  {
    title: 'Mentorship & process',
    description:
      'Trainer for interns and new hires; Agile delivery with Azure DevOps and Trello.',
  },
];

export const testimonial: Testimonial = {
  quote:
    'I know you put so much time, energy and care into your work at #stratapp and for that I am extremely grateful. I sincerely valued working with you.',
  author: 'Ash Richardson',
  authorRole: 'Co-founder, StratApp',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'My Contact', href: '#contact' },
] as const;
