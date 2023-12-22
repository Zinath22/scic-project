// import { Box, Button, Container, IconButton, Stack, Typography } from "@mui/material";
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import Link from "next/link";

import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom";


const Footer = () => {

    const navItems = [
        {
        route: "Home",
        pathname: "/",
      },
        {
        route: "Pages",
        pathname: "/pages",
      },
        {
        route: "Category",
        pathname: "/category",
      },
        {
        route: "News",
        pathname: "/news",
      },
        {
        route: "Contact",
        pathname: "/contact",
      },
        {
        route: "About",
        pathname: "/about",
      },
      ];

    return (
        <Box className="bg-black px-2 py-10">
            <Container>
            <Box  className="w-full text-center"
          sx={{
          "& svg": {
            color: "white",
          },
         }}>
        
         <IconButton>
              <FacebookIcon></FacebookIcon>
              </IconButton>
              <IconButton>
              <TwitterIcon></TwitterIcon>
              </IconButton>
              <IconButton>
              <YouTubeIcon></YouTubeIcon>
              </IconButton>
              <IconButton>
              <LinkedInIcon></LinkedInIcon>
              </IconButton>
              <IconButton>
              <InstagramIcon></InstagramIcon>
          </IconButton>
         
         </Box>

         <Box className="w-full text-center">
            {navItems.map((item) => (
              <Link key={item} href={item.pathname}>
                <Button className="text-white">
                  {item.route}
                </Button>
              </Link>
            ))}
          </Box>
          <Typography variant="body2" color="grey" textAlign="center">
            @2023 the task management design by zinath
          </Typography>
            </Container>
        </Box>
    );
};

export default Footer;