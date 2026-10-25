import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
} from "@mui/material";
import { WorkspacePremium as WorkspacePremiumIcon, ShieldOutlined as ShieldOutlinedIcon, GroupsOutlined as GroupsOutlinedIcon, BuildOutlined as BuildOutlinedIcon } from "@mui/icons-material"  ;
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Droplets,
  ShieldCheck,
  Factory,
  Settings,
  CheckCircle2,
  Settings2,
  Leaf
} from "lucide-react";
//import GetQuoteButton from "../components/GetQuoteButton";
import pump from "./../asset/pumpbg.jpeg"

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/playfair-display/700.css";


const NAVY = "#102746";
const RED = "#f52f3b";
const YELLOW = "#fff000";

const products = [
  {
    name: "Self Priming Pumps",
    description:
      "Reliable pumping solutions for domestic water supply and everyday applications.",
    icon: <Droplets size={32} />,
  },
  {
    name: "Openwell Pumps",
    description:
      "Dependable solutions for open wells and residential water supply requirements.",
    icon: <Settings size={32} />,
  },
  {
    name: "Borewell Motors",
    description:
      "Pumping solutions designed for borewell water extraction applications.",
    icon: <Factory size={32} />,
  },
  {
    name: "Submersible Pumps",
    description:
      "Water pumping solutions for suitable domestic and agricultural applications.",
    icon: <Droplets size={32} />,
  },
  {
    name: "Jet Pumps",
    description:
      "Practical water supply solutions for suitable domestic installations.",
    icon: <Settings size={32} />,
  },
];

const strengths = [
  {
    title: "Quality Manufacturing",
    description:
      "A manufacturing-focused approach to product quality and consistency.",
    icon: <Factory size={30} />,
  },
  {
    title: "Reliable Performance",
    description:
      "Pumping solutions developed for dependable everyday operation.",
    icon: <Settings size={30} />,
  },
  {
    title: "Customer Commitment",
    description:
      "We focus on customer satisfaction and dependable product support.",
    icon: <ShieldCheck size={30} />,
  },
  {
    title: "One-Year Warranty",
    description:
      "Warranty coverage for one year, subject to applicable terms and conditions.",
    icon: <CheckCircle2 size={30} />,
  },
];

