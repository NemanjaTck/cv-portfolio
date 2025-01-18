"use client";
import React, { FC } from "react";

import { Box, Typography, Paper } from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";

const PersonalInfo: FC = () => {
  return (
    <Paper elevation={3} sx={{ p: 2, mb: 4 }}>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}>
        <Box sx={{ width: { xs: "100%", sm: "15%" }, mb: { xs: 2, sm: 0 } }}>
          <img
            src="/profilephoto.jpeg"
            alt="Your Name"
            style={{ width: "100%", height: "auto", borderRadius: "10%" }}
          />
        </Box>
        <Box sx={{ width: { xs: "100%", sm: "85%" }, pl: { xs: 0, sm: 3 } }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Nemanja Drobnjak
            <a href="https://github.com/yourusername" color="inherit">
              <LinkedInIcon sx={{ marginLeft: "15px" }} />
            </a>
          </Typography>
          <Typography variant="h6" gutterBottom>
            Full-Stack Developer (FE Heavy)
          </Typography>
          <Typography variant="body1">
            Technical lead developer with more than 10 years of professional experience. Strongest within the
            Javascript ecosystem. In free time learning how to build games and speak at conferences.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Latest Education: Masters Degree in Computer Science at EPFL (Switzerland)
          </Typography>
          <Typography variant="body1" gutterBottom>
            Speaking English and German
          </Typography>
          <Typography variant="body2" sx={{ fontStyle: "italic", mt: 1 }}>
            Certified Scrum Master
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default PersonalInfo;
