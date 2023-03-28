import React from "react";
import {Box} from "@mui/material";
import {StyledButton, StyledContainer, StyledPaper, StyledTypography} from "../../styles/entry";
import {useNavigate} from "react-router-dom";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Entry = () => {

    const navigate = useNavigate();
    const handleSubmit  = () => {
        navigate("/game")
    };

    return (
        <StyledContainer maxWidth="md">
            <StyledPaper >
                <Box mb={8}>
                    <StyledTypography variant="h4" component="h1" color="black">World Countries IQ</StyledTypography>
                    <StyledTypography variant="subtitle1" color="black">How many countries can you name in 18 minutes?</StyledTypography>
                </Box>
                <StyledButton variant="contained" disableElevation
                                              endIcon={<ChevronRightIcon />}
                                              type="submit"
                                              onClick={()=>handleSubmit()}>
                                    Start Quiz
                                </StyledButton>
            </StyledPaper>
        </StyledContainer>
    );
};

export default Entry;
