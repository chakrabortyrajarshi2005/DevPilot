'use client';

import { ReactNode } from 'react';
import {
	Authenticated,
	AuthLoading,
	ConvexReactClient,
	Unauthenticated,
} from 'convex/react';
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import {
	ClerkProvider,
	SignUpButton,
	SignInButton,
	useAuth,
} from '@clerk/nextjs';
import { ThemeProvider } from '@/components/custom/themes-provider';
import UnauthenticatedView from '@/features/auth/components/UnauthenticatedView';
import AuthLoadingView from '@/features/auth/components/AuthLoadingView';

if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
	throw new Error('Missing NEXT_PUBLIC_CONVEX_URL in your .env.local file');
}

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

export default function ConvexClientProvider({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<ClerkProvider>
			<ConvexProviderWithClerk
				client={convex}
				useAuth={useAuth}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange>
					<Authenticated>{children}</Authenticated>
					<Unauthenticated>
						{/* <SignInButton/>
                        <SignUpButton/> */}
						<UnauthenticatedView />
					</Unauthenticated>
					<AuthLoading>
						Auth Loading .....
						<AuthLoadingView />
					</AuthLoading>
				</ThemeProvider>
			</ConvexProviderWithClerk>
		</ClerkProvider>
	);
}
