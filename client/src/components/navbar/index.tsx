// import * as React from 'react';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { useState } from "react"
import { useTheme } from "@mui/material"
import Logo from "../../assets/titlelogo.png"
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  window?: () => Window
}

const Navbar = (props: Props) => {
  const { palette } = useTheme()
  const drawerWidth = 350
  const navItems = ["Home", "Movies", "Tv", "Books"]
  const { window } = props
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography sx={{position: 'absolute', right: 0, padding: '15px'}}>
      <CloseIcon sx={{ cursor: "pointer", fontSize: 20, transition: "transform 0.2s ease-in-out",
    "&:hover": { transform: "scale3d(1.05, 1.06, 2)", color: 'red' } }}/>
    </Typography>
      <Typography>
        <img
          src={Logo}
          height={140}
          width={150}
          style={{ objectFit: "contain", marginRight: -22 }}
        />
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <>
    <Box sx={{ display: "flex"}} id="back-to-top-anchor">
      <AppBar component="nav" sx={{ backgroundColor: palette.grey[900] }}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerToggle}
              color="inherit"
            >
              <MenuIcon
                sx={{ fontSize: "1.5rem", color: palette.secondary[100] }}
              />
            </IconButton>
          </Box>
          <Typography
            sx={{
              mr: 2,
              display: { xs: "flex" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              src={Logo}
              height={125}
              width={170}
              style={{ objectFit: "cover" }}
            />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "flex-end" },
            }}
          >
            {navItems.map((page) => (
              <Button
                key={page}
                sx={{
                  my: 2,
                  color: palette.secondary[100],
                  display: "block",
                  fontSize: ".93rem",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor:palette.grey[900],
              color: palette.secondary[100],
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
    </>
  )
}

export default Navbar
