import React, { useRef, useState } from "react";
import emailjs, { init } from "@emailjs/browser";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper, Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Card } from "./components/Card";
import SendIcon from '@mui/icons-material/Send';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const tutors = [
  { value: "Gary.Dix", label: "Gary Dix" },
  { value: "Jeffrey.Hong", label: "Jeffrey Hong" },
  { value: "Dipti.Kartikeya", label: "Dipti Kartikeya" },
  { value: "Harpreet.Kaur", label: "Harpreet Kaur" },
];

const theme = createTheme();

export default function Wellness() {
  init("user_aVMjgLam4rroy8ETgabF9");
  
  const [templateParams, setTemplateParams] = useState ({
    firstname: '',
    lastname: '',
    tutor: '',
    q1name: '',
    q2name: '',
    q3name: '',


  })

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(JSON.stringify(templateParams));
    
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_PUBLIC_KEY')
    emailjs
      .send(
        "service_03k440o",
        "template_ymy3mpi",
        templateParams,
        "ZKFMughkI-DFVOiem"
      )
      .then(
        (result) => {
          alert(
            "Thankyou for your Learners Journey submission, it has been sent successfully."
          );
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleChange = (event) => {
    setTemplateParams({
      ...templateParams,
      [event.target.name]: event.target.value,
      
    });
  };

 

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main style={{ backgroundColor: "#F7F2E7" }}>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "#F7F2E7",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Your Health and Wellness Journey
            </Typography>
          </Container>
        </Box>
        <Container sx={{}} maxWidth="md">
          {/* End hero unit */}
          <Paper sx={{ backgroundColor: "#E0ECE4" }}>
            <Container
              component="form"
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <Grid container marginBottom={"20px"}>
                <Grid item xs={12} marginBottom={"10px"}>
                  <Typography
                    variant="h5"
                    align="center"
                    color="text.secondary"
                    marginTop={"20px"}
                  >
                    Te whare tapa whā and wellbeing
                  </Typography>
                </Grid>
                <Grid item xs={12} marginBottom={"10px"}>
                  <Typography
                    variant="subtitle"
                    align="center"
                    color="text.secondary"
                    paragraph
                  >
                    The Māori holistic model of health, te whare tapa whā,
                    reminds you to take care of all the different aspects of
                    your life to support your wellbeing.
                    <a href="https://www.healthnavigator.org.nz/healthy-living/t/te-whare-tapa-wh%C4%81-and-wellbeing/">
                      Health Navigator
                    </a>
                  </Typography>
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                  marginBottom={"10px"}
                  paddingRight={"2px"}
                >
                  <TextField
                    id="firstName"
                    label="First Name"
                    name="firstname"
                    fullWidth
                    value={templateParams.firstname}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                  marginBottom={"10px"}
                  paddingLeft={"2px"}
                >
                  <TextField
                    id="lastName"
                    label="Last Name"
                    name="lastname"
                    fullWidth
                    value={templateParams.lastname}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Select
                    id="outlined-select-tutor"
                    select
                    fullWidth
                    name="tutor"
                    label="Select"
                    value={templateParams.tutor}
                    onChange={handleChange}
                    helperText="Please select your tutor"
                  >
                    {tutors.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
              <Divider />
              <Card
                sectiontitle={"Taha Tinana-Physical well-being"}
                description={`Taha tinana is your physical wellbeing. It is about how your body grows, feels and moves, and how you care for it.
  
                Nourishing and strengthening your physical wellbeing helps you to cope with the ups and downs and life.  `}
                description2={`Feeling physically well helps you feel mentally well. Some key things to take care of taha tinana are physical activity, healthy eating, sleep and not smoking.
  
                Some key things to take care of taha tinana are physical activity, healthy eating, sleep and not smoking.
  
              `}
                description3={`
  
                To strengthen your taha tinana, consider making a commitment with your whānau, friends or hoamahi (colleagues) to pick one thing you could each do to improve your physical wellbeing`}
                q1={"How does your body feel, moves, and grows?"}
                q1name={"q1bodyfeelmessage"}
                q2={"What do you do to take care of your body?"}
                q2name={"q2bodycaremessage"}
                q3={"What do you need to help you? / How can you be supported?"}
                q3name={"q3bodyhelpmessage"}
                onChange={handleChange}
              />
              <Card
                sectiontitle={"Taha hinengaro (mental and emotional wellbeing)"}
                description={`Taha hinengaro is your mind, heart, conscience, thoughts and feelings. It’s about how you feel, as well as how you communicate and think. `}
                description2={`Taking care of taha hinengaro is important for everyone, regardless of whether or not you’ve experienced mental illness or distress. When taha hinengaro is strong, you can better cope with life’s challenges.`}
                description3={`You can express your feelings and reach out for support from friends, whānau and hoamahi (colleagues) if you need to. `}
                q1={
                  "How you feel in your mind, heart and conscience thoughts (Stressed, anxious, worried, unsure, over excited, unfocused, hungry, physically not well.)"
                }
                q1name={"q1emotionalfeelmessage"}
                q2={"What do you need to help you? / How can you be supported?"}
                q2name={"q2emotionalhelpmessage"}
                onChange={handleChange}
              />
              <Card
                sectiontitle={"Taha whānau (family and social health)"}
                description={`Taha whānau is about who makes you feel like you belong, who you care about and who you share your life with.Whānau is about extended relationships – it’s not just your immediate relatives, it’s your friends, hoamahi (colleagues), community and the people you care about.`}
                description2={`Everyone has a place and a role to fulfil within their whānau, and whānau contributes to your individual wellbeing and identity. Spending time with whānau, doing things for them and getting involved gives you a feeling of purpose, connection and wellbeing.`}
                description3={`It benefits you and strengthens your whānau. As a core source of strength, support, security and identity, whānau plays a central role in your wellbeing. `}
                q1={"Who gives you strength, support, security & identity?"}
                q1name={"q1familyhelpmessage"}
                q2={"Who do you have to support you? Who can you talk to?"}
                q2name={"q2familyhelpmessage"}
                q3={"Who do you need to help you? / How can you be supported?"}
                q3name={"q3familyhelpmessage"}
                onChange={handleChange}
              />
              <Card
                sectiontitle={
                  "Taha wairua (spiritual wellbeing and sense of self)"
                }
                description={
                  "Your spiritual essence is your life force – your mauri. This is who and what you are, where you have come from and where you are going.  "
                }
                description2={
                  "The way people view wairua can be very different. For some, wairua is the capacity for faith or religious beliefs or having a belief in a higher power. For others, wairua is an internal connection to the universe or the sacred. There is no right or wrong way to think of or experience wairua, but it is an important part of your mental wellbeing.  "
                }
                description3={
                  "Spiritual wellbeing can be expressed through beliefs, values, traditions and practices that support self-awareness and identity. Taha wairua provides a sense of meaning and purpose as well as experiencing a sense of connectedness to self, whānau, community, nature and the sacred.  "
                }
                q1={"What do you believe / hold close to you?"}
                q1name={"q1spiritualmessage"}
                q2={
                  "What is important in your life?(Family, Friends, Religion, Beliefs and Traditions)"
                }
                q2name={"q2spiritualmessage"}
                q3={"Who do you need to help you? / How can you be supported?"}
                q3name={"q3spiritualmessage"}
                onChange={handleChange}
              />
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    endIcon={<SendIcon sx={{marginLeft: "10px"}}/>}

                    sx={{
                      mt: 1,
                      mb: 2,
                      color: "#000",
                      backgroundColor: "#EDB9C8",
                      border: "1px solid black",
                      "&:hover": {
                        background: "#A69BBF",
                        color: "#E1E0D3",
                      },
                    }}
                  >
                    Send Your Journey
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Paper>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "#F7F2E7", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
