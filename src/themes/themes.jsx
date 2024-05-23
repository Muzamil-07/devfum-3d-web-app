'use client'

import {
  Container,
  Stack,
  Typography,
  createTheme,
  styled,
  alpha,
  Avatar,
  Grid,
  TextField,
  Button,
  Rating,
  Drawer
} from '@mui/material'
import { StaticDateTimePicker } from '@mui/x-date-pickers'

const colors = {
  darkBackground: '#152028',
  background: '#222F3A',
  primary: '#25DBE3',
  white: '#ffffff',
  black: '#000000'
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 300, // phone
      sm: 600, // tablets
      md: 850, // small laptop
      lg: 1200, // desktop
      xl: 1385
    }
  },
  palette: {
    primary: {
      main: colors.primary
    },
    background: {
      default: colors.background,
      dark: colors.darkBackground
    },
    text: {
      primary: colors.white,
      dark: colors.black
    }
  }
  // typography: {
  //   fontFamily: "GTF",
  // },
})

export default theme

// Main Container for every section -----
export const MainContainer = styled(Container)({
  marginX: 'auto'
})

// Navbar -------
export const NavbarContainer = styled(Stack)(({ theme }) => ({
  padding: '20px 0px',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
}))

export const NavlinksContainer = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: '35px',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

export const StyledLink = styled(Typography)(({ theme, props }) => ({
  color: props?.isActive ? colors.primary : colors.white,
  ':hover': {
    color: !props?.isActive && colors.primary
  },
  transition: 'color .1s ease-in-out'
}))

export const EndtoendTextContainer = styled(Stack)({
  height: '100vh',
  justifyContent: 'center'
  // backgroundColor: "green",
})

// Footer --------
export const FooterMainContainer = styled(Stack)({
  backgroundColor: colors.darkBackground,
  padding: '20px 0px',
  marginTop: 'auto'
})

export const FooterContainer = styled(Stack)({
  padding: '20px 0px',
  justifyContent: 'flex-end'
})

// Big Headings
export const MainHeading = styled(Typography)({
  letterSpacing: '4px',
  fontWeight: 'bold',
  textTransform: 'uppercase'
})

// Hero Section

// Blog Page ...

// Blog Page Hero Section
export const HeroSectionBackground = styled(Stack)(({}) => ({
  borderRadius: '30px',
  height: '500px',
  width: '100%',
  margin: '30px 0px',
  position: 'relative',
  overflow: 'hidden',
  justifyContent: 'flex-end',
  [theme.breakpoints.down('md')]: {
    height: '400px',
    margin: '15px 0px'
  }
}))
export const BgOverlay = styled('div')({
  backgroundColor: alpha(colors.black, 0.5),
  position: 'absolute',
  inset: 0,
  zIndex: 1
})

export const HeroBackgroundTextContainer = styled(Stack)(({}) => ({
  alignItems: 'flex-start',
  zIndex: 2,
  padding: '60px 35px',
  maxWidth: '50%',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    padding: '20px 10px'
  }
}))

export const HeroBgTag = styled(Stack)({
  padding: '5px 12px',
  borderRadius: '8px',
  color: colors.black,
  backgroundColor: colors.primary,
  textTransform: 'uppercase',
  fontSize: '0.875rem'
})

export const HeroBgText = styled(Typography)({
  color: colors.white,
  fontWeight: 'bold'
})

export const HeroBgUser = styled(Stack)({
  flexDirection: 'row',
  alignItems: 'center'
})

export const BgUserAvatar = styled(Avatar)({
  backgroundColor: colors.white
})

export const BgUserName = styled(Typography)({
  color: colors.primary
})

export const BgUserDate = styled(Typography)({
  color: colors.white,
  fontSize: '0.875rem'
})

// Blog Page Blog Section

export const BlogSectionContainer = styled(Grid)({
  justifyContent: 'center',
  margin: '10px 0px 30px 0px',
  gap: '38px',
  [theme.breakpoints.down('md')]: {
    margin: '30px 0px'
  }
})
export const BlogCardContainer = styled(Stack)({
  height: '520px',
  maxWidth: '400px',
  background:
    'radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)',
  borderRadius: '30px',
  border: `3px solid ${alpha(colors.white, 0.7)}`,
  padding: '15px',
  flexShrink: 0,
  cursor: 'pointer'
})

export const BlogCardImage = styled(Stack)({
  height: '50%',
  width: '100%',
  overflow: 'hidden',
  borderRadius: '20px'
})

