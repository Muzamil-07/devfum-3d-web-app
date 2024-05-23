"use client";

import {
  ClientCardContainer,
  ClientRating,
  ClientRatingContainer,
  ClientText,
  ClientUserAvatar,
  ClientUserContainer,
  ClientDetailsContainer,
} from "@/themes/themes";
import React from "react";
import { SwiperSlide, useSwiperSlide } from "swiper/react";

const ClientCard = ({ client, isActive }) => {
  const swiperSlide = useSwiperSlide();
  return (
    <ClientCardContainer
      sx={{
        // maxWidth: swiperSlide?.isActive ? "400px" : "auto",
      }}
    >
      <ClientUserContainer>
        <ClientUserAvatar>{client.name[0]}</ClientUserAvatar>
        <ClientDetailsContainer>
          <ClientText variant='h5' className='heading'>
            {client.name}
          </ClientText>
          <ClientText variant='body2'>{client.comment}</ClientText>
        </ClientDetailsContainer>
      </ClientUserContainer>
      <ClientRatingContainer>
        <ClientRating defaultValue={client.stars} readOnly size='large' />
      </ClientRatingContainer>
    </ClientCardContainer>
  );
};

export default ClientCard;
