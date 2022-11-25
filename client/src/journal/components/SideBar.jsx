import { Box, Drawer } from "@mui/material";

export const SideBar = ({ drawerWidth }) => {
  return (
    <Box
        component="nav"
        sx={{sm: {drawerWidth}, flexShrink: {sm: 0}}}
    >
        <Drawer variant="permanent"> {/* Temporary */}
        
        </Drawer>
    </Box>
  )
};
