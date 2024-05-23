"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  BlogCardContainer,
  BlogCardImage,
  BlogCardDetails,
  BlogCardTag,
  BlogCardTitle,
  HeroBgUser,
  BgUserAvatar,
  BlogCardUserTypo,
} from "@/themes/themes";
import Image from "next/image";
import { motion } from "framer-motion";

const BlogCard = ({ blog }) => {
  const router = useRouter();
  return (
    <BlogCardContainer
      onClick={() => router.push(`/blog/${blog._id || blog.name}`)}
      gap={2.5}
      component={motion.div}
      whileHover={{
        scale: 1.01,
        border: "3px",
      }}
      transition={{ duration: 0.2 }}
    >
      <BlogCardImage>
        <Image
          src={blog.img}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </BlogCardImage>
      <BlogCardDetails gap={2}>
        <BlogCardTag>{blog.tag}</BlogCardTag>
        <BlogCardTitle variant='h6'>{blog.title}</BlogCardTitle>
        <HeroBgUser gap={1.5}>
          <BgUserAvatar src={blog.user?.img}>{blog.user.name[0]}</BgUserAvatar>
          <BlogCardUserTypo>{blog.user.name}</BlogCardUserTypo>
          <BlogCardUserTypo>{blog.createdAt}</BlogCardUserTypo>
        </HeroBgUser>
      </BlogCardDetails>
    </BlogCardContainer>
  );
};

export default BlogCard;
