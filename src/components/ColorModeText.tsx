'use client';

import { useColorModeValue } from './ui/color-mode';

export const ColorModeText = () => {
    const colorModeText = useColorModeValue('dark', 'light');

    return <>{colorModeText}</>;
};
