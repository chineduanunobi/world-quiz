import React from "react";
import {Grid} from "@mui/material";
import {StyledButton, StyledContainer, StyledGrid, StyledPaper, StyledTypography} from "../../styles/entry";
import {useNavigate} from "react-router-dom";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Entry = () => {

    const navigate = useNavigate();
    const handleSubmit  = () => {
        navigate("/game")
    };

    return (
        <StyledContainer maxWidth="md">
            <StyledPaper>
                <Grid container spacing={10}>
                    <StyledGrid item xs={12}>
                        <StyledTypography> World Countries IQ </StyledTypography>
                        <StyledTypography> How many countries can you name in 18 minutes? </StyledTypography>
                        <StyledButton variant="contained" disableElevation
                                      endIcon={<ChevronRightIcon />}
                                      type="submit"
                                      onClick={()=>handleSubmit()}>
                            Start Quiz
                        </StyledButton>
                    </StyledGrid>
                </Grid>
            </StyledPaper>
        </StyledContainer>
    );
};

export default Entry;
