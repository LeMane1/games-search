import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
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
                    main: '#31d50e',
                    dark: '#27980d',
                    contrastText: '#fff',
                },
                secondary: {
                    light: '#676767',
                    main: '#e6e6e6',
                    dark: '#ba000d',
                    contrastText: '#000',
                },
            },
        },
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    components: {
        MuiAlert: {
            styleOverrides: {
                root: {
                    variants: [
                        {
                            props: { severity: 'info' },
                            style: {
                                backgroundColor: '#60a5fa',
                            },
                        },
                    ],
                },
            },
        },
    },
});

export default theme;