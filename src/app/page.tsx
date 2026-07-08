import Hero from '@/components/sections/Hero';
import FeaturedWork from '@/components/sections/FeaturedWork';
import ProjectsGrid from '@/components/sections/ProjectsGrid';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import AnalyticsTracker from '@/lib/AnalyticsTracker';
import { challenges, projects, testimonial } from '@/data/content';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedWork />
      <ProjectsGrid
        id="projects"
        eyebrow="More to explore"
        title="Other Projects"
        projects={projects}
        testimonial={testimonial}
      />
      <ProjectsGrid
        id="challenges"
        eyebrow="Side quests"
        title="Design Challenges"
        lede="Fun, self-imposed briefs to stretch the craft — click through to the live prototypes."
        projects={challenges}
      />
      <About />
      <Contact />
      <AnalyticsTracker />
    </main>
  );
}
