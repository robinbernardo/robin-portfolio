'use client';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { navLinks } from '@/data/content';
import { tokens } from '@/theme/theme';

export default function Header() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'rgba(16,16,16,0.9)',
        backdropFilter: 'blur(8px)',
        borderBottom: `1px solid ${tokens.line}`,
        backgroundImage: 'none',
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction="row"
          alignItems="flex-end"
          justifyContent="space-between"
          sx={{ py: 1.6 }}
        >
          <Link href="#home" aria-label="Robin Bernardo — home" sx={{ lineHeight: 1 }}>
            <Typography
              component="span"
              sx={{ fontFamily: 'var(--font-caveat)', fontSize: '2.1rem', color: tokens.paper }}
            >
              rxb
            </Typography>
            <Typography
              component="span"
              sx={{
                display: 'block',
                fontSize: '0.68rem',
                letterSpacing: '0.22em',
                color: 'text.secondary',
                mt: '-0.15rem',
                pl: '0.3rem',
              }}
            >
              Studio
            </Typography>
          </Link>
          <Box component="nav" aria-label="Primary">
            <Stack
              direction="row"
              component="ul"
              sx={{
                listStyle: 'none',
                m: 0,
                p: 0,
                gap: { xs: 1.6, md: 3 },
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
              }}
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    sx={{
                      fontWeight: 600,
                      fontSize: { xs: '0.85rem', md: '0.95rem' },
                      color: tokens.paper,
                      pb: 0.4,
                      borderBottom: '1.5px solid transparent',
                      transition: 'border-color 0.2s ease, color 0.2s ease',
                      '&:hover': { borderColor: tokens.sand, color: tokens.sand },
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </AppBar>
  );
}
