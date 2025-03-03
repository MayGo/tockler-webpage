import { Box, Flex, Icon, Text } from '@chakra-ui/react';

export const FeatureItem = ({
    icon,
    title,
    children
}: Readonly<{ icon: React.ReactNode; title: string; children: React.ReactNode }>) => (
    <Box>
        <Flex pb={5} alignItems="flex-end">
            <Box pr={5}>
                <Icon
                    fontSize={['20px', '30px', '50px', '60px']}
                    height={['20px', '30px', '50px', '60px']}
                    color="primary"
                >
                    {icon}
                </Icon>
            </Box>
            <Text fontSize={['large', 'x-large', 'x-large', 'xx-large']}> {title}</Text>
        </Flex>
        <Text fontSize="md">{children}</Text>
    </Box>
);
