import React from "react";
import {
  Box,
  Container,
  Typography,
  Link as MuiLink,
} from "@mui/material";

import {
  Instagram,
  LocationPin as MapPin,
  Phone,
  Mail,
} from "@mui/icons-material";

import { Link } from "react-router-dom";

import logo from "../../asset/lei2.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "#ffffff",
        color: "#173765",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "2000px",
          mx: "auto",
          px: { xs: 3, sm: 5, md: 6 },
          pt: { xs: 6, md: 7 },
        }}
      >
        {/* =====================================================
            TOP FOOTER
        ===================================================== */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1.15fr 0.9fr 1.2fr 1fr",
            },
            gap: { xs: 5, md: 6 },
            pb: { xs: 5, md: 6 },
          }}
        >
          {/* ================= BRAND ================= */}

          <Box>
            <Link
              to="/"
              style={{
                display: "inline-block",
                textDecoration: "none",
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="Lakshmi Water Pumps"
                sx={{
                  width: {
                    xs: "140px",
                    md: "175px",
                  },
                  height: "auto",
                  display: "block",
                  mb: 3,
                }}
              />
            </Link>

            <Typography
              sx={{
                maxWidth: "390px",
                fontFamily: '"Inter", sans-serif',
                fontSize: {
                  xs: "15px",
                  md: "17px",
                },
                lineHeight: 1.7,
                color: "#647792",
                mb: 3,
              }}
            >
              Manufacturing excellence since 1997.
              <br />
              Your trusted partner for water pumping
              solutions.
            </Typography>

            {/* Instagram */}

            <Box sx={{ display: "flex", gap: 2 }}>
              <Box
                component="a"
                href="#"
                aria-label="Instagram"
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  backgroundColor: "#f1f4f8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#173765",
                  transition: "all 0.25s ease",

                  "&:hover": {
                    backgroundColor: "#173765",
                    color: "#ffffff",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <Instagram sx={{ fontSize: 23 }} />
              </Box>
            </Box>
          </Box>

          {/* ================= QUICK LINKS ================= */}

          <Box>
            <FooterHeading title="Quick Links" />

            <FooterLink to="/" text="Home" />

            <FooterLink
              to="/about"
              text="About Us"
            />

            <FooterLink
              to="/products"
              text="Product Catalog"
            />

            <FooterLink
              to="/contact"
              text="Contact"
            />
          </Box>

          {/* ================= PRODUCTS ================= */}

          <Box>
            <FooterHeading title="Products" />

            <FooterText text="Self-priming Monoblock" />

            <FooterText text="Centrifugal Monoblock" />

            <FooterText text="Deep Well Jet" />

            <FooterText text="Openwell Submersible" />

            <FooterText text="V4 Submersible" />
          </Box>

          {/* ================= SUPPORT ================= */}

          <Box>
            <FooterHeading title="Support" />

            <FooterText text="Warranty Information" />

            <FooterText text="Installation Guide" />
          </Box>
        </Box>

        {/* =====================================================
            CONTACT US
        ===================================================== */}

        <Box
          sx={{
            borderTop: "1px solid #d8dee8",
            pt: 3,
            pb: 3,
          }}
        >
          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1.15fr 1.8fr 1.15fr 1.45fr",
              },

              alignItems: "center",

              backgroundColor: "#f7f9fc",

              borderRadius: "18px",

              px: {
                xs: 2.5,
                md: 3,
              },

              py: {
                xs: 3,
                md: 2.5,
              },
            }}
          >
            {/* ================= CONTACT TITLE ================= */}

            <Box
              sx={{
                pr: {
                  md: 3,
                },
                mb: {
                  xs: 3,
                  md: 0,
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily:
                    '"Playfair Display", Georgia, serif',

                  fontWeight: 700,

                  fontSize: {
                    xs: "22px",
                    md: "27px",
                  },

                  color: "#f52f3b",

                  mb: 0.8,
                }}
              >
                Contact Us
              </Typography>

              <Box
                sx={{
                  width: "48px",
                  height: "3px",
                  backgroundColor: "#ffda00",
                  mb: 1.5,
                }}
              />

              <Typography
                sx={{
                  fontFamily: '"Inter", sans-serif',

                  fontSize: {
                    xs: "13px",
                    md: "14px",
                  },

                  lineHeight: 1.55,

                  color: "#647792",

                  maxWidth: "260px",
                }}
              >
                Get in touch with us for product
                details, support or a quotation.
              </Typography>
            </Box>

            {/* ================= ADDRESS ================= */}

            <ContactItem
              icon={<MapPin />}
              title="Address"
              border
            >
             84/12, Athipalayam Rd, Ramakrishnapuram, Chinnavedampatti, Coimbatore, Tamil Nadu 641049
            </ContactItem>

            {/* ================= PHONE ================= */}

            <ContactItem
              icon={<Phone />}
              title="Phone"
              border
            >
              <MuiLink
                href="tel:+919885065511"
                underline="none"
                sx={{
                  color: "#647792",

                  fontFamily: '"Inter", sans-serif',

                  fontSize: "14px",

                  whiteSpace: "nowrap",

                  "&:hover": {
                    color: "#f52f3b",
                  },
                }}
              >
                +91 90034 27043<br/>
                +91 84895 29425

              </MuiLink>
            </ContactItem>

            {/* ================= EMAIL ================= */}

            <ContactItem
              icon={<Mail />}
              title="Email"
              border
            >
              <MuiLink
                href="mailto:lakshmiwaterpumps@gmail.com"
                underline="none"
                sx={{
                  color: "#647792",

                  fontFamily: '"Inter", sans-serif',

                  fontSize: "14px",

                  wordBreak: "break-word",

                  "&:hover": {
                    color: "#f52f3b",
                  },
                }}
              >
                leipumps@gmail.com
              </MuiLink>
            </ContactItem>
          </Box>
        </Box>

        {/* =====================================================
            COPYRIGHT
        ===================================================== */}

        <Box
          sx={{
            borderTop: "1px solid #d8dee8",

            py: {
              xs: 3,
              md: 3.5,
            },

            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Inter", sans-serif',

              fontSize: {
                xs: "13px",
                md: "16px",
              },

              color: "#667892",
            }}
          >
            © {currentYear} Lakshmi Water Pumps. All rights
            reserved. | 30 Years of Manufacturing Excellence
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}


