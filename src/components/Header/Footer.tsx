import { Box, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import NextLink from 'next/link';

import { PRIVACY_POLICY_LINK, TERMS_AND_CONDITIONS_LINK } from '~/utils/constants';
import { AwesomeDivider } from '../ui/AwesomeDivider';

export const Footer: NextPage = () => {
    return (
        <Box as="footer" w="full" mt={6}>
            <AwesomeDivider />
            <Flex
                flexDirection={['column', 'column', 'column', 'row']}
                justifyContent="space-between"
                alignItems="center"
                w="full"
                h="full"
            >
                <Text textStyle="sm">
                    Created by Maigo Erit @{' '}
                    <a href="https://trimatech.dev" target="_blank">
                        trimatech.dev
                    </a>
                </Text>

                <Flex gap={6} py={[4]}>
                    <NextLink href={PRIVACY_POLICY_LINK} passHref target="_blank">
                        <Text textStyle="sm">Privacy Policy</Text>
                    </NextLink>
                    <NextLink href={TERMS_AND_CONDITIONS_LINK} passHref target="_blank">
                        <Text textStyle="sm">Terms of service</Text>
                    </NextLink>
                </Flex>
            </Flex>
        </Box>
    );
};
