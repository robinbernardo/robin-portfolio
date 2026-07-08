'use client';

import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { tokens } from '@/theme/theme';

/** The circle-dot "aperture" — the page's signature motif. */
export function Aperture({ size = '1em' }: { size?: string }) {
  return (
    <Box
      component="span"
      aria-hidden
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: `calc(${size} * 1.9)`,
        height: `calc(${size} * 1.9)`,
        border: '1.5px solid currentColor',
        borderRadius: '50%',
        flex: 'none',
        '&::after': {
          content: '""',
          width: `calc(${size} * 0.28)`,
          height: `calc(${size} * 0.28)`,
          background: 'currentColor',
          borderRadius: '50%',
        },
      }}
    />
  );
}

/** Small outlined pill matching the deck's NDA tags. */
export function NdaBadge({ floating = false }: { floating?: boolean }) {
  return (
    <Chip
      label="NDA"
      variant="outlined"
      size="small"
      sx={{
        color: tokens.sand,
        borderColor: tokens.sand,
        ...(floating && {
          position: 'absolute',
          top: 14,
          right: 14,
          zIndex: 1,
          bgcolor: 'rgba(16,16,16,0.7)',
        }),
      }}
    />
  );
}

/** Eyebrow label with aperture + section title. */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  badge,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  badge?: React.ReactNode;
}) {
  return (
    <Box>
      <Stack direction="row" alignItems="center" spacing={1.4} sx={{ color: tokens.sand, mb: 2.4 }}>
        <Aperture size="0.7rem" />
        <Typography variant="overline">{eyebrow}</Typography>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={2} flexWrap="wrap" sx={{ mb: 1.4 }}>
        <Typography variant="h2" component="h2">
          {title}
        </Typography>
        {badge}
      </Stack>
      {lede && (
        <Typography variant="body1" sx={{ maxWidth: '40rem' }}>
          {lede}
        </Typography>
      )}
    </Box>
  );
}

/** Fade-up on scroll; respects prefers-reduced-motion. */
export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(24px)',
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </Box>
  );
}
