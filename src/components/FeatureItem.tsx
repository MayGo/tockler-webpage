import { Box, Flex, Text } from '@chakra-ui/react';

export const FeatureItem = ({
    emoticon,
    title,
    children
}: Readonly<{
    emoticon: string;
    title: string;
    children: React.ReactNode;
}>) => (
    <Box>
        <Flex pb={4} alignItems="center">
            <Text
                fontSize={['10px', '15px', '20px']}
                mr={4}
                lineHeight={1}
                bg="primary/10"
                borderRadius="full"
                p={4}
                border="1px solid"
                borderColor="primary/50"
            >
                {emoticon}
            </Text>
            <Text fontSize={['large', 'x-large', 'x-large', 'xx-large']}> {title}</Text>
        </Flex>
        <Text fontSize="md" lineHeight="1.7" textAlign="justify">
            {children}
        </Text>
    </Box>
);
