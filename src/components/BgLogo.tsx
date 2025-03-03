'use client';

import { Box } from '@chakra-ui/react';
import { TocklerLogo } from './Header/TocklerLogo';

export function BgLogo() {
    return (
        <Box position="absolute" top="100px" transform="translateX(10%)" zIndex={1} overflow="hidden">
            <TocklerLogo boxSize="800px" color="primary" />
        </Box>
    );
}
