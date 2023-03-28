import {Button, Container, Grid, Paper, styled, Typography} from "@mui/material";
import theme from "../../theme";
import map from "../../images/world-map.jpeg";
import "@fontsource/montez";

export const StyledContainer = styled(Container)({
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

export const StyledPaper = styled(Paper)({
    textAlign: 'center',
    backgroundImage: `url(${map})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    padding: theme.spacing(15),
    alignItems: "center",
})

export const StyledTypography = styled(Typography)({
    fontFamily: '"Montez", "cursive"',
    fontSize: "x-large",
    fontWeight: "bold",
    color: "black",
})

export const StyledButton = styled(Button)({
    marginTop: theme.spacing(5),
})

