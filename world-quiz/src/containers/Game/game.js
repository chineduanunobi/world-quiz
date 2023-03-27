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
    StyledTableCell,
    StyledTableCell2
} from "../../styles/game";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import {PlayerContext} from "./PlayerContext";
import countriesData from "../../scripts/countries.json";

const Game = () => {

    // const { counter } = useContext(PlayerContext);

    const [score, setScore] = useState(0);
    const [answer, setAnswer] = useState("");
    const [currentCountry, setCurrentCountry] = useState("");
    const [quizEnded, setQuizEnded] = useState(false);
    const [helperText, setHelperText] = useState("");
    const [answeredCountries, setAnsweredCountries] = useState([]);
    const { counter, setCounter } = useContext(PlayerContext);
    const [previousCountry, setPreviousCountry] = useState("");

    useEffect(() => {
        setAnsweredCountries(countriesData);
    }, []);

    const continents = {
        Africa: [],
        Antarctica: [],
        Asia: [],
        Europe: [],
        North_America: [],
        Oceania: [],
        South_America: [],
    };

    const groupedCountries = answeredCountries.reduce((accumulator, currentValue) => {
        if (!accumulator[currentValue.continent]) {
            accumulator[currentValue.continent] = [];
        }
        accumulator[currentValue.continent].push(currentValue.country);
        return accumulator;
    }, continents);


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
                setCurrentCountry([...answeredCountries, matchingCountry.country]);
                setPreviousCountry(matchingCountry.country);
                setAnswer("");
                setScore(score + 1); // Update the score
                setAnsweredCountries([...answeredCountries, matchingCountry.country]);
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
        setCounter(1080);
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
                <TableContainer component={Paper}>
                    <StyledTable>
                        <TableHead>
                            <TableRow>
                                <TableCell>Continent</TableCell>
                                <TableCell>Countries</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Object.keys(groupedCountries).map((continent) => (
                                <TableRow key={continent}>
                                    <StyledTableCell2>{continent}</StyledTableCell2>
                                    <StyledTableCell2>{groupedCountries[continent].sort().join(", ")}</StyledTableCell2>
                                </TableRow>
                            ))}
                        </TableBody>
                    </StyledTable>
                </TableContainer>
            </Grid>
        </StyledContainer>
    );
};

export default Game;

// const Game = () => {
//
//     const { counter } = useContext(PlayerContext);
//
//     const [score, setScore] = useState(0);
//     const [answer, setAnswer] = useState("");
//     const [currentCountry, setCurrentCountry] = useState("");
//     const [quizEnded, setQuizEnded] = useState(false);
//     const [answeredCountries, setAnsweredCountries] = useState([]);
//
//     const handleInputChange = (event) => {
//         const {value} = event.target;
//         setAnswer(value);
//
//         // Check if the user's answer matches any country in the JSON data
//         const matchingCountry = countriesData.find(
//             (country) => country.country.toLowerCase() === value.toLowerCase()
//         );
//         if (matchingCountry) {
//             if (answeredCountries.includes(matchingCountry.country)) {
//                 // alert("You've already answered this country!");
//                 setAnswer("");
//                 return;
//             } else {
//                 // If the user's answer matches a country, update the current country and reset the answer
//                 setCurrentCountry(matchingCountry.country);
//                 setAnswer("");
//                 setScore(score + 1); // Update the score
//                 setAnsweredCountries([...answeredCountries, matchingCountry.country]);
//             }}
//     };
//
//     const handleEndQuiz = () => {
//         setQuizEnded(true);
//     };
//
//     const helperText = answeredCountries.includes(answer)
//         ? "You've already answered this country!"
//         : null;
//
//     // maths function to convert seconds to 00:00 format
//     function secondsToHms(counter) {
//         let d = Number(counter);
//
//         // maths logic that returns minutes and seconds
//         if (d <= 0) {
//             return "00:00:00";
//         } else {
//             let m = Math.floor((d % 3600) / 60);
//             let s = Math.floor((d % 3600) % 60);
//
//             let mDisplay = m <= 9 ? "0" + m + ":" : m + ":";
//             let sDisplay = s <= 9 ? "0" + s : s;
//
//             return mDisplay + sDisplay;
//         }
//     };
//
//     return (
//         <StyledContainer maxWidth="md">
//             <TextField
//                 id="country"
//                 label="Enter country here"
//                 variant="outlined"
//                 value={answer}
//                 onChange={handleInputChange}
//                 placeholder="Enter country here"
//                 helperText={helperText}
//                 error={Boolean(helperText)}
//                 disabled={quizEnded}
//                 sx={{marginTop: 6}}
//             />
//             <p>{currentCountry}</p>
//             <StyledGrid container>
//                 <Grid item>
//                     <Typography>Your current score is: {score}/195</Typography>
//                 </Grid>
//                 <StyledGrid1 item>
//                     <Button item color="secondary">
//                         {" "}
//                         <AccessAlarmIcon/> {secondsToHms(counter)}{" "}
//                     </Button>
//                 </StyledGrid1>
//                 <Grid item>
//                     {!quizEnded && (
//                         <Button variant="contained" color="primary"
//                                 onClick={handleEndQuiz}>
//                             End Quiz
//                         </Button>
//                     )}
//                 </Grid>
//             </StyledGrid>
//         </StyledContainer>
//     );
// };

