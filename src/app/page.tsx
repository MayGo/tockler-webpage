import { Box, Center, Flex, Grid, Heading, Link, Text, VStack } from '@chakra-ui/react';
import { FaLock } from 'react-icons/fa';
import { Carousels } from '~/components/Carousels';
import { ColorModeText } from '~/components/ColorModeText';
import { ColorToggleLink } from '~/components/ColorToggleLink';
import { DownloadOptions } from '~/components/DownloadOptions';
import { FeatureItem } from '~/components/FeatureItem';
import { TocklerLogoText } from '~/components/Header/TocklerLogoText';
import { ListItem } from '~/components/ListItem';
import { TrayImage } from '~/components/TrayImage';
import { getLatestTocklerRelease } from '~/utils/github';

export default async function Home() {
    const release = await getLatestTocklerRelease();
    const version = release?.version || '3.21.12'; // Fallback version if API fails

    return (
        <>
            <VStack gap={12} pt={12} align="center">
                <TocklerLogoText height="100px" />
                <Text fontSize="md" textAlign="center" lineHeight="1.7">
                    Automatically & accurately track application usage and working time.
                    <br /> See exactly how you spend your time on your computer.
                </Text>

                <Box bg="blue.500/10" p={4} borderRadius="lg" border="1px solid" borderColor="blue.100/50">
                    <Flex direction="column" gap={3}>
                        <Flex align="center" justify="center" gap={2}>
                            <FaLock />
                            <Text fontSize="xl" fontWeight="bold">
                                Privacy Guaranteed
                            </Text>
                        </Flex>

                        <Text textAlign="center" fontSize="md" pb={2}>
                            Your personal data never leaves your device
                        </Text>

                        <Grid templateColumns={['1fr', '1fr 1fr']} gap={3} fontSize="sm">
                            <ListItem emoticon="🔒">No accounts required</ListItem>
                            <ListItem emoticon="💾">100% local data storage</ListItem>
                            <ListItem emoticon="🌐">Works offline</ListItem>
                            <ListItem emoticon="📊">CSV export available</ListItem>
                            <ListItem emoticon="🔍">Open-source transparency</ListItem>
                            <ListItem emoticon="🔑">You own your data</ListItem>
                        </Grid>

                        <Text fontSize="xs" textAlign="center" pt={1} opacity={0.8}>
                            Only minimal anonymous metrics are collected to improve the app
                        </Text>
                    </Flex>
                </Box>

                <Text fontSize="2xl">
                    Tockler is{' '}
                    <Text as="span" color="black" fontWeight="bold" bg="whiteAlpha.800" p={2} px={4} rounded="full">
                        free
                    </Text>{' '}
                    to download and use.
                </Text>

                {release && <DownloadOptions release={release} version={version} />}

                <Box bg="green.500/30" border="1px solid" borderColor="green.500/50" p={6} borderRadius="2xl">
                    <Text fontSize="md" textAlign="center" lineHeight="1.7">
                        Tockler is maintained as an open-source project.
                        <br /> If you find it useful, consider{' '}
                        <Link href="https://github.com/MayGo/tockler">
                            <b>supporting its development on GitHub</b>
                        </Link>
                        .
                    </Text>
                </Box>
            </VStack>
            <Center pb={12} pt={12}>
                <Heading size="6xl">Features</Heading>
            </Center>
            <Center>
                <Box width="100%" maxW="1200px" px={5}>
                    <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)']} gap={12}>
                        <FeatureItem title="History" emoticon="🕒">
                            Go back in time to see exactly what you worked on and when. Tockler provides detailed
                            historical data of your application usage, including precise timestamps and window titles.
                            This comprehensive timeline gives you perfect insight into your past activities, making it
                            invaluable for time reporting, productivity analysis, and project tracking.
                        </FeatureItem>
                        <FeatureItem title="Tracking" emoticon="📈">
                            Automatically monitor how you spend time on your computer with zero effort. Tockler silently
                            records active application usage, window titles, and computer states (idle, offline, online)
                            in the background. View your activity patterns through beautiful interactive timeline charts
                            that make visualization intuitive and meaningful.
                        </FeatureItem>
                        <FeatureItem title="Analyze" emoticon="📊">
                            Transform raw activity data into actionable insights. See daily, weekly, and monthly
                            summaries of your computer usage through intuitive visualizations. Identify productivity
                            patterns, discover time-wasting applications, and optimize your workflow with pie charts,
                            calendars, and comprehensive statistics views.
                        </FeatureItem>
                        <FeatureItem title="Privacy First" emoticon="🔒">
                            Your data never leaves your device. Tockler operates with a strict privacy-focused approach
                            - no accounts required, no cloud uploads, and no tracking of personally identifiable
                            information. Only minimal anonymous metrics are collected to improve app functionality,
                            giving you complete confidence in your digital privacy.
                        </FeatureItem>
                        <FeatureItem title="Dark Mode" emoticon="🌙">
                            Protect your eyes with full dark mode support. Tockler automatically adapts to your system
                            preferences or lets you manually toggle between light and dark themes. You can click{' '}
                            <ColorToggleLink>here</ColorToggleLink> to switch screenshots to <ColorModeText /> ones and
                            see the difference.
                        </FeatureItem>
                        <FeatureItem title="Local Data" emoticon="💾">
                            Own your productivity data completely. All tracking information is stored exclusively on
                            your device in a local database with full export capabilities to CSV. This offline-first
                            approach ensures your activity data remains yours while providing powerful analysis
                            capabilities without internet dependency.
                        </FeatureItem>
                        <FeatureItem title="Reminders" emoticon="🔔">
                            Stay on track with smart notifications. Configure customizable alerts based on application
                            usage patterns or specific window titles. Create work-break reminders, set time limits for
                            specific applications, or get notifications when you switch to designated tasks.
                        </FeatureItem>
                    </Grid>
                </Box>
            </Center>
            <Center>
                <Flex width="100%" maxW="1000px" pt="110px" px={5}>
                    <Box flex={1}>
                        <Heading size={['2xl', '3xl', '4xl', '6xl']}>Tray window</Heading>
                        <VStack align="start" pt={10} gap={8}>
                            <ListItem emoticon="⏱️">Effortlessly start and track tasks with a single click</ListItem>
                            <ListItem emoticon="📊">Instant visual overview of your daily computer usage</ListItem>
                            <ListItem emoticon="⏳">Real-time counter of your current active session</ListItem>
                            <ListItem emoticon="🔄">Quick access to your previous session duration</ListItem>
                            <ListItem emoticon="📅">Browse your complete online time history at a glance</ListItem>
                        </VStack>
                    </Box>
                    <Box flex={1}>
                        <Text fontSize="60px">
                            <TrayImage />
                        </Text>
                    </Box>
                </Flex>
            </Center>
            <Center pb={12} pt={12}>
                <Heading size="6xl">Screenshots</Heading>
            </Center>
            <Carousels />
        </>
    );
}
