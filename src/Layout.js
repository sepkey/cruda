import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import {
  Drawer,
  useMediaQuery,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Toolbar,
  AppBar,
  IconButton,
  InputBase,
  InputAdornment,
  Button,
  Stack,
  Container,
  Link,
} from "@mui/material";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import WifiTetheringOutlinedIcon from "@mui/icons-material/WifiTetheringOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ProfileDropdown from "./components/ProfileDropdown";
import logo from "./images/cruda.png";
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

const Layout = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width: 600px)");
  const [open, setOpen] = useState(false);
  return (
    <div>
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
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
          <Toolbar sx={{ px: { sm: 2 } }}>
            <Link href="/" style={{ width: 120, height: 30, display: "block" }}>
              <img src={logo} width={120} alt="Logo" />
            </Link>
          </Toolbar>
        </AppBar>
        <Box sx={{ flexGrow: 1 }}>
          {/* <Box sx={{ px: 2, pt: 2 }}>
          </Box> */}
          <List component="nav">
            <Box sx={{ position: "relative" }}>
              <ListItem button>
                <ListItemIcon>
                  <DesktopWindowsOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Website" />
              </ListItem>
            </Box>
            <ListItem button>
              <ListItemIcon>
                <StorefrontOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Products" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LocalOfferOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Sales" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <WifiTetheringOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Marketing" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AccountCircleOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="People" />
            </ListItem>
          </List>
        </Box>
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
        {/* <Box sx={{ flexGrow: 1, py: 3 }}>
          <Container maxWidth="lg">
            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
              <Button
                color="inherit"
                startIcon={<ChevronLeftIcon />}
                sx={{ color: "text.secondary" }}
              >
                Back to Products
              </Button>
            </Stack>

            <Stack direction="row" spacing={1} sx={{ mb: 2 }}></Stack>
            <p>Hiii</p>
          </Container>
        </Box> */}
      </main>
    </div>
  );
};

export default Layout;
