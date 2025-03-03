'use client';
import { Box } from '@chakra-ui/react';

import { useColorMode } from '~/components/ui/color-mode';

export const AwesomeDivider = () => {
    const { colorMode } = useColorMode();
    return <Box bg={colorMode === 'dark' ? 'gray.50' : 'mainGray'} height="4px" rounded="full" />;
};
