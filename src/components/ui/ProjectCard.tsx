'use client';

import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { Project } from '@/data/content';
import { track } from '@/lib/analytics';
import { NdaBadge } from '@/components/ui/primitives';
import { tokens } from '@/theme/theme';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isLive = project.kind === 'live';

  const inner = (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'background.paper',
        height: '100%',
        '& img': {
          transition: 'transform 0.6s ease, opacity 0.4s ease',
        },
        '&:hover img': { transform: 'scale(1.05)', opacity: 0.45 },
        '&:hover .card-desc': { opacity: 1, transform: 'none' },
        '@media (prefers-reduced-motion: reduce), (max-width: 860px)': {
          '& img, & .card-desc': { transition: 'none' },
          '& .card-desc': { opacity: 1, transform: 'none' },
        },
      }}
    >
      {!isLive && <NdaBadge floating />}
      <Box sx={{ position: 'relative', aspectRatio: '4 / 3' }}>
        <Image
          src={project.image}
          alt={`${project.title} — ${project.tag}`}
          fill
          sizes="(max-width: 540px) 100vw, (max-width: 860px) 50vw, 33vw"
          style={{ objectFit: 'cover', objectPosition: 'top' }}
        />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          insetInline: 0,
          bottom: 0,
          px: 1.6,
          pb: 1.4,
          pt: 4,
          background: 'linear-gradient(to top, rgba(0,0,0,0.82), transparent)',
        }}
      >
        <Typography
          component="span"
          sx={{
            display: 'block',
            fontSize: '0.72rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: tokens.sand,
            fontWeight: 600,
          }}
        >
          {project.tag}
        </Typography>
        <Typography variant="h3" sx={{ fontSize: '1.12rem', lineHeight: 1.2 }}>
          {project.title}
        </Typography>
        <Typography
          className="card-desc"
          sx={{
            fontSize: '0.85rem',
            mt: 0.5,
            opacity: 0,
            transform: 'translateY(6px)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
          }}
        >
          {project.description}
        </Typography>
      </Box>
    </Box>
  );

  if (isLive) {
    return (
      <Box
        component="a"
        href={project.href}
        target="_blank"
        rel="noopener"
        onClick={() => track('project_click', { project: project.slug })}
        sx={{
          display: 'block',
          height: '100%',
          '&:focus-visible': { outline: `2px solid ${tokens.sand}`, outlineOffset: 3 },
        }}
      >
        {inner}
      </Box>
    );
  }

  return inner;
}
