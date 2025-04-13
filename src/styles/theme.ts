'use client'

import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    cssVariables: true,
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    light: '#757ce8',
                    main: '#31d50e',
                    dark: '#002884',
                    contrastText: '#fff',
                },
                secondary: {
                    light: '#ff7961',
                    main: '#f44336',
                    dark: '#ba000d',
                    contrastText: '#000',
                },
            },
        },
        dark: {
            palette: {
                primary: {
                    light: '#757ce8',
                    main: '#ffffff',
                    dark: '#ececec',
                    contrastText: '#1b1b1b',
                },
                secondary: {
                    light: '#676767',
                    main: '#e6e6e6',
                    dark: '#cdcdcd',
                    contrastText: '#000',
                },
            },
        },
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(37, 37, 37, 0.5)',
                    backdropFilter: 'blur(10px)',
                },
            },
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(37, 37, 37, 0.6)',
                    backdropFilter: 'blur(10px)',
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 'bolder',
                    padding: '6px 20px'
                }
            }
        },
    },
});

export default theme;