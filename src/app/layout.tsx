// app/layout.tsx
'use client';

import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, AppBar, Toolbar, Typography, ListItemButton } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import HistoryIcon from '@mui/icons-material/History';
import SensorsIcon from '@mui/icons-material/Sensors';
import PeopleIcon from '@mui/icons-material/People';
import Link from 'next/link';

const drawerWidth = 240;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Box sx={{ display: 'flex' }}>
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
              [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
          >
            <Toolbar />
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} href="/dashboard">
                  <ListItemIcon><MapIcon /></ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} href="/nodes">
                  <ListItemIcon><SensorsIcon /></ListItemIcon>
                  <ListItemText primary="Nodes" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} href="/history">
                  <ListItemIcon><HistoryIcon /></ListItemIcon>
                  <ListItemText primary="History" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} href="/users">
                  <ListItemIcon><PeopleIcon /></ListItemIcon>
                  <ListItemText primary="Users" />
                </ListItemButton>
              </ListItem>
            </List>
          </Drawer>

          <Box component="main" sx={{ flexGrow: 1, p: 3, ml: `${drawerWidth}px` }}>
            <Toolbar />
            {children}
          </Box>
        </Box>
      </body>
    </html>
  );
}
