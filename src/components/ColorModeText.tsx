'use client';

import { useColorModeValue } from './theme/color-mode';

export const ColorModeText = () => {
    const colorModeText = useColorModeValue('dark', 'light');

    return <>{colorModeText}</>;
};