function Home() {
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>

      {/* ================= HERO SECTION ================= */}

      
{/* ================= HERO SECTION ================= */}

<Box
  sx={{
    position: "relative",
    width: "100%",
    minHeight: { xs: "780px", md: "calc(100vh - 100px)" },
    display: "flex",
    alignItems: "center",
    color: "#ffffff",
    overflow: "hidden",
    backgroundColor: "#0c213b",
    backgroundImage: `
      linear-gradient(
        90deg,
        rgba(8, 29, 54, 0.96) 0%,
        rgba(8, 29, 54, 0.85) 34%,
        rgba(8, 29, 54, 0.50) 57%,
        rgba(8, 29, 54, 0.10) 100%
      ),
      linear-gradient(
        0deg,
        rgba(8, 29, 54, 0.40),
        transparent 45%
      ),
      url("${pump}")
    `,
    backgroundSize: "cover",
    backgroundPosition: {
      xs: "62% center",
      md: "center center",
    },
    backgroundRepeat: "no-repeat",
  }}
>
  <Container
    maxWidth={false}
    sx={{
      px: { xs: "24px", md: "24px", lg: "24px" },
      maxWidth: "1600px",
      mx: "auto",
    }}
  >
    <Box
      sx={{
        width: "100%",
        maxWidth: "1050px",
        pt: { xs: 8, md: 12 },
    pb: { xs: 5, md: 7 },
        textAlign: "left",
      }}
    >
      {/* EXPERIENCE LABEL */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "19px",
          mb: { xs: 4, md: "43px" },
        }}
      >
        <Box
          sx={{
            width: "50px",
            height: "2px",
            backgroundColor: "#fff000",
            flexShrink: 0,
          }}
        />

        <Typography
          sx={{
            fontFamily: '"Inter", sans-serif',
            fontWeight: 600,
            fontSize: { xs: "10px", sm: "13px", md: "17px" },
            letterSpacing: { xs: "2.5px", md: "5px" },
            lineHeight: 1.4,
            color: "#fff000",
            whiteSpace: "nowrap",
          }}
        >
          30 YEARS OF EXCELLENCE
        </Typography>
      </Box>

      {/* MAIN HEADLINE */}

      <Typography
        component="h1"
        sx={{
          fontFamily: '"Inter", sans-serif',
          fontWeight: 600,
          fontSize: {
            xs: "39px",
            sm: "48px",
            md: "clamp(54px, 5.2vw, 78px)",
          },
          letterSpacing: { xs: "-1.5px", md: "-3.5px" },
          lineHeight: { xs: 1.12, md: 1.08 },
          color: "#ffffff",
          mb: 0,
        }}
      >
        Premium Water Pumps

        <Box
          component="span"
          sx={{
            display: "block",
            color: "#fff000",
            mt: { xs: "2px", md: "4px" },
          }}
        >
          Built to Last
        </Box>
      </Typography>

      {/* DESCRIPTION */}

      <Typography
        sx={{
          mt: { xs: 3, md: "30px" },
          mb: { xs: 3, md: "40px" },
          maxWidth: "790px",
          fontFamily: '"Inter", sans-serif',
          fontWeight: 400,
          fontSize: { xs: "14px", sm: "17px", md: "23px" },
          lineHeight: { xs: 1.7, md: 1.7 },
          color: "rgba(255,255,255,0.87)",
        }}
      >
        Trusted by thousands of customers for domestic, industrial, and
        agricultural applications. Experience unmatched reliability and
        performance.
      </Typography>

      {/* CALL-TO-ACTION BUTTONS */}

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "stretch", sm: "center" },
          gap: { xs: 2, sm: "24px" },
          mb: { xs: 5, md: "74px" },
        }}
      >
        <Button
          component={Link}
          to="/products"
          endIcon={<ArrowRight size={23} />}
          sx={{
            minHeight: { xs: "52px", md: "69px" },
            minWidth: { xs: "100%", sm: "350px" },
            px: { xs: 3, md: "35px" },
            borderRadius: "50px",
            backgroundColor: "#ffeb35",
            color: "#101c2b",
            fontFamily: '"Inter", sans-serif',
            fontSize: { xs: "14px", md: "18px" },
            fontWeight: 700,
            textTransform: "none",
            boxShadow: "none",
            justifyContent: "space-between",
            "&:hover": {
              backgroundColor: "#fff000",
              boxShadow: "0 6px 25px rgba(255,240,0,0.18)",
            },
          }}
        >
          Explore Our Products
        </Button>

        <Button
          component={Link}
          to="/contact"
          sx={{
            minHeight: { xs: "52px", md: "69px" },
            minWidth: { xs: "100%", sm: "245px" },
            px: 3,
            borderRadius: "50px",
            border: "1px solid rgba(255,255,255,0.48)",
            backgroundColor: "rgba(255,255,255,0.025)",
            color: "#ffffff",
            fontFamily: '"Inter", sans-serif',
            fontSize: { xs: "14px", md: "18px" },
            fontWeight: 700,
            textTransform: "none",
            "&:hover": {
              borderColor: "#fff000",
              backgroundColor: "rgba(255,255,255,0.09)",
            },
          }}
        >
          Get Free Quote
        </Button>
      </Box>

      {/* BOTTOM FEATURE STRIP */}

      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.24)",
          pt: { xs: 3, md: "38px" },
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          columnGap: { xs: 3, md: "52px" },
          rowGap: 2.5,
        }}
      >
        {[
          {
            label: "Reliable Performance",
            icon: <ShieldCheck size={29} />,
          },
          {
            label: "Durable Build",
            icon: <Settings2 size={29} />,
          },
          {
            label: "Energy Efficient",
            icon: <Leaf size={29} />,
          },
        ].map((feature) => (
          <Box
            key={feature.label}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#fff000",
                flexShrink: 0,
              }}
            >
              {feature.icon}
            </Box>

            <Typography
              sx={{
                fontFamily: '"Inter", sans-serif',
                fontWeight: 400,
                fontSize: { xs: "12px", md: "18px" },
                color: "rgba(255,255,255,0.9)",
                whiteSpace: "nowrap",
              }}
            >
              {feature.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  </Container>
</Box>

{/* ================= END HERO SECTION ================= */}
      {/* ================= INTRODUCTION ================= */}

      {/* ================= OUR LEGACY SECTION ================= */}

<Box
  component="section"
  sx={{
    width: "100%",
    backgroundColor: "#ffffff",
    py: { xs: 8, md: 14 },
    px: { xs: 2.5, md: 4 },
    textAlign: "center",
    boxSizing: "border-box",
  }}
>
  {/* Section Label */}
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 3,
      mb: { xs: 4, md: 5 },
    }}
  >
    <Box
      sx={{
        width: "64px",
        height: "2px",
        backgroundColor: "#f52f3b",
      }}
    />

    <Typography
      sx={{
        fontFamily: '"Inter", sans-serif',
        fontSize: { xs: "12px", md: "23px" },
        fontWeight: 700,
        letterSpacing: { xs: "3px", md: "7px" },
        color: "#f52f3b",
      }}
    >
      OUR LEGACY
    </Typography>
  </Box>

  {/* Main Heading */}
  <Typography
    component="h2"
    sx={{
      fontFamily: '"Playfair Display", Georgia, serif',
      fontSize: {
        xs: "2.2rem",
        sm: "3rem",
        md: "clamp(42px, 5.2vw, 88px)",
      },
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: { xs: "-1px", md: "-2.5px" },
      color: "#17213b",
      mb: { xs: 3, md: 3.5 },
    }}
  >
    Built on experience{" "}
    <Box
      component="span"
      sx={{
        color: "#f52f3b",
        fontStyle: "italic",
        whiteSpace: { sm: "nowrap" },
      }}
    >
      &amp; trust
    </Box>
  </Typography>

  {/* Description */}
  <Typography
    sx={{
      maxWidth: "1250px",
      mx: "auto",
      fontFamily: '"Inter", sans-serif',
      fontSize: { xs: "15px", sm: "18px", md: "35px" },
      fontWeight: 400,
      lineHeight: { xs: 1.8, md: 1.6 },
      color: "#64738d",
    }}
  >
    For over 30 years, we've been engineering water pumping
    solutions that power homes, industries, and farms across
    the nation.
  </Typography>
