'use client';

import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { profile } from '@/data/content';
import { track } from '@/lib/analytics';
import { tokens } from '@/theme/theme';

export default function Footer() {
  return (
    <Container maxWidth="xl" component="footer" sx={{ py: 3.5 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        flexWrap="wrap"
        gap={1.5}
        sx={{ fontSize: '0.85rem', color: 'text.secondary' }}
      >
        <Typography variant="inherit">
          © {new Date().getFullYear()} {profile.name} · rxb Studio
        </Typography>
        <Link
          href={profile.feedbackUrl}
          target="_blank"
          rel="noopener"
          onClick={() => track('contact_click', { channel: 'notion-feedback' })}
          sx={{
            borderBottom: `1px solid ${tokens.line}`,
            '&:hover': { color: tokens.sand, borderColor: tokens.sand },
          }}
        >
          Leave a comment or feedback ↗
        </Link>
      </Stack>
    </Container>
  );
}
