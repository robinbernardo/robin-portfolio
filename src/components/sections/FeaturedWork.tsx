'use client';

import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { featured } from '@/data/content';
import { track } from '@/lib/analytics';
import { Aperture, NdaBadge, Reveal, SectionHeading } from '@/components/ui/primitives';
import { tokens } from '@/theme/theme';

export default function FeaturedWork() {
  return (
    <Box component="section" id="work" data-section="work" sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="xl">
        <Reveal>
          <SectionHeading
            eyebrow={featured.eyebrow}
            title={featured.title}
            lede={featured.lede}
            badge={featured.nda ? <NdaBadge /> : undefined}
          />
        </Reveal>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.5fr 1fr' },
            gap: { xs: 3, md: 6 },
            alignItems: 'end',
            mt: 4,
          }}
        >
          <Reveal>
            <Box
              sx={{
                position: 'relative',
                aspectRatio: '16 / 10',
                overflow: 'hidden',
                bgcolor: 'background.paper',
                '& img': { transition: 'transform 0.6s ease' },
                '&:hover img': { transform: 'scale(1.03)' },
                '@media (prefers-reduced-motion: reduce)': {
                  '& img': { transition: 'none' },
                },
              }}
            >
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                fill
                sizes="(max-width: 860px) 100vw, 60vw"
                style={{ objectFit: 'fill', objectPosition: 'top' }}
              />
            </Box>
          </Reveal>
          <Reveal delay={0.1}>
            <Typography
              sx={{
                fontSize: '0.85rem',
                color: 'text.secondary',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                mb: 1,
              }}
            >
              {featured.meta}
            </Typography>
            <Typography variant="h3" sx={{ mb: 1.4 }}>
              {featured.heading}
            </Typography>
            <Typography sx={{ mb: 2 }}>{featured.body}</Typography>
            <Typography sx={{ mb: 2.4 }}>
              <Box component="span" sx={{ color: tokens.sand, fontWeight: 600 }}>
                {featured.stat}
              </Box>
              {featured.statSuffix}
            </Typography>
            <Link
              href="#contact"
              onClick={() => track('project_click', { project: 'policy-management' })}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.2,
                color: tokens.paper,
                fontWeight: 600,
                borderBottom: `1.5px solid ${tokens.sand}`,
                pb: 0.5,
                transition: 'color 0.2s, gap 0.2s',
                '&:hover': { color: tokens.sand, gap: 1.8 },
              }}
            >
              Ask me about this project <Aperture size="0.8rem" />
            </Link>
          </Reveal>
        </Box>
      </Container>
    </Box>
  );
}