</Box>

{/* ================= END OUR LEGACY SECTION ================= */}

{/* ================= WHY CHOOSE LAKSHMI ================= */}

<Box
  component="section"
  sx={{
    backgroundColor: "#f8f9fb",
    py: { xs: 6, md: 9 },
    px: { xs: 2, md: 3 },
  }}
>
  <Container maxWidth="xl">
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, minmax(0, 1fr))",
          lg: "repeat(4, minmax(0, 1fr))",
        },
        gap: { xs: 3, md: 3.5 },
      }}
    >
      {[
        {
          
          title: "30 Years Experience",
          description:
            "Nearly three decades of manufacturing excellence and innovation",
          icon: <WorkspacePremiumIcon />,
        },
        {
          
          title: "Quality Assurance",
          description:
            "Rigorous testing and premium materials ensure lasting performance",
          icon: <ShieldOutlinedIcon />,
        },
        {
          
          title: "Trusted by Thousands",
          description:
            "Serving domestic, industrial, and agricultural customers nationwide",
          icon: <GroupsOutlinedIcon />,
        },
        {
          
          title: "Expert Support",
          description:
            "Comprehensive after-sales service and technical assistance",
          icon: <BuildOutlinedIcon />,
        },
      ].map((item) => (
        <Box
          key={item.number}
          sx={{
            position: "relative",
            minHeight: { xs: 350, md: 410, xl: 490 },
            p: { xs: 3.5, md: 4.5 },
            backgroundColor: "#ffffff",
            border: "1px solid #dce2eb",
            borderRadius: "27px",
            boxShadow: "0 12px 30px rgba(20, 35, 60, 0.07)",
            overflow: "hidden",
            transition:
              "transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "6px",
              backgroundColor: "#fff000",
              transform: "scaleX(0)",
              transformOrigin: "left",
              transition: "transform 300ms ease",
            },
            "&:hover": {
              transform: "translateY(-10px)",
              borderColor: "#e0e5ed",
              boxShadow: "0 24px 50px rgba(20, 35, 60, 0.15)",
            },
            "&:hover::before": {
              transform: "scaleX(1)",
            },
            "&:hover .feature-icon": {
              backgroundColor: "#d91f2b",
              transform: "translateY(-3px)",
            },
            "&:hover .feature-number": {
              color: "#dfe2e8",
            },
          }}
        >
          {/* Number */}
          <Typography
            className="feature-number"
            sx={{
              position: "absolute",
              top: { xs: 35, md: 42 },
              right: { xs: 28, md: 38 },
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: { xs: "2.7rem", md: "4rem" },
              fontWeight: 700,
              color: "#e9eaed",
              lineHeight: 1,
              transition: "color 300ms ease",
            }}
          >
            {item.number}
          </Typography>

          {/* Icon */}
          <Box
            className="feature-icon"
            sx={{
              width: { xs: 78, md: 110 },
              height: { xs: 78, md: 110 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f52f3b",
              color: "#ffffff",
              borderRadius: { xs: "18px", md: "22px" },
              boxShadow: "0 12px 28px rgba(245, 47, 59, 0.18)",
              transition: "all 300ms ease",
              "& svg": {
                fontSize: { xs: 36, md: 48 },
              },
            }}
          >
            {item.icon}
          </Box>

          {/* Heading */}
          <Typography
            component="h3"
            sx={{
              mt: { xs: 4, md: 4.5 },
              mb: 2,
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: { xs: "1.35rem", md: "1.7rem" },
              lineHeight: 1.35,
              fontWeight: 700,
              color: "#19223b",
            }}
          >
            {item.title}
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontSize: { xs: "1rem", md: "1.25rem" },
              lineHeight: 1.65,
              color: "#697890",
            }}
          >
            {item.description}
          </Typography>
        </Box>
      ))}
    </Box>
  </Container>
