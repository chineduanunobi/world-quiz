import React, {useContext, useEffect, useState} from 'react';
import {
    Button,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import TextField from '@mui/material/TextField';
import {
    StyledContainer,
    StyledGrid,
    StyledGrid1,
    StyledTable,
    StyledTableCell4, StyledTableContainer
} from "../../styles/game";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import {PlayerContext} from "./PlayerContext";
import countriesData from "../../scripts/countries.json";

const Game = () => {

    const [score, setScore] = useState(0);
    const [answer, setAnswer] = useState("");
    const [currentCountry, setCurrentCountry] = useState("");
    const [quizEnded, setQuizEnded] = useState(false);
    const [helperText, setHelperText] = useState("");
    const [answeredCountries, setAnsweredCountries] = useState([]);
    const { counter, setCounter } = useContext(PlayerContext);
    const [previousCountry, setPreviousCountry] = useState("");
    const [groupedCountries, setGroupedCountries] = useState({Africa: [],
        Antarctica: [],
        Asia: [],
        Europe: [],
        "North America": [],
        Oceania: [],
        "South America": [],
    });

    useEffect(() => {
        setAnsweredCountries(countriesData);
    }, []);

    const handleInputChange = (event) => {
        const {value} = event.target;
        setAnswer(value);

        // Check if the user's answer matches any country in the JSON data
        const matchingCountry = countriesData.find(
            (country) => country.country.toLowerCase() === value.toLowerCase()
        );
        if (matchingCountry) {
            if (answeredCountries.includes(matchingCountry.country)) {
                // alert("You've already answered this country!");
                setHelperText(`${matchingCountry.country} already entered`);
                return;
            } else if (matchingCountry.country === previousCountry) {
                setHelperText(`${matchingCountry.country} already entered. Enter a new country.`);
            } else {
                // If the user's answer matches a country, update the current country and reset the answer
                const updatedAnsweredCountries = [...answeredCountries, matchingCountry.country].sort();
                setCurrentCountry(updatedAnsweredCountries);
                setPreviousCountry(matchingCountry.country);
                setAnswer("");
                setScore(score + 1); // Update the score
                setAnsweredCountries(updatedAnsweredCountries);

                // Update the grouped countries state with the new country
                const newGroupedCountries = { ...groupedCountries };
                const continent = matchingCountry.continent;
                newGroupedCountries[continent] = [
                    ...newGroupedCountries[continent],
                    matchingCountry.country,
                ].sort();
                setGroupedCountries(newGroupedCountries);
            }
        } else {
            setHelperText("");
        }
    };

    const handleEndQuiz = () => {
        setScore(0);
        setAnsweredCountries([]);
        setAnswer("");
        setHelperText("");
        setQuizEnded(true);
        // reload page when "end quiz" button is clicked
        window.location.reload();
    };

    // maths function to convert seconds to 00:00 format
    function secondsToHms(counter) {
        let d = Number(counter);

        // maths logic that returns minutes and seconds
        if (d <= 0) {
            return "00:00:00";
        } else {
            let m = Math.floor((d % 3600) / 60);
            let s = Math.floor((d % 3600) % 60);

            let mDisplay = m <= 9 ? "0" + m + ":" : m + ":";
            let sDisplay = s <= 9 ? "0" + s : s;

            return mDisplay + sDisplay;
        }
    };

    // define a function to handle the timer tick
    const handleTimerTick = () => {
        // update the remaining time
        setCounter((time) => time - 1);
    };
    // start the timer when the component mounts
    React.useEffect(() => {
        const timer = setInterval(handleTimerTick, 1000);

        // clean up the timer when the component unmounts
        return () => clearInterval(timer);
    }, []);
    React.useEffect(() => {
        if (counter === 0) {
            handleEndQuiz();
        }
    }, [counter]);

    return (
        <StyledContainer maxWidth="md">
            <TextField
                id="country"
                label="Enter country here"
                variant="outlined"
                value={answer}
                onChange={handleInputChange}
                placeholder="Enter country here"
                helperText={helperText}
                error={Boolean(helperText)}
                disabled={quizEnded}
                sx={{marginTop: 6}}
            />
            <StyledGrid container>
                <Grid item>
                    <Typography>Your current score is: {score}/195</Typography>
                </Grid>
                <StyledGrid1 item>
                    <Button item color="secondary">
                        {" "}
                        <AccessAlarmIcon/> {secondsToHms(counter)}{" "}
                    </Button>
                </StyledGrid1>
                <Grid item>
                        <Button variant="contained" color="primary"
                                onClick={handleEndQuiz}>
                            {score === 0 ? "Start Quiz" : "End Quiz"}
                        </Button>
                </Grid>
            </StyledGrid>
            <Grid>
                <Grid item>
                    <StyledTableContainer component={Paper}>
                        <StyledTable aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell4 align="center">Continent</StyledTableCell4>
                                    <TableCell align="center">Countries</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Object.keys(groupedCountries).map((continent) => (
                                    <TableRow key={continent}>
                                        <StyledTableCell4 align="center">{continent}</StyledTableCell4>
                                        <TableCell>{groupedCountries[continent].join(", ")}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </StyledTable>
                    </StyledTableContainer>
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default Game;

