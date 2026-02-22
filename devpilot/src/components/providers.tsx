'use client';

import { ReactNode } from 'react';
import { ConvexReactClient } from 'convex/react';
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import { ClerkProvider, useAuth } from '@clerk/nextjs';
import { ThemeProvider } from '@/components/custom/themes-provider';

if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
  throw new Error('Missing NEXT_PUBLIC_CONVEX_URL in your .env.local file');
}

const convex = new ConvexReactClient(
  process.env.NEXT_PUBLIC_CONVEX_URL
);

export default function ConvexClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                  >
        {children}
        </ThemeProvider>
      </ConvexProviderWithClerk>
      
    </ClerkProvider>
  );
}