</Box>

{/* ================= END WHY CHOOSE LAKSHMI ================= */}

      {/* ================= PRODUCTS ================= */}

     
      

<Box
  component="section"
  sx={{
    width: "100%",
    background: "linear-gradient(110deg, #142e5c 0%, #203f78 100%)",
    py: { xs: 8, md: 10 },
    px: 2.5,
    textAlign: "center",
    boxSizing: "border-box",
  }}
>
  <Container maxWidth="lg">
    <Typography
      component="h2"
      sx={{
        fontFamily: '"Playfair Display", Georgia, serif',
        fontWeight: 700,
        fontSize: {
          xs: "2rem",
          sm: "2.8rem",
          md: "4rem",
        },
        lineHeight: 1.25,
        color: "#ffffff",
        mb: 2,
      }}
    >
      Looking for the Right{" "}
      <Box
        component="span"
        sx={{ color: "#ffda3d", fontStyle: "italic" }}
      >
        Water Pump?
      </Box>
    </Typography>

    <Typography
      sx={{
        fontFamily: '"Inter", sans-serif',
        fontSize: { xs: "1rem", md: "1.35rem" },
        fontWeight: 400,
        lineHeight: 1.8,
        color: "rgba(255,255,255,0.92)",
        maxWidth: "850px",
        mx: "auto",
        mb: 4.5,
      }}
    >
      Get in touch with Lakshmi Engineering Industries for
      reliable water pumping solutions. Contact us today for
      product details and a quotation tailored to your requirements.
    </Typography>

    <Button
      component={Link}
      to="/contact"
      variant="contained"
      sx={{
        minWidth: { xs: "190px", md: "280px" },
        minHeight: { xs: "54px", md: "68px" },
        px: 4,
        borderRadius: "14px",
        backgroundColor: "#ffda3d",
        color: "#142e5c",
        fontFamily: '"Inter", sans-serif',
        fontWeight: 600,
        fontSize: { xs: "1rem", md: "1.2rem" },
        textTransform: "none",
        boxShadow: "none",
        "&:hover": {
          backgroundColor: "#ffe66d",
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          transform: "translateY(-2px)",
        },
        transition: "all 250ms ease",
      }}
    >
      Get Free Quote
    </Button>
  </Container>
</Box>

{/* ================= END WATER PUMP QUOTE CTA ================= */}
    </Box>
  );
}

export default Home;