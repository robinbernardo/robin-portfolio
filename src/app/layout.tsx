import type { Metadata } from 'next';
import { Anton, Caveat, Titillium_Web } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme/theme';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

const anton = Anton({ weight: '400', subsets: ['latin'], variable: '--font-anton' });
const titillium = Titillium_Web({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
  variable: '--font-titillium',
});
const caveat = Caveat({ weight: '600', subsets: ['latin'], variable: '--font-caveat' });

export const metadata: Metadata = {
  title: 'Robin Bernardo — Senior Product Designer & UI Engineer',
  description:
    'Robin Bernardo — Senior Product Designer and UI Engineer. Designing user-centered SaaS and building it in code.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <body className={`${anton.variable} ${titillium.variable} ${caveat.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
