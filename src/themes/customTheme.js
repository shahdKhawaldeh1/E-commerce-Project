import {createTheme} from "@mui/material";


 let theme = createTheme({
    palette: {
        
        darkTeal:{
            main: '#17494D',
            light: '#237076',
            dark: '#12383b',
            contrastText: '#FFFFFF',
        },
        primary: {
            main: '#1B4B66',
            light: '#25678d',
            dark: '#102c3c',
            contrastText: '#FFFFFF',
        },
        primaryTint: {
            main: '#639599',
            light: '#579da2',
            dark: '#6a8d90',
            contrastText: '#FFFFFF',
        },
        error: {
            main: '#B00020',
            light: '#ef5350',
            dark: '#c62828',
            contrastText: '#FFFFFF',
        },
        accent: {
            main: '#F4F4F4',
            light: '#ffffff',
            dark: '#cccccc',
            contrastText: '#1a1a1a',
        },
        cc: {
            main: '#17494D',
            light: '#ffffff',
            dark: '#cccccc',
            contrastText: '#1a1a1a',
        },
        dark: {
            main: '#13101E',
            light: '#201b32',
            dark: '#000000',
            contrastText: '#FFFFFF',
        },
        bright: {
            main: '#FFFFFF',
            light: '#FFFFFF',
            dark: '#e6e6e6',
            contrastText: '#000000',
        },
        grey: {
            main: '#F1F1F1',
            light: '#ffffff',
            dark: '#d9d9d9',
            contrastText: '#000000',
        },
        lightText: {
            main: '#B6B6B6',
            light: '#cccccc',
            dark: '#a6a6a6',
            contrastText: '#FFFFFF',
        },
        TypeHighEmphasis: {
            main: '#171520',
            light: '#2c283e',
            dark: '#000000',
            contrastText: '#FFFFFF',
        },
        TypeLowEmphasis: {
            main: '#626262',
            light: '#737373',
            dark: '#4d4d4d',
            contrastText: '#FFFFFF',
        },
    },
    typography: {

        h1: {
            fontFamily: 'Inter, sans-serif',
            fontSize: '40px',
            fontWeight: 700,
            lineHeight: 1.3,
            '@media (min-width: 320px)': {
                fontSize: '22px',
            },
            '@media (min-width: 768px)': {
                fontSize: '30px',
            },
            '@media (min-width: 1024px)': {
                fontSize: '40px'
            },


        },
        h2: {
            fontSize: '34px',
            fontWeight: 600,
            fontFamily: 'Inter',
            lineHeight: 1.3,
            '@media (min-width: 320px)': {
                fontSize: '14px',
            },
            '@media (min-width: 375px)': {
                fontSize: '16px',
            },
            '@media (min-width: 425px)': {
                fontSize: '18px',

            },
            '@media (min-width: 768px)': {
                fontSize: '25px',
            },
            '@media (min-width: 1024px)': {
                fontSize: '34px',
            },
        },
        h3: {
            fontSize: '20px',
            fontWeight: 600,
            fontFamily: 'Inter',
            lineHeight: 1.3,
            '@media (min-width: 320px)': {
                fontSize: '18px',
            },

            '@media (min-width: 425px)': {
                fontSize: '20px',

            },
            '@media (min-width: 768px)': {
                fontSize: '20px',
            },
            '@media (min-width: 1024px)': {
                fontSize: '20px',
            },
            '@media (min-width: 1400px)': {
                fontSize: '20px',
            },
        },
        h4: {
            fontSize: '14px',
            fontWeight: 500,
            fontFamily: 'Inter',
            lineHeight: 1.3,
            '@media (min-width: 320px)': {
                fontSize: '12px',
            },

            '@media (min-width: 1024px)': {
                fontSize: '14px',
            },
        },
        h5: {
            fontSize: '14px',
            fontWeight: 600,
            fontFamily: 'Inter',
            lineHeight: 1.3,
            '@media (min-width: 320px)': {
                fontSize: '12px',
            },
            '@media (min-width: 768px)': {
                fontSize: '14px',
            },
        },
        h6: {
            fontSize: '14px',
            fontWeight: 400,
            fontFamily: 'Inter',
            lineHeight: 1.3,
            '@media (min-width: 320px)': {
                fontSize: '12px',
            },
            '@media (min-width: 768px)': {
                fontSize: '14px',
            }

        },
        body1: {
            fontSize: '16px',
            fontWeight: 500,
            fontFamily: 'Inter',
            lineHeight: 1.25,
            '@media (min-width: 320px)': {
                fontSize: '14px',
            },
            '@media (min-width: 768px)': {
                fontSize: '14px',
            },

            '@media (min-width: 1024px)': {
                fontSize: '16px',
            },

        },
        body2: {
            fontSize: '16px',
            fontWeight: 400,
            fontFamily: 'Inter',
            lineHeight: 1.25,
            '@media (min-width: 320px)': {
                fontSize: '12px',
            },
            '@media (min-width: 768px)': {
                fontSize: '14px',
            },

            '@media (min-width: 1024px)': {
                fontSize: '16px',
            },

        },

        subtitle1: {
            fontSize: '12px',
            fontWeight: 500,
            lineHeight: 1.2,
            fontFamily: 'Inter',
            '@media (min-width: 320px)': {
                fontSize: '10px',
            },
            '@media (min-width: 768px)': {
                fontSize: '12px',
            }
        },
        subtitle2: {
            fontSize: '12px',
            fontWeight: 600,
            lineHeight: 1.2,
            fontFamily: 'Inter',
            '@media (min-width: 320px)': {
                fontSize: '10px',
            },
            '@media (min-width: 768px)': {
                fontSize: '12px',
            }
        },
    },

});


theme = createTheme(theme, {
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderWidth: '2px',
                    borderRadius: '8px'
                },
            },
        },
        MuiTab: {
            styleOverrides : {
                root: {
                    textTransform: 'none',
                    '&.Mui-selected' : {
                        backgroundColor:  theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                        margin: '1rem',
                        borderRadius: '12px',
                    },
                },
            }

        },
        MuiTable: {
            styleOverrides : {
                root: {
                    "& .MuiTableCell-head": {
                        color: theme.palette.TypeLowEmphasis.main,
                    }
                },
            }

        },
        MuiTableCell: {
            styleOverrides : {
                root: {
                    borderBottom: "none",
                }
            }

        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    backgroundColor: '#F1F1F1',
                    "& fieldset": { borderColor: '#F1F1F1' },
                    "& .MuiFormHelperText-root" : { color: theme.palette.error.main, backgroundColor: 'white', width: '100%', padding:0, margin: 0 },
                },
            },
        },
    },
});

export default theme;
