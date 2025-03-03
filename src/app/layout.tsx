import { GeistSans } from 'geist/font/sans';
import { type Metadata } from 'next';

import { Box } from '@chakra-ui/react';
import { Footer } from '~/components/Header/Footer';
import { ThemeProvider } from '~/components/theme/ThemeProvider';

import { Analytics } from '@vercel/analytics/react';
import { M_PLUS_Rounded_1c } from 'next/font/google';
import { Suspense } from 'react';
import { BgLogo } from '~/components/BgLogo';
import { Header } from '~/components/Header/Header';
import { Toaster } from '~/components/ui/Toaster';
import { getURL } from '~/utils/helpers';

const mPlusRounded = M_PLUS_Rounded_1c({
    weight: ['300', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-mplus',
    preload: false // Add this to prevent the font loading error
});

const meta = {
    title: 'Tockler - Track Your Computer Usage and Working Time',
    description:
        'Track and analyze how you spend time on your computer. Monitor application usage, working hours, and productivity with detailed timelines and insights.',
    cardImage: '/og.png',
    robots: 'follow, index',
    favicon: '/favicon.ico',
    url: getURL()
};

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: meta.title,
        description: meta.description,
        referrer: 'origin-when-cross-origin',
        keywords: [
            'Time Tracking',
            'Productivity',
            'Application Usage',
            'Work Analytics',
            'Computer Usage',
            'Time Management',
            'Activity Monitoring'
        ],
        authors: [{ name: 'Tockler', url: 'https://tockler.trimatech.dev/' }],
        creator: 'Tockler',
        publisher: 'Tockler',
        robots: meta.robots,
        icons: { icon: meta.favicon },
        metadataBase: new URL(meta.url),
        openGraph: {
            url: meta.url,
            title: meta.title,
            description: meta.description,
            images: [meta.cardImage],
            type: 'website',
            siteName: meta.title
        },
        twitter: {
            card: 'summary_large_image',
            site: '@Tockler',
            creator: '@Tockler',
            title: meta.title,
            description: meta.description,
            images: [meta.cardImage]
        }
    };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${GeistSans.variable} ${mPlusRounded.variable}`}>
            <body className={GeistSans.className}>
                <ThemeProvider>
                    <Box>
                        <Box
                            maxW="1000px"
                            mx="auto"
                            px={[0, 2, 4]}
                            zIndex={2}
                            position="relative"
                            backdropFilter="blur(30px)"
                            boxShadow="sm"
                        >
                            <Header />

                            {children}

                            <Footer />
                        </Box>
                    </Box>
                    <BgLogo />
                    <Suspense>
                        <Toaster />
                    </Suspense>
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    );
}