/* =====================================================
   FOOTER HEADING
===================================================== */

function FooterHeading({ title }) {
  return (
    <>
      <Typography
        component="h3"
        sx={{
          fontFamily:
            '"Playfair Display", Georgia, serif',

          fontWeight: 700,

          fontSize: {
            xs: "23px",
            md: "27px",
          },

          color: "#f52f3b",

          mb: 1.3,
        }}
      >
        {title}
      </Typography>

      <Box
        sx={{
          width: "50px",
          height: "3px",
          backgroundColor: "#ffda00",
          mb: 3,
        }}
      />
    </>
  );
}


/* =====================================================
   FOOTER LINK
===================================================== */

function FooterLink({ to, text }) {
  return (
    <MuiLink
      component={Link}
      to={to}
      underline="none"
      sx={{
        display: "block",

        width: "fit-content",

        fontFamily: '"Inter", sans-serif',

        fontSize: {
          xs: "15px",
          md: "17px",
        },

        color: "#647792",

        mb: 1.8,

        transition: "all 0.2s ease",

        "&:hover": {
          color: "#f52f3b",
          transform: "translateX(4px)",
        },
      }}
    >
      {text}
    </MuiLink>
  );
}


/* =====================================================
   FOOTER TEXT
===================================================== */

function FooterText({ text }) {
  return (
    <Typography
      sx={{
        fontFamily: '"Inter", sans-serif',

        fontSize: {
          xs: "15px",
          md: "17px",
        },

        lineHeight: 1.6,

        color: "#647792",

        mb: 1.8,
      }}
    >
      {text}
    </Typography>
  );
}


/* =====================================================
   CONTACT ITEM
===================================================== */

function ContactItem({
  icon,
  title,
  children,
  border = false,
}) {
  return (
    <Box
      sx={{
        display: "flex",

        alignItems: "flex-start",

        gap: 1.5,

        px: {
          md: 3,
        },

        py: {
          xs: 2,
          md: 0,
        },

        borderLeft: {
          md: border
            ? "1px solid #d4dce7"
            : "none",
        },
      }}
    >
      {/* ICON */}

      <Box
        sx={{
          width: 44,
          height: 44,

          flexShrink: 0,

          borderRadius: "50%",

          backgroundColor: "#ffe9ea",

          display: "flex",

          alignItems: "center",

          justifyContent: "center",

          color: "#f52f3b",
        }}
      >
        {React.cloneElement(icon, {
          sx: {
            fontSize: 21,
          },
        })}
      </Box>

      {/* TEXT */}

      <Box>
        <Typography
          sx={{
            fontFamily: '"Inter", sans-serif',

            fontWeight: 700,

            fontSize: {
              xs: "15px",
              md: "16px",
            },

            color: "#173765",

            mb: 0.4,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontFamily: '"Inter", sans-serif',

            fontSize: {
              xs: "14px",
              md: "14px",
            },

            lineHeight: 1.5,

            color: "#647792",
          }}
        >
          {children}
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;