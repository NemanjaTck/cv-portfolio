"use client";
import React, { FC } from "react";
import { List, ListItem, Typography, Chip, Box, useTheme } from "@mui/material";

interface Project {
  title: string;
  company: string;
  dateFrom: string;
  dateTo: string;
  url: string;
  description: string;
  technologies: string[];
}

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: FC<ProjectListProps> = ({ projects }) => {
  const theme = useTheme();

  return (
    <Box>
      <List>
        {projects.map((project, index) => (
          <ListItem key={index} sx={{ flexDirection: "column", alignItems: "flex-start", mb: 2 }}>
            <Typography variant="h6" component="div">
              {project.title} at {project.company}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              {project.dateFrom} - {project.dateTo}
            </Typography>
            {project.url !== "" && (
              <Typography variant="subtitle2" sx={{ color: "#90caf9"}} gutterBottom>
                <a target="_blank" href={project.url}>{project.url}</a>
              </Typography>
            )}
            <Typography variant="body2" sx={{mb: 1}}>{project.description}</Typography>
            <Box>
              {project.technologies.map((tech, techIndex) => (
                <Chip
                  key={techIndex}
                  label={tech}
                  sx={{
                    mr: 1,
                    mb: 1,
                    bgcolor: theme.palette.mode === "dark" ? "primary.dark" : "primary.main",
                    color: theme.palette.mode === "dark" ? "primary.contrastText" : "common.white",
                  }}
                />
              ))}
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ProjectList;