export const BlogCardDetails = styled(Stack)({
  alignItems: 'flex-start'
})

export const BlogCardTag = styled(Typography)({
  color: alpha(colors.white, 0.7),
  fontSize: '0.9rem'
})

export const BlogCardTitle = styled(Typography)({
  color: colors.white,
  fontWeight: 'bold'
})

export const BlogCardUserTypo = styled(Typography)({
  color: alpha(colors.white, 0.7),
  fontSize: '0.93rem'
})

// blog Content Page
export const BlogContentContainer = styled(Stack)(({}) => ({
  padding: '40px 0px 60px 0px',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    padding: '20px 0px'
  },
  gap: '30px'
}))

export const BlogContentHeading = styled(Stack)({
  gap: '16px'
})

export const BlogContentTag = styled(Stack)({
  padding: '5px 12px',
  borderRadius: '8px',
  color: colors.white,
  backgroundColor: colors.primary,
  textTransform: 'uppercase',
  fontSize: '0.9rem',
  width: 'fit-content'
})

export const BlogContentTitle = styled(Typography)({
  color: colors.white,
  fontWeight: 'bold'
})

export const BlogContentUserContainer = styled(Stack)({
  flexDirection: 'row',
  alignItems: 'center',
  gap: '14px'
})

export const BlogContentUserTypo = styled(Typography)({
  color: alpha(colors.white, 0.7),
  fontSize: '0.93rem'
})

export const BLogContentMainImage = styled(Stack)({
  height: '100%',
  width: '100%',
  overflow: 'hidden',
  borderRadius: '20px'
})

export const BlogContentParagraph = styled(Stack)({
  gap: '4px'
})

export const BlogContentParagraphHeading = styled(Typography)({
  color: colors.white,
  fontWeight: 600
})

export const BlogContentParagraphText = styled(Typography)({
  color: alpha(colors.white, 0.7)
})

export const BlogContentQuote = styled(Typography)({
  color: colors.white,
  padding: '0px 0px 0px 40px',
  textAlign: 'left',
  fontStyle: 'italic',
  [theme.breakpoints.down('md')]: {
    padding: '0px 0px 0px 10px'
  }
})

// contact page

export const ContactFormContainer = styled(Stack)({
  padding: '40px 10px',
  gap: '20px',
  alignItems: 'center',
  textAlign: 'center'
})

export const ContactFormHeadingContainer = styled(Stack)({
  textAlign: 'center',
  gap: '5px'
})

export const ContactFormHeading = styled(Typography)({
  color: colors.white,
  fontWeight: 'bold',
  textTransform: 'uppercase'
})

export const ContactFormSubHeading = styled(Typography)({
  color: alpha(colors.white, 0.9)
})

export const ContactFormInnerCOntainer = styled(Stack)({
  gap: '25px',
  width: '100%'
})

export const ContactFormField = styled(TextField)({
  width: '100%',
  '& .MuiInputBase-root': {
    '&:before': {
      borderBottom: `1px solid ${alpha(colors.white, 0.7)}`
    }
  },
  '& .MuiInput-input': {
    padding: '20px 0px'
  },
  '& .MuiInputLabel-root': {
    color: colors.white
  },
  '& .MuiFormHelperText-root': {
    fontSize: '0.7rem'
  },
  '& input': {
    '&:-webkit-autofill': {
      WebkitBoxShadow: `0 0 0 1000px ${colors.background} inset !important;`,
      WebkitTextFillColor: '#ffffff'
    }
  }
})

export const ContactFormButton = styled(Button)({
  borderRadius: '55px',
  width: 'fit-content',
  padding: '8px 35px !important',
  border: `1px solid ${colors.white}`,
  color: colors.white,
  gap: '30px'
})

// Configurator Page

// Industry Select Section
export const ConfiguratorPageMainContainer = styled(Stack)({
  gap: '50px',
  padding: '40px 0px',
  [theme.breakpoints.down('md')]: {
    padding: '15px 0px'
  },
  alignItems: 'center',
  width: '100%'
})

export const SelectIndustryMainContainer = styled(Stack)({
  gap: '30px',
  width: '100%'
})

export const IndustriesContainer = styled(Grid)({
  gap: '38px',
  justifyContent: 'center',
  width: '100%',
  [theme.breakpoints.down('lg')]: {
    gap: '20px'
  }
})

