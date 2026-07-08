'use client';

import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { profile, strengths } from '@/data/content';
import { Aperture, Reveal, SectionHeading } from '@/components/ui/primitives';
import { tokens } from '@/theme/theme';

export default function About() {
  return (
    <Box component="section" id="about" data-section="about" sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'minmax(220px, 340px) 1.4fr' },
            gap: { xs: 4, md: 8 },
            alignItems: 'start',
          }}
        >
          <Reveal>
            <Box
              sx={{
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  inset: '1rem -1rem -1rem 1rem',
                  border: `1.5px solid ${tokens.line}`,
                  zIndex: -1,
                },
              }}
            >
              <Box sx={{ position: 'relative', aspectRatio: '1 / 1' }}>
                <Image
                  src="/images/portrait.jpg"
                  alt={`Portrait of ${profile.name}`}
                  fill
                  sizes="(max-width: 860px) 100vw, 340px"
                  style={{ objectFit: 'cover', filter: 'grayscale(20%)' }}
                />
              </Box>
            </Box>
          </Reveal>

          <Box>
            <Reveal>
              <SectionHeading
                eyebrow="About Me"
                title="I design it in Figma, then I build it for real."
              />
              <Typography sx={{ mt: 1 }}>{profile.about}</Typography>
              <Typography sx={{ mt: 2.2, fontSize: '0.92rem', color: 'text.secondary' }}>
                <Box component="strong" sx={{ color: 'text.primary', fontWeight: 600 }}>
                  Education:
                </Box>{' '}
                {profile.education}
              </Typography>
            </Reveal>

            <Stack spacing={2.2} sx={{ mt: 3.5 }} id="strength" data-section="strength">
              {strengths.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.06}>
                  <Stack direction="row" spacing={1.6} alignItems="flex-start">
                    <Box sx={{ color: tokens.sand, mt: 0.4 }}>
                      <Aperture size="0.85rem" />
                    </Box>
                    <Typography component="div">
                      <Box
                        component="strong"
                        sx={{ display: 'block', color: tokens.paper, fontWeight: 600 }}
                      >
                        {s.title}
                      </Box>
                      {s.description}
                    </Typography>
                  </Stack>
                </Reveal>
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
