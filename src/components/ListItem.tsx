import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

export const ListItem = ({
    children,
    emoticon
}: Readonly<{
    children: React.ReactNode;
    emoticon?: string;
}>) => {
    return (
        <Flex alignItems="center" pr={8}>
            {emoticon ? (
                <Text
                    fontSize="xl"
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
            ) : (
                <Box pr={4}>
                    <Box borderColor="primary" borderWidth={4} boxSize={5} borderRadius="full" />
                </Box>
            )}
            <Text fontSize="md">{children}</Text>
        </Flex>
    );
};
