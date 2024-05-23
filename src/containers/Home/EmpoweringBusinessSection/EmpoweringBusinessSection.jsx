import { FooterMainContainer, MainContainer } from "@/themes/themes";
import { Stack, Typography } from "@mui/material";
import Icon from "/public/icon.png";
import Image from "next/image";
import AnimatedHeader from "@/components/AnimatedHeader";

const EmpoweringBusinessSection = () => {
  return (
    <FooterMainContainer>
      <MainContainer maxWidth='xl'>
        <Stack className='box-center' gap={12} paddingY='150px'>
          <AnimatedHeader text='empowering business across' primary={[1]} />
          <Stack direction='row' className='box-center' sx={{ flexWrap: "wrap" }} gap={8}>
            <Stack gap='2px' className='box-center'>
              <Image src={Icon} style={{ height: "150px", width: "150px" }} />
              <Typography>Interior Design</Typography>
            </Stack>
            <Stack gap='2px' className='box-center'>
              <Image src={Icon} style={{ height: "150px", width: "150px" }} />
              <Typography>Interior Design</Typography>
            </Stack>
            <Stack gap='2px' className='box-center'>
              <Image src={Icon} style={{ height: "150px", width: "150px" }} />
              <Typography>Interior Design</Typography>
            </Stack>
            <Stack gap='2px' className='box-center'>
              <Image src={Icon} style={{ height: "150px", width: "150px" }} />
              <Typography>Interior Design</Typography>
            </Stack>
            <Stack gap='2px' className='box-center'>
              <Image src={Icon} style={{ height: "150px", width: "150px" }} />
              <Typography>Interior Design</Typography>
            </Stack>
            <Stack gap='2px' className='box-center'>
              <Image src={Icon} style={{ height: "150px", width: "150px" }} />
              <Typography>Interior Design</Typography>
            </Stack>
            <Stack gap='2px' className='box-center'>
              <Image src={Icon} style={{ height: "150px", width: "150px" }} />
              <Typography>Interior Design</Typography>
            </Stack>
            <Stack gap='2px' className='box-center'>
              <Image src={Icon} style={{ height: "150px", width: "150px" }} />
              <Typography>Interior Design</Typography>
            </Stack>
            <Stack gap='2px' className='box-center'>
              <Image src={Icon} style={{ height: "150px", width: "150px" }} />
              <Typography>Interior Design</Typography>
            </Stack>
            <Stack gap='2px' className='box-center'>
              <Image src={Icon} style={{ height: "150px", width: "150px" }} />
              <Typography>Interior Design</Typography>
            </Stack>
          </Stack>
        </Stack>
      </MainContainer>
    </FooterMainContainer>
  );
};

export default EmpoweringBusinessSection;
