import {Button, Container, Grid, Paper, styled, Typography} from "@mui/material";
import theme from "../../theme";
import map from "../../images/world-map.jpeg";
import "@fontsource/montez";


export const StyledPaper = styled(Paper)({
    position: "relative",
    marginTop: theme.spacing(2),
    backgroundImage: `url(${map})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: theme.spacing(25),
    alignItems: "center",
    height: 150,
});

export const StyledContainer = styled(Container)({
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

export const StyledTypography = styled(Typography)({
    fontFamily: '"Montez", "cursive"',
    fontSize: "large",
    fontWeight: "bold",
    color: "black",
})

export const StyledGrid = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

})

export const StyledButton = styled(Button)({
    //marginBottom: theme.spacing(2),
    //alignSelf: "flex-end"
    //marginTop: theme.spacing(2),
})
