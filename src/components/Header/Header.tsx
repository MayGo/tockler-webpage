import { Box, Flex, HStack, IconButton } from '@chakra-ui/react';
import { type NextPage } from 'next';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { AwesomeDivider } from '../ui/AwesomeDivider';
import { ProductHuntButton } from '../ui/ProductHuntButton';
import { Logo } from './Logo';
import { TocklerLogoText } from './TocklerLogoText';

export const Header: NextPage = () => {
    return (
        <Box as="header" textAlign="left">
            <Flex flexDirection={['row', 'row']} align="center" justify="space-between" gap={5} maxW="full">
                <Logo />

                <Link href="/">
                    <TocklerLogoText height="25px" color="current" />
                </Link>

                <Box flex="1" />

                <HStack pr={3}>
                    <ProductHuntButton />
                    <IconButton
                        size="md"
                        fontSize="lg"
                        aria-label={`Go to github`}
                        variant="ghost"
                        color="current"
                        marginLeft="2"
                        asChild
                    >
                        <a href="https://github.com/MayGo/tockler" target="_blank">
                            <FaGithub />
                        </a>
                    </IconButton>

                    <IconButton
                        size="md"
                        fontSize="lg"
                        aria-label={`Email`}
                        variant="ghost"
                        color="current"
                        marginLeft="2"
                        asChild
                    >
                        <a href="mailto:info@trimatech.ee">
                            <MdEmail />
                        </a>
                    </IconButton>

                    <ColorModeSwitcher />
                </HStack>
            </Flex>
            <AwesomeDivider />
        </Box>
    );
};