// const { counter } = useContext(PlayerContext);
//
// const [score, setScore] = useState(0);
// const [previousAnswers, setPreviousAnswers] = useState([]);
// const [inputValue, setInputValue] = useState("");
// const [helperText, setHelperText] = useState("");
//
// const handleInputChange = (event) => {
//     const { value } = event.target;
//     setInputValue(value);
//
//     const matchingCountry = countriesData.find(
//         (country) => country.country.toLowerCase() === value.toLowerCase()
//     );
//
//     if (matchingCountry) {
//         if (previousAnswers.includes(matchingCountry.country)) {
//             setHelperText(`${matchingCountry.country} already entered`);
//         } else {
//             setPreviousAnswers([...previousAnswers, matchingCountry.country]);
//             setScore(score + 1);
//             setInputValue("");
//             setHelperText(`Correct! ${matchingCountry.country} is in ${matchingCountry.continent}`);
//         }
//     } else {
//         setHelperText("");
//     }
// };
//
// const handleEndQuiz = () => {
//     setScore(0);
//     setPreviousAnswers([]);
//     setInputValue("");
//     setHelperText("");
// };
//
// // maths function to convert seconds to 00:00 format
// function secondsToHms(counter) {
//     let d = Number(counter);
//
//     // maths logic that returns minutes and seconds
//     if (d <= 0) {
//         return "00:00:00";
//     } else {
//         let m = Math.floor((d % 3600) / 60);
//         let s = Math.floor((d % 3600) % 60);
//
//         let mDisplay = m <= 9 ? "0" + m + ":" : m + ":";
//         let sDisplay = s <= 9 ? "0" + s : s;
//
//         return mDisplay + sDisplay;
//     }
// };
//
// return (
//     <StyledContainer maxWidth="md">
//         <TextField
//             label="Enter a country"
//             variant="outlined"
//             value={inputValue}
//             onChange={handleInputChange}
//             helperText={helperText}
//             error={Boolean(helperText)}
//             sx={{marginTop: 6}}
//         />
//         <StyledGrid container>
//             <Grid item>
//                 <Typography>Your current score is: {score}/195</Typography>
//             </Grid>
//             <StyledGrid1 item>
//                 <Button item color="secondary">
//                     {" "}
//                     <AccessAlarmIcon/> {secondsToHms(counter)}{" "}
//                 </Button>
//             </StyledGrid1>
//             <Grid item>
//                 <Button onClick={handleEndQuiz}>{score === 0 ? "Start Quiz" : "End Quiz"}
//                 </Button>
//             </Grid>
//         </StyledGrid>
//     </StyledContainer>
// );
