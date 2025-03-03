'use client';

import Image from 'next/image';
import { useColorModeValue } from '../theme/color-mode';

export const ProductHuntButton = () => {
    const colorProductHunt = useColorModeValue('light', 'dark');
    return (
        <a
            href="https://www.producthunt.com/posts/tockler?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-tockler"
            target="_blank"
            rel="noreferrer"
        >
            <Image
                src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=304890&theme=${colorProductHunt}`}
                alt="Tockler - Automatically track applications usage and working time. | Product Hunt"
                style={{ width: '150px', height: '32px' }}
                width="150"
                height="32"
            />
        </a>
    );
};
