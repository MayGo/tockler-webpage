import { HStack, SimpleGrid } from '@chakra-ui/react';

import Link from 'next/link';
import { Button } from '../ui/button';

export default function Navlinks() {
    return (
        <SimpleGrid columns={[1, 1]} gap="4" flex="1" w="full">
            <HStack gap={4}>
                <Link href="/my-horoscope" passHref legacyBehavior>
                    <Button variant="ghost" color="black">
                        My Horoscope
                    </Button>
                </Link>
            </HStack>
        </SimpleGrid>
    );
}
