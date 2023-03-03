//library
import React, { useState } from "react";
import { Link } from "react-router-dom";
//components
import ProfileDropdown from "./ProfileDropdown";
//mui
import { makeStyles } from "@mui/styles";
import {
  Drawer,
  useMediaQuery,
  Box,
  Toolbar,
  AppBar,
  IconButton,
  // InputBase,
  // InputAdornment,
  // Button,
  // Stack,
  Container,
  Paper,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import logo from "../images/cruda.png";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      boxSizing: "border-box",
    },
  },
  main: {
    backgroundColor: theme.palette.grey[100],
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      marginLeft: drawerWidth,
    },
  },
  toolbar: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: drawerWidth,
    },
  },
}));

const Layout = ({ children, left }) => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width: 600px)");
  const [open, setOpen] = useState(false);

  return (
    <>
      <Drawer
        open={open}
        variant={matches ? "permanent" : "temporary"}
        anchor="left"
        onClose={() => setOpen(false)}
        className={classes.drawer}
      >
        <AppBar
          position="relative"
          color="transparent"
          elevation={0}
          sx={{
            borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          }}
        >
          <Toolbar sx={{ px: { sm: 2 } }}>
            <Link href="/" style={{ width: 120, height: 30, display: "block" }}>
              <img src={logo} width={120} alt="Logo" />
            </Link>
          </Toolbar>
        </AppBar>
        {/* <Box sx={{ flexGrow: 1 }}> */}
        {/* <Box sx={{ px: 2, pt: 2 }}>
          </Box> */}
        {/* <SidebarList /> */}
        {left}
        {/* </Box> */}
      </Drawer>
      <AppBar
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar className={classes.toolbar}>
          <Box sx={{ mr: 1, display: { xs: "block", sm: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={() => setOpen(!open)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <Link href="/" style={{ width: 120, height: 30, display: "block" }}>
              <img src={logo} width={120} alt="Logo" />
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {/* <InputBase
              placeholder="Search for anything..."
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            /> */}
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ mr: -1 }}>
            <ProfileDropdown />
          </Box>
        </Toolbar>
      </AppBar>
      <main className={classes.main}>
        <Toolbar />
        <Box sx={{ flexGrow: 1, py: 3 }}>
          <Container maxWidth="lg">
            <Grid item xs={12}>
              <Paper>{children}</Paper>
            </Grid>
          </Container>
        </Box>
      </main>
    </>
  );
};

export default Layout;
