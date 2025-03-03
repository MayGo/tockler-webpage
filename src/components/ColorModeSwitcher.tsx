'use client';

import { IconButton, IconButtonProps } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useColorMode, useColorModeValue } from './theme/color-mode';

export const ColorModeSwitcher = (props: IconButtonProps) => {
    const { toggleColorMode } = useColorMode();
    const text = useColorModeValue('dark', 'light');
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);

    return (
        <IconButton
            size="md"
            fontSize="lg"
            aria-label={`Switch to ${text} mode`}
            variant="ghost"
            color="current"
            marginLeft="2"
            onClick={toggleColorMode}
            {...props}
        >
            <SwitchIcon />
        </IconButton>
    );
};
