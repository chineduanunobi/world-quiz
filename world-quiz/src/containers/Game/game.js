import React from 'react';
import {Button, Grid, Typography} from "@mui/material";
import TextField from '@mui/material/TextField';
import {StyledContainer, StyledGrid, StyledGrid1} from "../../styles/game";

const Game = () => {

    const handleEndQuiz = () => {

    }

    return (
        <StyledContainer maxWidth="md">
            <TextField
            id="country"
            label="Enter country here"
            variant="outlined"
            placeholder="Enter country here"
            sx={{ marginTop: 6 }}
            />
            <StyledGrid container>
                <Grid item>
                    <Typography>Score</Typography>
                </Grid>
                <StyledGrid1 item>
                    <Typography>Timer</Typography>
                </StyledGrid1>
                <Grid item>
                    <Button variant="contained" color="primary"
                    onClick={handleEndQuiz}>
                        End Quiz
                    </Button>
                </Grid>
            </StyledGrid>
        </StyledContainer>
    );
};

export default Game;
