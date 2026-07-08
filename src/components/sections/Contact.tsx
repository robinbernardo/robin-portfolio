'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { profile } from '@/data/content';
import { track } from '@/lib/analytics';
import { Aperture, Reveal, SectionHeading } from '@/components/ui/primitives';
import { tokens } from '@/theme/theme';

interface ContactChannel {
  channel: string;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

const channels: ContactChannel[] = [
  { channel: 'email', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { channel: 'phone', label: 'Phone', value: profile.phone, href: profile.phoneHref },
  {
    channel: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/robin-bernardo',
    href: profile.linkedin,
    external: true,
  },
];

export default function Contact() {
  return (
    <Box
      component="section"
      id="contact"
      data-section="contact"
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: 'background.paper',
        borderBlock: `1px solid ${tokens.line}`,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 4, md: 8 },
            alignItems: 'center',
          }}
        >
          <Reveal>
            <SectionHeading
              eyebrow="My Contact"
              title="Let's build something users love."
              lede="Open to Senior Product Designer and UX Engineer roles — or just say hello."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Stack spacing={2.2}>
              {channels.map((c) => (
                <Box
                  key={c.channel}
                  component="a"
                  href={c.href}
                  target={c.external ? '_blank' : undefined}
                  rel={c.external ? 'noopener' : undefined}
                  onClick={() => track('contact_click', { channel: c.channel })}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.8,
                    color: tokens.paper,
                    fontSize: '1.1rem',
                    '&:hover .aperture-wrap': { color: tokens.sand },
                    '&:focus-visible': {
                      outline: `2px solid ${tokens.sand}`,
                      outlineOffset: 3,
                    },
                  }}
                >
                  <Box className="aperture-wrap" sx={{ transition: 'color 0.2s', display: 'flex' }}>
                    <Aperture size="0.9rem" />
                  </Box>
                  <Box>
                    <Typography
                      component="small"
                      sx={{
                        display: 'block',
                        fontSize: '0.75rem',
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        color: 'text.secondary',
                      }}
                    >
                      {c.label}
                    </Typography>
                    {c.value}
                  </Box>
                </Box>
              ))}
            </Stack>
          </Reveal>
        </Box>
      </Container>
    </Box>
  );
}
