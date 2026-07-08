'use client';

import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { profile } from '@/data/content';
import { Aperture, Reveal } from '@/components/ui/primitives';
import { tokens } from '@/theme/theme';

export default function Hero() {
  return (
    <Box
      component="section"
      id="home"
      data-section="hero"
      sx={{ py: { xs: 6, md: 10 }, overflow: 'hidden' }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'minmax(0,58%) minmax(0,42%)' },
          }}
        >
          <Reveal>
            <Box
              sx={{
                gridColumn: 1,
                gridRow: 1,
                position: 'relative',
                aspectRatio: { xs: '16 / 11', md: '4 / 3.2' },
                bgcolor: 'background.paper',
              }}
            >
              <Image
                src="/images/stratapp-1.jpg"
                alt="StratApp SaaS interface — dashboards and work boards designed and built by Robin Bernardo"
                fill
                priority
                sizes="(max-width: 860px) 100vw, 58vw"
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </Box>
          </Reveal>

          <Box
            sx={{
              gridColumn: { xs: '1', md: '1 / -1' },
              gridRow: { xs: 2, md: 1 },
              alignSelf: 'center',
              position: 'relative',
              mt: { xs: -6, md: 0 },
              pointerEvents: 'none',
              '& > *': { pointerEvents: 'auto' },
            }}
          >
            <Reveal delay={0.1}>
              <Typography
                variant="h1"
                sx={{
                  textAlign: { xs: 'left', md: 'right' },
                  pl: { md: '8%' },
                  textShadow: '0 2px 30px rgba(0,0,0,0.45)',
                }}
              >
                {profile.name}
              </Typography>
            </Reveal>
            <Reveal delay={0.2}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                justifyContent={{ xs: 'flex-start', md: 'flex-end' }}
                sx={{ mt: 2, color: tokens.paper }}
              >
                <Typography
                  component="p"
                  sx={{
                    fontFamily: 'var(--font-anton)',
                    textTransform: 'uppercase',
                    fontSize: 'clamp(1.05rem, 2.5vw, 2rem)',
                    letterSpacing: '0.03em',
                    textShadow: '0 2px 20px rgba(0,0,0,0.45)',
                  }}
                >
                  {profile.role}
                </Typography>
                <Aperture size="1.1rem" />
              </Stack>
            </Reveal>
            <Reveal delay={0.3}>
              <Box sx={{ mt: 4.5, ml: { md: 'auto' }, maxWidth: '20rem' }}>
                <Divider sx={{ borderColor: tokens.paper, opacity: 0.85, mb: 2 }} />
                <Typography>{profile.tagline}</Typography>
              </Box>
            </Reveal>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
