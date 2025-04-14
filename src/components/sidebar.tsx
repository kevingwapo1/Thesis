"use client";

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  ListItemButton,
} from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import HistoryIcon from "@mui/icons-material/History";
import SensorsIcon from "@mui/icons-material/Sensors";
import PeopleIcon from "@mui/icons-material/People";
import Link from "next/link";

const drawerWidth = 240;

export default function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}> {/* Ensure full height */}
      <AppBar position="fixed" sx={{ zIndex: 1201 }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Noise Monitoring
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="/dashboard">
              <ListItemIcon>
                <MapIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="/nodes">
              <ListItemIcon>
                <SensorsIcon />
              </ListItemIcon>
              <ListItemText primary="Nodes" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="/history">
              <ListItemIcon>
                <HistoryIcon />
              </ListItemIcon>
              <ListItemText primary="History" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="/users">
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          height: "100vh", // Ensure the map fills the screen vertically
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
