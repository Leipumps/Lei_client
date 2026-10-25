import React, { useState, useEffect } from "react";

import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,Typography
} from "@mui/material";

import { Link, useLocation } from "react-router-dom";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";

//import GetQuoteButton from "./GetQuoteButton";

import logo from "../../asset/lei2.png";


function Header() {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const isHome = location.pathname === "/";


  const menuItems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About Us",
      path: "/about-us",
    },
    {
      label: "Products",
      path: "/products",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ];


  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };


    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };


    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);


  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor:
            isHome && !scrolled && !open
              ? "transparent"
              : "hsl(0, 0%, 100%)",

          boxShadow: "none",

          transition: "0.3s",

          zIndex: 2000,
        }}
      >

        <Toolbar
          sx={{
            px: 3,

            display: "flex",

            minHeight: {
              xs: 80,
              md: 80,
            },

            justifyContent: "space-between",
          }}
        >

          {/* =========================
              LOGO
          ========================= */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              ml:-2,
              flexShrink: 0,
            }}
          >

            <Button
              component={Link}
              to="/"

              onClick={() => {
                setOpen(false);

                if (location.pathname === "/") {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }
              }}

              sx={{
                minWidth: 0,

                minHeight: {
                  xs: 60,
                  sm: 70,
                },

                padding: 0,

                borderRadius: 0,

                background: "transparent",

                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >

              <img
                src={logo}
                alt="Lakshmi Pumps"

                style={{
                  width: "120px",

                  height: "60px",

                  objectFit: "contain",

                  display: "block",
                  maxWidth:"none",
                }}
              />

            </Button>
            <Typography
              sx={{
                fontFamily: "Playfair Display",
                fontWeight: 600,
                fontSize: { xs: 20, sm: 30 },
                color: isHome && !scrolled && !open ? "#fff" : "#132847",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
            >
              LAKSHMI ENGINEERING INDUSTRIES
            </Typography>

          </Box>


          {/* =========================
              DESKTOP MENU
          ========================= */}

          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },

              gap: 2,

              alignItems: "center",
            }}
          >

            {menuItems.map((item) => {

              const isActive =
                location.pathname === item.path;


              return (
                <Button
                  key={item.label}

                  component={Link}

                  to={item.path}

                  sx={{
                    fontFamily:
                      "'Inter', sans-serif",

                    fontWeight: 500,

                    fontSize: "0.875rem",

                    color:
                      isHome && !scrolled
                        ? "#fff"
                        : "#132847",

                    textTransform: "none",

                    position: "relative",

                    "&:hover":
                      isHome && !scrolled
                        ? {
                            color: "#ef3038",
                          }
                        : {
                            color: "#ef3038",
                          },

                    "&::after": isActive
                      ? {
                          content: '""',

                          position: "absolute",

                          bottom: -4,

                          width: "100%",

                          height: "0.25rem",

                          backgroundColor:
                            "#ef3038",

                          borderRadius: "4px",
                        }
                      : {},
                  }}
                >
                  {item.label}
                </Button>
              );

            })}


            {/* CALL US */}

            <Button
              component="a"
              href="tel:+919003427043"

              startIcon={<PhoneIcon />}

              sx={{
                fontFamily:
                  "'Inter', sans-serif",

                fontWeight: 600,

                fontSize: "0.875rem",

                color: "#ef3038",

                textTransform: "none",

                ml: 1,

                "&:hover": {
                  backgroundColor:
                    "transparent",

                  color: "#d9232b",
                },
              }}
            >
              Call Us Now
            </Button>


            {/* GET QUOTE */}

            {/* <GetQuoteButton
              variantType="desktop"
            /> */}

          </Box>


          {/* =========================
              MOBILE MENU ICON
          ========================= */}

          <IconButton
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },

              "&:hover": {
                color: "#132847",
              },

              color: "#132847",

              zIndex: 3000,
            }}

            disableRipple

            onClick={() =>
              setOpen(!open)
            }
          >

            {open ? (
              <CloseIcon />
            ) : (
              <MenuIcon />
            )}

          </IconButton>

        </Toolbar>

      </AppBar>


      {/* =========================
          MOBILE DRAWER
      ========================= */}

      <Drawer
        anchor="right"

        open={open}

        onClose={() =>
          setOpen(false)
        }

        hideBackdrop

        PaperProps={{
          sx: {
            backgroundColor: "#fff",

            width: "100%",

            height: "60%",

            marginTop: "80px",

            boxShadow: "none",
          },
        }}
      >

        <List
          sx={{
            display: "flex",

            flexDirection: "column",

            gap: 1,
          }}
        >

          {menuItems.map((item) => (

            <ListItem
              onClick={() =>
                setOpen(false)
              }

              key={item.label}

              component={Link}

              to={item.path}

              sx={{
                mx: 3,

                px: 2,

                py: 1.8,

                borderRadius: "10px",

                color: "#132847",

                width: "93%",

                textDecoration: "none",

                "&:hover": {
                  backgroundColor:
                    "#dfd9d9ff",
                },

                fontFamily:
                  "'Inter', sans-serif",
              }}
            >

              {item.label}

            </ListItem>

          ))}


          {/* MOBILE CALL */}

          <ListItem
            component="a"

            href="tel:+919003427043"

            onClick={() =>
              setOpen(false)
            }

            sx={{
              mx: 3,

              px: 2,

              py: 1.8,

              borderRadius: "10px",

              color: "#ef3038",

              width: "93%",

              textDecoration: "none",

              display: "flex",

              alignItems: "center",

              gap: 1,

              fontFamily:
                "'Inter', sans-serif",
            }}
          >

            <PhoneIcon />

            Call Us Now

          </ListItem>


          {/* <GetQuoteButton
            variantType="mobile"

            onClick={() =>
              setOpen(false)
            } 
          />*/}

        </List>

      </Drawer>
    </>
  );
}

export default Header;