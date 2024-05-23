import BlogCard from "@/components/BlogCard";
import React from "react";
import { Grid } from "@mui/material";
import BlogImage from "/public/blogCard.png";
import { BlogSectionContainer } from "@/themes/themes";

const data = [
  {
    img: BlogImage,
    tag: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    createdAt: "June 12, 2055",
    user: { name: "John Washington" },
  },
  {
    img: BlogImage,
    tag: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    createdAt: "June 12, 2055",
    user: { name: "John Washington" },
  },
  {
    img: BlogImage,
    tag: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    createdAt: "June 12, 2055",
    user: { name: "John Washington" },
  },
  {
    img: BlogImage,
    tag: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    createdAt: "June 12, 2055",
    user: { name: "John Washington" },
  },
  {
    img: BlogImage,
    tag: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    createdAt: "June 12, 2055",
    user: { name: "John Washington" },
  },
  {
    img: BlogImage,
    tag: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    createdAt: "June 12, 2055",
    user: { name: "John Washington" },
  },
  {
    img: BlogImage,
    tag: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    createdAt: "June 12, 2055",
    user: { name: "John Washington" },
  },
  {
    img: BlogImage,
    tag: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    createdAt: "June 12, 2055",
    user: { name: "John Washington" },
  },
  {
    img: BlogImage,
    tag: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    createdAt: "June 12, 2055",
    user: { name: "John Washington" },
  },
  {
    img: BlogImage,
    tag: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    createdAt: "June 12, 2055",
    user: { name: "John Washington" },
  },
];

const BlogSection = () => {
  return (
    <BlogSectionContainer container columns={3.5}>
      {data.map((blog, index) => (
        <Grid item lg={1.1} key={index}>
          <BlogCard blog={blog} />
        </Grid>
      ))}
    </BlogSectionContainer>
  );
};

export default BlogSection;
