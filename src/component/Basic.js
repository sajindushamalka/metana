import React, { useState, useCallback, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { countries } from "./country";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";

const Questions = [
  {
    qun: "Before we start, what is your name?",
  },
  {
    qun: "What's your email address?",
    sub: "This is how we'll contact you.",
  },
  {
    qun: "Which country you are from?",
  },
  {
    qun: "What is your phone number?",
  },
  {
    qun: "What languages and frameworks are you familiar with?",
    sub: "Select all the languages you know.",
  },
  {
    qun: "How would you describe your current level of coding experience?",
  },
  {
    qun: "What is your current annual compensation? (Optional)",
    sub: "Disclaimer: The information provided regarding salary will be kept confidential and will not be used as a determining factor for acceptance into the bootcamp. It will be used exclusively for career advancement guidance.",
  },
  {
    qun: "Certifying StatementThis question is required.*",
    sub: "I hereby acknowledge that this application form was completed by me (the individual seeking to enroll in Metana) and I did not receive help from any external sources. The responses submitted are entirely my own and based on my own reasoning. Also, I opt in to receive communication messages from Metana about my application.",
  },
  {
    qun: "LinkedIn URL (optional)",
    sub: "Here's a sniper link to make your life easy - linkedin.com (It'll open in a new tab) 🚀",
  },
];

export default function Basic() {
  const [count, setCount] = useState(0);
  const [conditionStatus, setCondictionStatus] = useState(false);

  console.log(conditionStatus)

  const increaseCount = () => {
    if (count == 8) {
    } else {
      setCount(count + 1);
    }
  };

  const descraseCount = () => {
    if (count == 0) {
    } else {
      setCount(count - 1);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{paddingBottom:2}}>
        <Box sx={{ backgroundColor: "Black", padding: 1 }}>
          <Typography color={"White"} gutterBottom>
            BuildForm
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs>
          <Box sx={{ padding: 1 }}>
            {count != 0 ? (
              <Box
                sx={{
                  padding: 2,
                  backgroundColor: "#0abab5 ",
                  borderRadius: 3,
                }}
              >
                <Typography color={"GrayText"} gutterBottom>
                  0{count}. {Questions[count - 1].qun}
                </Typography>
                <Button
                  variant="outlined"
                  onClick={descraseCount}
                  sx={{ backgroundColor: "GrayText", color: "white" }}
                >
                  {"< Back"}
                </Button>
              </Box>
            ) : (
              <></>
            )}
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box
            sx={{
              padding: 2,
              backgroundColor: "aqua",
              borderRadius: 3,
              height: "auto",
            }}
          >
            <Typography variant="h6" gutterBottom>
              0{count + 1}. {Questions[count].qun}
            </Typography>
            <Typography color={"#696969 "}>{Questions[count].sub}</Typography>
            <Box sx={{ padding: 2 }}>
              {count === 0 ? (
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "90ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField label="First Name" color="info" />
                  <TextField label="Last Name" color="info" />
                  <Button
                    variant="outlined"
                    sx={{
                      backgroundColor: "#000039",
                      marginTop: 2,
                      marginRight: 10,
                    }}
                  >
                    Ok
                  </Button>
                </Box>
              ) : count == 1 ? (
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "90ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField label="Email" color="info" />
                  <Button
                    variant="outlined"
                    sx={{
                      backgroundColor: "#000039",
                      marginTop: 2,
                      marginRight: 10,
                    }}
                  >
                    Ok
                  </Button>
                </Box>
              ) : count == 2 ? (
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "90ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <InputLabel>Country</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Country"
                    sx={{ width: 600 }}
                  >
                    {countries.map((country, index) => (
                      <MenuItem key={index} value={country}>
                        {country}
                      </MenuItem>
                    ))}
                    <MenuItem value={10}>Ten</MenuItem>
                  </Select>
                  <Box></Box>
                  <Button
                    variant="outlined"
                    sx={{
                      backgroundColor: "#000039",
                      marginTop: 2,
                      marginRight: 10,
                    }}
                  >
                    Ok
                  </Button>
                </Box>
              ) : count == 3 ? (
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "90ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField label="Number" color="info" type="number" />
                  <Button
                    variant="outlined"
                    sx={{
                      backgroundColor: "#000039",
                      marginTop: 2,
                      marginRight: 10,
                    }}
                  >
                    Ok
                  </Button>
                </Box>
              ) : count == 4 ? (
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "90ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <FormControlLabel
                        control={<Checkbox name="gilad" />}
                        label="Solidity"
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <FormControlLabel
                        control={<Checkbox name="gilad" />}
                        label="Rust"
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <FormControlLabel
                        control={<Checkbox name="gilad" />}
                        label="Node.js"
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <FormControlLabel
                        control={<Checkbox name="gilad" />}
                        label="Typescript"
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <FormControlLabel
                        control={<Checkbox name="gilad" />}
                        label="Javascript"
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <FormControlLabel
                        control={<Checkbox name="gilad" />}
                        label="C"
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <FormControlLabel
                        control={<Checkbox name="gilad" />}
                        label="C++"
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <FormControlLabel
                        control={<Checkbox name="gilad" />}
                        label="C#"
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <FormControlLabel
                        control={<Checkbox name="gilad" />}
                        label="SQL"
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <FormControlLabel
                        control={<Checkbox name="gilad" />}
                        label="Python"
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <FormControlLabel
                        control={<Checkbox name="gilad" />}
                        label="Assembly Language"
                      />{" "}
                    </Grid>
                    <Grid item xs={3}>
                      <FormControlLabel
                        control={<Checkbox name="gilad" />}
                        label="Haskell"
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <FormControlLabel
                        control={<Checkbox name="gilad" />}
                        label="R"
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <FormControlLabel
                        control={<Checkbox name="gilad" />}
                        label=".NET"
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <FormControlLabel
                        control={<Checkbox name="gilad" />}
                        label="Other"
                      />
                    </Grid>
                  </Grid>
                  <Button
                    variant="outlined"
                    sx={{
                      backgroundColor: "#000039",
                      marginTop: 2,
                      marginRight: 10,
                    }}
                  >
                    Ok
                  </Button>
                </Box>
              ) : count == 5 ? (
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "90ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Grid container spacing={2}>
                    <Grid item>
                      <FormControlLabel
                        value="No experience (I have never programmed before.)"
                        control={<Radio />}
                        label="No experience (I have never programmed before.)"
                      />
                    </Grid>
                    <Grid item>
                      <FormControlLabel
                        value="Beginner (I have played with some introductory coding lessons and tutorials.)"
                        control={<Radio />}
                        label="Beginner (I have played with some introductory coding lessons and tutorials.)"
                      />
                    </Grid>
                    <Grid item>
                      <FormControlLabel
                        value="Intermediate (I have completed some coding classes or tutorials."
                        control={<Radio />}
                        label="Intermediate (I have completed some coding classes or tutorials."
                      />
                    </Grid>
                    <Grid item>
                      <FormControlLabel
                        value="Advanced (I can build applications.)"
                        control={<Radio />}
                        label="Advanced (I can build applications.)"
                      />
                    </Grid>
                    <Grid item>
                      <FormControlLabel
                        value="Professional (I am an experienced software engineer.)"
                        control={<Radio />}
                        label="Professional (I am an experienced software engineer.)"
                      />
                    </Grid>
                  </Grid>
                  <Button
                    variant="outlined"
                    sx={{
                      backgroundColor: "#000039",
                      marginTop: 2,
                      marginRight: 10,
                    }}
                  >
                    Ok
                  </Button>
                </Box>
              ) : count == 6 ? (
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "90ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Grid container spacing={2}>
                    <Grid item xs={10}>
                      <FormControlLabel
                        value="<$30,000"
                        control={<Radio />}
                        label="<$30,000"
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <FormControlLabel
                        value="$30,000 - $50,000"
                        control={<Radio />}
                        label="$30,000 - $50,000"
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <FormControlLabel
                        value="$50,000 - $80,000"
                        control={<Radio />}
                        label="$50,000 - $80,000"
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <FormControlLabel
                        value="$80,000 - $120,000"
                        control={<Radio />}
                        label="$80,000 - $120,000"
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <FormControlLabel
                        value="$120,000 - $250,000"
                        control={<Radio />}
                        label="$120,000 - $250,000"
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <FormControlLabel
                        value="$250,000 or More"
                        control={<Radio />}
                        label="$250,000 or More"
                      />
                    </Grid>
                  </Grid>
                  <Button
                    variant="outlined"
                    sx={{
                      backgroundColor: "#000039",
                      marginTop: 2,
                      marginRight: 10,
                    }}
                  >
                    Ok
                  </Button>
                </Box>
              ) : count == 7 ? (
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "90ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Grid container spacing={2}>
                    <Grid item xs={10}>
                      <FormControlLabel
                        value="I accept"
                        control={<Radio />}
                        label="I accept"
                        onChange={()=> setCondictionStatus(true)}
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <FormControlLabel
                        value="I don't accept"
                        control={<Radio />}
                        label="I don't accept"
                        onChange={() =>setCondictionStatus(false)}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    variant="outlined"
                    sx={{
                      backgroundColor: "#000039",
                      marginTop: 2,
                      marginRight: 10,
                    }}
                  >
                    Ok
                  </Button>
                </Box>
              ) : 
              count == 8 ? 
              <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "90ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField label="link" color="info" />
                  <Button
                    variant="outlined"
                    sx={{
                      backgroundColor: "#000039",
                      marginTop: 2,
                      marginRight: 10,
                    }}
                  >
                    Submit
                  </Button>
                </Box>
                : null}
            </Box>
          </Box>
        </Grid>
        <Grid item xs>
          <Box sx={{ padding: 1 }}>
            {count != 8 ? (
              <Box
                sx={{ padding: 2, backgroundColor: "#0abab5", borderRadius: 3 }}
              >
                <Typography color={"white"} gutterBottom>
                  0{count + 2}. {Questions[count + 1].qun}
                </Typography>
                <Button
                  variant="outlined"
                  onClick={increaseCount}
                  sx={{ backgroundColor: "white" }}
                >
                  {"Next >"}
                </Button>
              </Box>
            ) : (
              <></>
            )}
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ paddingTop: 2, position: 'fixed', bottom: 0, width: '100%' }}>
        <Box  sx={{ backgroundColor: "Black", padding: 1, height: 50 }}>
          <Typography color={"White"} gutterBottom>
            Powered By TYPEFORM 
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