export const IndustryCardContainer = styled(Stack)({
  background:
    'radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)',
  borderRadius: '30px',
  border: `3px solid ${alpha(colors.white, 0.7)}`,
  maxWidth: '420px',
  flexShrink: 0,
  height: '220px',
  borderRadius: '20px',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  ':hover': {
    // border:"0px"
  }
})

export const IndustryCardText = styled(Typography)({
  color: colors.white,
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)'
})

export const IndustryCardImage = styled(Stack)({
  height: '160px',
  width: '180px',
  position: 'absolute',
  zIndex: 1
})

// animated Header

export const AnimatedHeaderContainer = styled(Typography)({
  textTransform: 'uppercase',
  display: 'inline-block'
})

// home page
export const SelectServiceSectionMainContainer = styled(Stack)({
  padding: '150px 0px',
  gap: '50px',
  [theme.breakpoints.down('md')]: {
    padding: '50px 0px'
  }
})

export const SelectServicesMainContainer = styled(Stack)({
  borderRadius: '20px',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  height: '415px',
  flexDirection: 'row',
  display: 'flex !important',
  alignItems: 'center'
})

export const SelectServicesSubContainer = styled(Stack)({
  height: '100%',
  width: '100%'
})

export const SelectServicesDivider = styled('div')({
  height: '80%',
  width: '0.5px',
  borderRight: `thin solid ${alpha(colors.white, 0.3)}`
})

export const SelectServiceButtonContainer = styled(Stack)({
  flexDirection: 'row',
  justifyContent: 'center',
  gap: '20px'
})

export const SelectServiceSliderButton = styled(Button)({
  backgroundColor: colors.white,
  height: '40px',
  width: '40px',
  minWidth: 0,
  borderRadius: '100%'
})
// Configurator Sub (Industry) Page
export const IndustryPageMainContainer = styled(Stack)({
  position: 'relative',
  width: '100vw',
  margin: '30px 0px',
  [theme.breakpoints.down('md')]: {
    margin: '10px 0px'
  }
})

export const IndustryPageSubContainer = styled(Container)({
  textAlign: 'center'
})

export const IndustrySidebarOpenButton = styled(Button)({
  height: '120px',
  width: '45px',
  minWidth: 0,
  borderRadius: '25px 0px 0px 25px',
  border: `2px solid ${alpha(colors.white, 0.7)}`,
  background:
    'radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)',
  position: 'absolute',
  right: 0,
  top: '50%',
  transform: 'translateY(-50%)',
  [theme.breakpoints.down('md')]: {
    position: 'relative',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%) rotate(90deg)'
  }
})

export const IndustryPageSideBar = styled(Drawer)({
  '& .MuiDrawer-paper': {
    borderRadius: '30px 0px 0px 30px',
    backgroundColor: colors.background,
    border: `3px solid ${alpha(colors.white, 0.7)}`,
    borderRight: '0px',
    width: '500px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      border: `3px solid ${alpha(colors.white, 0.7)}`,
      borderBottom: '0px',
      borderRadius: '25px 25px 0px 0px'
    }
  }
})

export const SidebarMainContainer = styled(Stack)({
  background:
    'radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)',
  height: '100%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  gap: '40px'
})

export const ConfiguratorName = styled(Typography)({
  color: colors.white,
  textAlign: 'center'
})

export const SideBarValueContainer = styled(Stack)({
  gap: '15px'
})

export const SidebarOptionSelectionContainer = styled(Stack)({
  gap: '6px',
  width: '160px',
  cursor: 'pointer',
  [theme.breakpoints.down('md')]: {
    width: '100px'
  }
})

export const SidebarOptionsImageContainer = styled(Stack)(({ props }) => ({
  width: '100%',
  height: '85px',
  borderRadius: '10px',
  overflow: 'hidden',
  backgroundColor: props.backgroundColor && props.backgroundColor,
  [theme.breakpoints.down('md')]: {
    height: '60px'
  }
}))

export const ConfiguratorContainer = styled(Stack)({
  position: 'relative',
  margin: '50px 0px',
  [theme.breakpoints.down('md')]: {
    margin: '0px 0px'
  }
})

export const ConfiguratorItemContainer = styled(Stack)({
  display: 'flex !important',
  width: '400px',
  height: '400px',
  justifyContent: 'center',
  alignItems: 'center'
})

export const ConfiguratorSwiperButton = styled(Button)(({ props }) => ({
  backgroundColor: colors.white,
  height: '40px',
  width: '40px',
  minWidth: 0,
  borderRadius: '100%',
  left: props.direction === 'left' && 0,
  right: props.direction === 'right' && 0,
  top: '50%',
  transform: 'translateY(-50%)',
  position: 'absolute',
  zIndex: 10
}))

