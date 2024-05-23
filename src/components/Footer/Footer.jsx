import { FooterContainer, MainContainer, FooterMainContainer, StyledLink } from "@/themes/themes";
import { Grid, Stack, Typography, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import SmallLogo from "/public/smallLogo.png";

const Footer = () => {
  return (
    <FooterMainContainer>
      <MainContainer maxWidth='xl'>
        <FooterContainer>
          <Grid container columns={3} justifyContent='center' gap={{ xs: 4,  md: 0 }}>
            <Grid item md={1} xs={3}>
              <Stack
                gap={{ xs: 1, md: 3 }}
                sx={{
                  height: "100%",
                  justifyContent: "flex-end",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <Typography variant='h5' fontWeight='bold' className='heading'>
                  Stay in touch
                </Typography>
                <Typography variant='body2'>We are here to help</Typography>
                <Stack>
                  <Typography variant='caption'>contact@devfum.com</Typography>
                  <Typography variant='caption'>+923 164246008</Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item md={1} xs={3}>
              <Stack
                gap='2px'
                sx={{
                  height: "100%",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Link href='/'>
                  <StyledLink variant='body2' className='heading'>
                    Home
                  </StyledLink>
                </Link>
                <Link href='/'>
                  <StyledLink variant='body2' className='heading'>
                    Blogs
                  </StyledLink>
                </Link>
                <Link href='/'>
                  <StyledLink variant='body2' className='heading'>
                    Portfolio
                  </StyledLink>
                </Link>
                <Link href='/'>
                  <StyledLink variant='body2' className='heading'>
                    Configurator
                  </StyledLink>
                </Link>
                <Link href='/'>
                  <StyledLink variant='body2' className='heading'>
                    Contact
                  </StyledLink>
                </Link>
              </Stack>
            </Grid>
            <Grid item md={1} xs={3}>
              <Stack
                sx={{
                  height: "100%",
                  justifyContent: "flex-end",
                  alignItems: { xs: "center", md: "flex-end" },
                }}
              >
                <Box height='87px' width='65px'>
                  <Image
                    src={SmallLogo}
                    alt='small-logo'
                    style={{ height: "100%", width: "100%" }}
                  />
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </FooterContainer>
      </MainContainer>
    </FooterMainContainer>
  );
};

export default Footer;
