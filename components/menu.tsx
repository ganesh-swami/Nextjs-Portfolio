"use client";

import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LayersIcon from "@mui/icons-material/Layers";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import ChatIcon from "@mui/icons-material/Chat";
import BadgeIcon from "@mui/icons-material/Badge";
import { Box, Paper } from "@mui/material";

export default function MainBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Paper
        sx={{
          position: "fixed",
          bottom: "2rem",
          left: "50%",
          "-webkit-transform": "translateX(-50%)",
          transform: "translateX(-50%);",
        }}
        elevation={3}
      >
        <BottomNavigation
          //sx={{ width: 500 }}
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction
            label="Home"
            value="Home"
            icon={<VerifiedUserIcon />}
          />
          <BottomNavigationAction
            label="Tech"
            value="Tech"
            icon={<LayersIcon />}
          />
          <BottomNavigationAction
            label="Project"
            value="Project"
            icon={<WorkspacesIcon />}
          />
          <BottomNavigationAction
            label="About"
            value="About"
            icon={<BadgeIcon />}
          />
          <BottomNavigationAction
            label="Contact"
            value="Contact"
            icon={<ChatIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