export const SelectServiceContainer = styled(Stack)({
  height: '100%',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  padding: '30px 25px',
  gap: '15px'
})

export const SelectServiceName = styled(Typography)({
  color: colors.white
})

export const SelectServicesHoveredContainer = styled(Stack)({
  gap: '10px',
  padding: '25px 20px',
  background:
    'linear-gradient(135.81deg, #237D88 1.84%, #B6EDEB 94.08%, #AFF1EC 94.09%)',
  position: 'absolute',
  height: '100%'
})

export const ServicesHoveredText = styled(Typography)({
  color: colors.black
})

export const SelectServicesSliderContainer = styled(Stack)({
  position: 'relative',
  width: '100%',
  gap: '30px'
})

// clients section
export const ClientSectionMainContainer = styled(Stack)({
  padding: '100px 0px',
  gap: '50px',
  [theme.breakpoints.down('md')]: {
    padding: '50px 0px'
  }
})

export const ClientSliderHeader = styled('div')({
  position: 'relative',
  width: '100%'
})

export const ClientCardContainer = styled(Stack)({
  background:
    'radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(242, 242, 242, 0.4) 0%, rgba(255, 255, 255, 0) 100%)',
  height: '510px',
  // width: "300px",
  border: `3px solid ${alpha(colors.white, 0.7)}`,
  borderRadius: '25px',
  padding: '30px',
  gap: '20px',
  justifyContent: 'space-between',
  overflow: 'hidden',
  position: 'relative',
  // flexShrink: 0,
  backdropFilter: 'blur(10px)'
})

export const ClientUserContainer = styled(Stack)({
  flexDirection: 'row',
  gap: '20px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center'
  }
})

export const ClientUserAvatar = styled(Avatar)({
  backgroundColor: colors.white
})

export const ClientDetailsContainer = styled(Stack)({
  gap: '20px',
  [theme.breakpoints.down('md')]: {
    alignItems: 'center'
  }
})

export const ClientText = styled(Typography)({
  color: colors.black
})

export const ClientRatingContainer = styled(Stack)({
  borderTop: `thin solid ${alpha(colors.white, 0.5)}`,
  alignItems: 'center',
  width: 'fit-content',
  alignSelf: 'center',
  padding: '10px'
})

export const ClientRating = styled(Rating)({
  gap: '20px',
  color: colors.primary
})

// book a call section
export const BookCallSectionMainContainer = styled(Stack)({
  padding: '80px 0px',
  gap: '50px',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    padding: '50px 0px'
  }
})

export const DateTimeContainer = styled(Stack)({
  alignItems: 'center',
  gap: '20px'
})

export const DateTimePicker = styled(StaticDateTimePicker)({
  height: '550px',
  width: '450px',
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  },
  '& .MuiPickersToolbar-content': {
    display: 'none'
  },
  background:
    'radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)',
  borderRadius: '25px',
  border: `3px solid ${alpha(colors.white, 0.7)}`,
  color: `${colors.white} !important`,
  '& .mui-1hbyad5-MuiTypography-root': {
    color: colors.white,
    fontFamily: 'GTF',
    textAlign: 'center'
  },
  '& .MuiDateTimePickerToolbar-root': {
    alignItems: 'center'
  },
  '& .MuiPickersLayout-contentWrapper': {
    gap: '30px'
  },
  '& .MuiTimeClock-arrowSwitcher': {
    top: 0,
    right: 0
  },
  '& .mui-1vooibu-MuiSvgIcon-root': {
    fill: `${colors.white} !important`
  },
  '& .MuiPickersCalendarHeader-switchViewIcon': {
    fill: `${colors.white} !important`
  },
  '& .mui-i4bv87-MuiSvgIcon-root': {
    fill: `${colors.white} !important`
  },
  '& .MuiPickersLayout-actionBar': {
    display: 'none'
  }
})

export const BookCallButton = styled(Button)({
  background:
    'radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)',
  borderRadius: '25px',
  border: `2px solid ${alpha(colors.white, 0.7)}`,
  color: colors.white,
  padding: '5px 20px'
})

export const ProjectButton = styled(Button)({
  background:
    'radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)',
  borderRadius: '25px',
  border: `2px solid ${alpha(colors.white, 0.7)}`,
  color: colors.white,
  padding: '5px 20px'
})
