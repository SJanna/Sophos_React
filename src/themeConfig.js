import { createTheme } from "@mui/material";

const themeConfig = createTheme({
    palette: {
        primary: {
            // Morado
            main: "#5c6bc0",
        },
        secondary: {
            // Amarillo oscuro
            main: "#fbc02d",
        },
    },
    typography: {
        fontFamily: "Roboto",
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                },
            },
        },
    },
});

export default themeConfig;