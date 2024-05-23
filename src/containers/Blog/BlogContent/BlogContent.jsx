import {
  BLogContentMainImage,
  BgUserAvatar,
  BlogContentContainer,
  BlogContentHeading,
  BlogContentParagraph,
  BlogContentParagraphHeading,
  BlogContentParagraphText,
  BlogContentQuote,
  BlogContentTag,
  BlogContentTitle,
  BlogContentUserContainer,
  BlogContentUserTypo,
} from "@/themes/themes";
import React from "react";
import Image from "next/image";
import BlogImage from "/public/blogContent.png";

const BlogContent = () => {
  return (
    <BlogContentContainer>
      <BlogContentHeading>
        <BlogContentTag>technology</BlogContentTag>
        <BlogContentTitle variant='h5'>
          The Impact of Technology on the Workplace: How Technology is Changing
        </BlogContentTitle>
        <BlogContentUserContainer>
          <BgUserAvatar>A</BgUserAvatar>
          <BlogContentUserTypo>MAriko Yashida</BlogContentUserTypo>
          <BlogContentUserTypo>August 20, 2022</BlogContentUserTypo>
        </BlogContentUserContainer>
      </BlogContentHeading>

      <BLogContentMainImage>
        <Image
          src={BlogImage}
          alt='main-blogImg'
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </BLogContentMainImage>

      <BlogContentParagraph>
        <BlogContentParagraphHeading>Research Your Destination</BlogContentParagraphHeading>
        <BlogContentParagraphText>
          Before embarking on your journey, take the time to research your destination. This
          includes understanding the local culture, customs, and laws, as well as identifying top
          attractions, restaurants, and accommodations. Doing so will help you navigate your
          destination with confidence and avoid any cultural faux pas. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus
          vitae aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis eleifend quam
          adipiscing vitae. Viverra adipiscing at in tellus.
        </BlogContentParagraphText>
      </BlogContentParagraph>
      <BlogContentParagraph>
        <BlogContentParagraphHeading>Plan Your Itinerary</BlogContentParagraphHeading>
        <BlogContentParagraphText>
          While it's essential to leave room for spontaneity and unexpected adventures, having a
          rough itinerary can help you make the most of your time and budget. Identify the must-see
          sights and experiences and prioritize them according to your interests and preferences.
          This will help you avoid overscheduling and ensure that you have time to relax and enjoy
          your journey. Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus
          magna fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non
          sodales neque sodales ut etiam sit amet.
        </BlogContentParagraphText>
      </BlogContentParagraph>

      <BlogContentParagraphText>
        Traveling is an enriching experience that opens up new horizons, exposes us to different
        cultures, and creates memories that last a lifetime. However, traveling can also be
        stressful and overwhelming, especially if you don't plan and prepare adequately. In this
        blog article, we'll explore tips and tricks for a memorable journey and how to make the most
        of your travels. One of the most rewarding aspects of traveling is immersing yourself in the
        local culture and customs. This includes trying local cuisine, attending cultural events and
        festivals, and interacting with locals. Learning a few phrases in the local language can
        also go a long way in making connections and showing respect.
      </BlogContentParagraphText>

      <BlogContentQuote>
        “ Traveling can expose you to new environments and potential health risks, so it's crucial
        to take precautions to stay safe and healthy. ”
      </BlogContentQuote>

      <BLogContentMainImage>
        <Image
          src={BlogImage}
          alt='main-blogImg'
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </BLogContentMainImage>
    </BlogContentContainer>
  );
};

export default BlogContent;
