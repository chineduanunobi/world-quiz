import {Button, Container, Grid, styled, Table, TableCell} from "@mui/material";
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

export const StyledButton = styled(Button)({
    color: "primary",
})

export const StyledTable = styled(Table)({
    minWidth: 650,
    backgroundColor: '#f0f0f0',
    display: 'flex',
    flexDirection: 'column',
})

export const StyledTableCell = styled(TableCell)({
    fontWeight: 'bold',
    color: '#333',
})

export const StyledTableCell2 = styled(TableCell)({
    color: '#555',
})
