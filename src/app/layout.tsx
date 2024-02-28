import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { getServerSession } from 'next-auth';

import { ModeToggle } from '@/components/darkmode-toggle';
import Footer from '@/components/footer';
import { ReactQueryClientProvider } from '@/components/reactQueryClientProvider';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import UserAuthDropdown from '@/components/userAuthDropdown';
import SessionProvider from '@/components/providers/userAuthSessionProvider';
import { cn } from '@/lib/utils';
import './globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Home - Exercise-tracker',
  description: 'Exercise tracker home page',
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.png',
    // favicon: '/favicon.ico',
    shortcut: '/favicon.png',
  },
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession();

  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      {/* obtained from https://ui.shadcn.com/docs/installation/next#fonts  */}
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <SessionProvider session={session}>
          <ReactQueryClientProvider>
            <ThemeProvider
              attribute='class'
              defaultTheme='dark'
              enableSystem
              disableTransitionOnChange
            >
              {/*
                obtained from
                https://github.com/shadcn-ui/taxonomy/blob/main/app/(dashboard)/dashboard/layout.tsx
            */}
              <div className='flex min-h-screen flex-col space-y-6'>
                <header className='sticky top-0 z-40 border-b bg-background'>
                  <div className='container flex h-16 items-center justify-between py-4'>
                    <Navbar />
                    <div className='flex items-center justify-between gap-5'>
                      <ModeToggle />
                      <UserAuthDropdown />
                    </div>
                  </div>
                </header>
                {/* <div className='container grid flex-1 gap-12 md:grid-cols-[200px_1fr]'> */}
                {/*   <aside className='hidden w-[200px] flex-col md:flex'> */}
                {/*     <DashboardNav items={dashboardConfig.sidebarNav} /> */}
                {/*   </aside> */}
                <main className='flex w-full flex-1 flex-col overflow-hidden'>{children}</main>
                {/* </div> */}
              </div>
              <Footer />
              <Analytics />
            </ThemeProvider>
          </ReactQueryClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
