import { Box, Flex, Text } from '@chakra-ui/react';

export const ListItem = ({ children }: Readonly<{ children: React.ReactNode }>) => (
    <Flex alignItems="center">
        <Box pr={4}>
            <Box borderColor="primary" borderWidth={4} boxSize={5} borderRadius="full" />
        </Box>
        <Text fontSize="md">{children}</Text>
    </Flex>
);
