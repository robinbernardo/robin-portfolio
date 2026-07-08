'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import type { Project, Testimonial } from '@/data/content';
import ProjectCard from '@/components/ui/ProjectCard';
import { Reveal, SectionHeading } from '@/components/ui/primitives';
import { tokens } from '@/theme/theme';

interface ProjectsGridProps {
  id: string;
  eyebrow: string;
  title: string;
  lede?: string;
  projects: Project[];
  testimonial?: Testimonial;
}

export default function ProjectsGrid({
  id,
  eyebrow,
  title,
  lede,
  projects,
  testimonial,
}: ProjectsGridProps) {
  return (
    <Box component="section" data-section={id} sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="xl">
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} lede={lede} />
        </Reveal>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
            gap: { xs: 2, md: 3 },
            mt: 4,
          }}
        >
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </Box>

        {testimonial && (
          <Reveal>
            <Box
              sx={{
                borderLeft: `2px solid ${tokens.sand}`,
                pl: { xs: 2.4, md: 5 },
                maxWidth: '46rem',
                mt: 7,
              }}
            >
              <Typography
                component="blockquote"
                sx={{
                  fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                  color: tokens.paper,
                  lineHeight: 1.6,
                }}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </Typography>
              <Typography component="cite" sx={{ display: 'block', fontStyle: 'normal', mt: 2, fontSize: '0.9rem', color: 'text.secondary' }}>
                <Box component="strong" sx={{ color: tokens.sand, fontWeight: 600 }}>
                  {testimonial.author}
                </Box>{' '}
                — {testimonial.authorRole}
              </Typography>
            </Box>
          </Reveal>
        )}
      </Container>
    </Box>
  );
}
