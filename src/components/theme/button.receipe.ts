import { defineRecipe } from '@chakra-ui/react';

export const buttonRecipe = defineRecipe({
    base: {
        display: 'flex'
    },
    variants: {
        variant: {
            outline: { borderColor: { base: 'gray.900', _dark: 'gray.50' } }
        }
    }
});
