"use client";

import AnimatedHeader from "@/components/AnimatedHeader";
import {
  BookCallSectionMainContainer,
  MainContainer,
  DateTimePicker,
  DateTimeContainer,
  BookCallButton,
} from "@/themes/themes";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const BookCallSection = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MainContainer maxWidth="xl">
        <BookCallSectionMainContainer>
          <AnimatedHeader text="Book a call" primary={[2]} sx={{ textAlign: "center" }} />
          <DateTimeContainer>
            <DateTimePicker />
          <BookCallButton>Schedule</BookCallButton>
          </DateTimeContainer>
        </BookCallSectionMainContainer>
      </MainContainer>
    </LocalizationProvider>
  );
};

export default BookCallSection;
