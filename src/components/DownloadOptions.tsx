'use client';

import { Box, Flex, Heading, Link, Stack, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { FaApple, FaLinux, FaWindows } from 'react-icons/fa';
import { Button } from '~/components/ui/button';
import { TocklerRelease, formatFileSize } from '~/utils/github';

interface DownloadOptionProps {
    label: string;
    download: { url: string; size: number };
    icon?: React.ReactNode;
}

const DownloadOption = ({ label, download, icon }: DownloadOptionProps) => {
    if (!download.url) return null;

    return (
        <Link href={download.url} _hover={{ textDecoration: 'none' }} borderRadius="full">
            <Flex
                align="center"
                justify="space-between"
                w="100%"
                p={3}
                bg={{ base: 'white/50', _dark: 'black/50' }}
                borderColor={{ base: 'white', _dark: 'black' }}
                borderWidth="1px"
                borderRadius="full"
                _hover={{ bg: 'white', _dark: { bg: 'black' } }}
            >
                <Flex align="center" gap={2}>
                    {icon}
                    <Text>{label}</Text>
                </Flex>
                {download.size > 0 && (
                    <Text fontSize="sm" color="gray.500">
                        {formatFileSize(download.size)}
                    </Text>
                )}
            </Flex>
        </Link>
    );
};

interface DownloadOptionsProps {
    release: TocklerRelease;
    version: string;
}

type Platform = 'macos' | 'windows' | 'linux';

export const DownloadOptions = ({ release, version }: DownloadOptionsProps) => {
    const [platform, setPlatform] = useState<Platform>();

    return (
        <Box maxW="600px" w="100%">
            <Stack direction="column" gap={4}>
                <VStack mb={4} alignSelf="center">
                    <Flex justify="center" gap={2}>
                        <Button
                            onClick={() => setPlatform('macos')}
                            variant={platform === 'macos' ? 'solid' : 'outline'}
                        >
                            <Flex align="center" gap={2}>
                                <FaApple /> macOS
                            </Flex>
                        </Button>
                        <Button
                            onClick={() => setPlatform('windows')}
                            variant={platform === 'windows' ? 'solid' : 'outline'}
                        >
                            <Flex align="center" gap={2}>
                                <FaWindows /> Windows
                            </Flex>
                        </Button>
                        <Button
                            onClick={() => setPlatform('linux')}
                            variant={platform === 'linux' ? 'solid' : 'outline'}
                        >
                            <Flex align="center" gap={2}>
                                <FaLinux /> Linux
                            </Flex>
                        </Button>
                    </Flex>

                    <Text fontSize="xs">
                        Latest: v{version}.{' '}
                        <Link color="blue.500" href="https://github.com/MayGo/tockler/releases/latest" target="_blank">
                            Releases Page
                        </Link>
                    </Text>
                </VStack>
                {platform === 'macos' && (
                    <Stack direction="column" gap={3}>
                        <DownloadOption
                            label="macOS Universal (DMG)"
                            download={release.downloadUrls.mac.dmg}
                            icon={<FaApple />}
                        />
                        <DownloadOption
                            label="macOS Apple Silicon (ARM64 DMG)"
                            download={release.downloadUrls.mac.arm64Dmg}
                            icon={<FaApple />}
                        />
                        <DownloadOption
                            label="macOS Universal (ZIP)"
                            download={release.downloadUrls.mac.default}
                            icon={<FaApple />}
                        />
                        <DownloadOption
                            label="macOS Apple Silicon (ARM64 ZIP)"
                            download={release.downloadUrls.mac.arm64}
                            icon={<FaApple />}
                        />
                    </Stack>
                )}

                {platform === 'windows' && (
                    <Stack direction="column" gap={4}>
                        <Box>
                            <Heading size="sm" mb={2}>
                                Installer (Recommended)
                            </Heading>
                            <Stack direction="column" gap={3}>
                                <DownloadOption
                                    label="Windows Universal Setup"
                                    download={release.downloadUrls.windows.setup.default}
                                    icon={<FaWindows />}
                                />
                                <DownloadOption
                                    label="Windows x64 Setup"
                                    download={release.downloadUrls.windows.setup.x64}
                                    icon={<FaWindows />}
                                />
                                <DownloadOption
                                    label="Windows ARM64 Setup"
                                    download={release.downloadUrls.windows.setup.arm64}
                                    icon={<FaWindows />}
                                />
                                <DownloadOption
                                    label="Windows 32-bit (ia32) Setup"
                                    download={release.downloadUrls.windows.setup.ia32}
                                    icon={<FaWindows />}
                                />
                            </Stack>
                        </Box>

                        <Box>
                            <Heading size="sm" mb={2}>
                                Portable
                            </Heading>
                            <Stack direction="column" gap={3}>
                                <DownloadOption
                                    label="Windows Universal Portable"
                                    download={release.downloadUrls.windows.portable.default}
                                    icon={<FaWindows />}
                                />
                                <DownloadOption
                                    label="Windows x64 Portable"
                                    download={release.downloadUrls.windows.portable.x64}
                                    icon={<FaWindows />}
                                />
                                <DownloadOption
                                    label="Windows ARM64 Portable"
                                    download={release.downloadUrls.windows.portable.arm64}
                                    icon={<FaWindows />}
                                />
                                <DownloadOption
                                    label="Windows 32-bit (ia32) Portable"
                                    download={release.downloadUrls.windows.portable.ia32}
                                    icon={<FaWindows />}
                                />
                            </Stack>
                        </Box>
                    </Stack>
                )}

                {platform === 'linux' && (
                    <Stack direction="column" gap={3}>
                        <DownloadOption
                            label="Linux AppImage"
                            download={release.downloadUrls.linux}
                            icon={<FaLinux />}
                        />
                    </Stack>
                )}
            </Stack>
        </Box>
    );
};
