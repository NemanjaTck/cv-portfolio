"use client";
import React, { useState, FC } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { Container, Box, Switch, Typography } from "@mui/material";
import PersonalInfo from "./PersonalInfo";
import ProjectTabs from "./ProjectTabs";

const App: FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ my: 4, display: "flex", flexDirection: "column", height: "calc(100vh - 64px)" }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ mr: 1, lineHeight: "38px" }}>Light Mode</Typography>
              <Switch checked={!darkMode} onChange={() => setDarkMode(!darkMode)} color="primary" />
            </Box>
          </Box>
          <PersonalInfo />
          <Box sx={{ flexGrow: 1 }}>
            <ProjectTabs />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
