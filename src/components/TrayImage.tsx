import { Image } from '@chakra-ui/react';
import { useColorModeValue } from './ui/color-mode';

export const TrayImage = () => {
    const trayImg = useColorModeValue(
        'https://github.com/MayGo/tockler/raw/master/screenshots/light/tockler-tray.png',
        'https://github.com/MayGo/tockler/raw/master/screenshots/dark/tockler-tray.png'
    );

    return <Image src={trayImg} alt="Tockler tray window interface" />;
};
