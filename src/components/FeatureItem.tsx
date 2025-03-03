import { Box, Flex, Icon, Text } from '@chakra-ui/react';

export const FeatureItem = ({
    icon,
    title,
    children
}: Readonly<{ icon: React.ReactNode; title: string; children: React.ReactNode }>) => (
    <Box>
        <Flex pb={4} alignItems="center">
            <Box pr={4}>
                <Icon fontSize={['20px', '30px', '40px']} height={['20px', '30px', '40px']} color="primary">
                    {icon}
                </Icon>
            </Box>
            <Text fontSize={['large', 'x-large', 'x-large', 'xx-large']}> {title}</Text>
        </Flex>
        <Text fontSize="md">{children}</Text>
    </Box>
);
