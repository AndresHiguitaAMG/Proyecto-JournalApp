import { TurnedInNot } from '@mui/icons-material';
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';

export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box
        component="nav"
        sx={{sm: {drawerWidth}, flexShrink: {sm: 0}}}
    >
        <Drawer 
          variant="permanent" //Temporary 
          open
          sx={{
            display: {xs: "block"},
            "& .MuiDrawer-paper": {boxSizing: "border-box", width: drawerWidth}
          }}
          >
            <Toolbar>
              <Typography variant="h6" nowRap component="div">Andres Higuita</Typography>
            </Toolbar>
            <Divider />
            <List>
              {
                ["Enero", "Febrero", "Marzo", "Abril"].map(element => (
                  <ListItem key={element} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <TurnedInNot />
                      </ListItemIcon>
                      <Grid container>
                        <ListItemText primary={element} />
                        <ListItemText secondary={"Velit amet nisi non ullamco veniam."} />
                      </Grid>
                    </ListItemButton>
                  </ListItem>
                ))
              }
            </List>
        </Drawer>
    </Box>
  )
};
