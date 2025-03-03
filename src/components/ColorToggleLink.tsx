'use client';

import { Link } from '@chakra-ui/react';
import { useColorMode } from './ui/color-mode';

export const ColorToggleLink = ({ children }: { children: React.ReactNode }) => {
    const { toggleColorMode } = useColorMode();

    return (
        <Link color="blue.500" onClick={toggleColorMode}>
            {children}
        </Link>
    );
};
