'use client';
import { createSystem, defaultConfig, defineConfig, mergeConfigs } from '@chakra-ui/react';

import { mainGray } from './theme.utils';

export const MAIN_THEME_COLOR = '#7C3AED';

const myConfig = defineConfig({
    globalCss: {
        html: {
            colorPalette: 'black',
            scrollBehavior: 'smooth !important',

            '--chakra-radii-l1': 'xl',
            '--chakra-radii-l2': '2xl',
            '--chakra-radii-l3': 'xl'
        },
        body: {
            color: { _light: mainGray, _dark: 'gray.50' },
            backgroundColor: { _light: 'gray.50', _dark: 'gray.900' }
        }
    },
    theme: {
        tokens: {
            colors: {
                primary: {
                    value: MAIN_THEME_COLOR
                },
                black: {
                    value: '#000000'
                },
                mainGray: {
                    value: mainGray
                }
            },
            fonts: {
                body: { value: 'var(--font-geist-sans), sans-serif' },
                heading: { value: 'var(--font-mplus), sans-serif' }
            }
        },
        semanticTokens: {
            radii: {
                l1: { value: '{radii.2xl}' },
                l2: { value: '{radii.2xl}' },
                l3: { value: '{radii.2xl}' }
            }
        }
        // recipes: {
        //     Button: {
        //         variants: {
        //             variant: {
        //                 custom: {
        //                     borderRadius: 'full',
        //                     bg: 'blue',
        //                     color: 'white',
        //                     textTransform: 'uppercase'
        //                 }
        //             }
        //         }
        //     }
        // }
    }
});

const config = mergeConfigs(defaultConfig, myConfig);

export const sytemTheme = createSystem(config);
