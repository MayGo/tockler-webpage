import { Box, Center, Flex, Grid, Heading, Link, Text, VStack } from '@chakra-ui/react';

import { CgDarkMode } from 'react-icons/cg';
import { FaChartBar, FaDatabase, FaHistory } from 'react-icons/fa';
import { IoMdAnalytics, IoMdNotifications } from 'react-icons/io';
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
            <VStack gap={8} pt={12} align="center">
                <TocklerLogoText height="100px" />
                <Text fontSize="md">Track your time or look when and what were you doing at some point in time.</Text>

                {release && <DownloadOptions release={release} />}

                <Text fontSize="xs">
                    Latest: v{version}.{' '}
                    <Link color="blue.500" href="https://github.com/MayGo/tockler/releases/latest" target="_blank">
                        Releases Page
                    </Link>
                </Text>

                <Text fontSize="2xl">
                    Tockler is{' '}
                    <Text as="span" color="primary" fontWeight="bold" bg="whiteAlpha.800" p={2} px={4} rounded="full">
                        free
                    </Text>{' '}
                    to download and use.
                </Text>
                <Box
                    bg="blackAlpha.700"
                    border="1px solid"
                    borderColor="gray.900"
                    p={4}
                    borderRadius="2xl"
                    color="white"
                >
                    <Text fontSize="md" w="400px" textAlign="center">
                        Tockler is maintained as an open-source project.
                        <br /> If you find it useful, consider{' '}
                        <Link color="blue.300" href="https://github.com/sponsors/MayGo">
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
                    <Grid
                        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
                        gap={12}
                    >
                        <FeatureItem title="History" icon={<FaHistory />}>
                            With Tockler you can go back in time and see what you were working on. You can get
                            information on what apps were used - exactly at what time - and what title the application
                            had at that moment. This is enough to determine when and how much you did something.
                        </FeatureItem>
                        <FeatureItem title="Tracking" icon={<FaChartBar />}>
                            Track how you spent your time on a computer. Tockler tracks active applications usage and
                            computer state. It records active application titles. It tracks idle, offline and online
                            state. You can see this data with nice interactive timeline chart.
                        </FeatureItem>
                        <FeatureItem title="Analyze" icon={<IoMdAnalytics />}>
                            Analyze your computer usage. See your total online time today, yesterday or any other day.
                            In monthly calendar views and with charts.
                        </FeatureItem>
                        <FeatureItem title="Dark mode" icon={<CgDarkMode />}>
                            Dark Mode support. Can automatically change when OS mode changes. You can click{' '}
                            <ColorToggleLink>here</ColorToggleLink> to change screenshots to <ColorModeText /> ones.
                        </FeatureItem>
                        <FeatureItem title="Local data" icon={<FaDatabase />}>
                            Works without internet access. All data is stored locally on your device and is never sent
                            outside your device. You can search items and all data is exportable to CSV.
                        </FeatureItem>
                        <FeatureItem title="Reminders" icon={<IoMdNotifications />}>
                            Configure notifications to be fired if application with required title is opened.
                        </FeatureItem>
                    </Grid>
                </Box>
            </Center>
            <Center>
                <Flex width="100%" maxW="1000px" pt="110px" px={5}>
                    <Box flex={1}>
                        <Heading size={['2xl', '3xl', '4xl', '6xl']}>Tray window</Heading>
                        <VStack align="start" pl={[0, 0, 7, 7]} pt={7} gap={7}>
                            <ListItem>Start tasks manually</ListItem>
                            <ListItem>Overview of online time</ListItem>
                            <ListItem>Current online time length</ListItem>
                            <ListItem>Last online time length</ListItem>
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
