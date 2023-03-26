import { red } from "@mui/material/colors";
import {createTheme} from "@mui/material/styles";


const theme = createTheme({
    palette: {
        primary: {
            main: "#37084b",
            //"#4d5761"
        },
        secondary: {
            main: "#19857b",
        },
        error: {
            main: red.A400,
        },
        background: {
            default: "rgb(38, 48, 59)",
        },
        text: {
            primary: "#fff",
        },
    },
    overrides: {
        MuiButton: {
            outlined: {
                border: "2px solid rgba(0, 0, 0, 0.23)",
            },
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 450,
            md: 600,
            lg: 900,
            xl: 1200
        }
    }
} );

export default theme;
