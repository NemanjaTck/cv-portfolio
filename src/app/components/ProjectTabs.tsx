"use client";
import React, { useState, FC } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import ProjectList from "./ProjectList";
import { workProjects, freelanceProjects, hobbyProjects, conferences } from "../data/projects";

const ProjectTabs: FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "calc(100vh - 300px)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={activeTab} onChange={handleChange} aria-label="project tabs">
          <Tab label="Work Projects" />
          <Tab label="Freelance Projects" />
          <Tab label="Hobby Projects" />
          <Tab label="Conferences" />
        </Tabs>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        {activeTab === 0 && <ProjectList projects={workProjects} />}
        {activeTab === 1 && <ProjectList projects={freelanceProjects} />}
        {activeTab === 2 && <ProjectList projects={hobbyProjects} />}
        {activeTab === 3 && <ProjectList projects={conferences} />}
      </Box>
    </Box>
  );
};

export default ProjectTabs;
