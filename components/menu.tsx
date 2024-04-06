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
import styles from "./home.module.css";

export default function MainBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Paper className={styles.mainBottomNavigation} elevation={3}>
        <BottomNavigation
          sx={{ backgroundColor: "#2e1065", borderRadius: "2rem" }}
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction
            label="Home"
            value="Home"
            className={styles.bottomNavigationAction}
            icon={<VerifiedUserIcon />}
          />
          <BottomNavigationAction
            label="Tech"
            value="Tech"
            className={styles.bottomNavigationAction}
            icon={<LayersIcon />}
          />
          <BottomNavigationAction
            label="Project"
            value="Project"
            className={styles.bottomNavigationAction}
            icon={<WorkspacesIcon />}
          />
          <BottomNavigationAction
            label="About"
            value="About"
            className={styles.bottomNavigationAction}
            icon={<BadgeIcon />}
          />
          <BottomNavigationAction
            label="Contact"
            value="Contact"
            className={styles.bottomNavigationAction}
            icon={<ChatIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
