import { Container, Grid, styled, Table, TableCell, TableContainer} from "@mui/material";
import theme from "../../theme";

export const StyledContainer = styled(Container)({
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    height: '100vh',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
})

export const StyledGrid = styled(Grid)({
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
})

export const StyledGrid1 = styled(Grid)({
    textAlign: "right",
})

export const StyledTableContainer = styled(TableContainer)({
    margin: "auto",
    background: "inherit",
    borderWidth: 2,
    borderColor: "white",
    borderStyle: "solid"
})

export const StyledTableCell4 = styled(TableCell)({
    borderRightStyle: "solid",
    borderRightColor: "white",
})

export const StyledTable = styled(Table)({
    minWidth: 450,
    backgroundColor: "rgb(38, 48, 59)",
    maxWidth: "100%",
    overflowX: "auto",
})


