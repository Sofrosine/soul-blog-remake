const fs = require("fs");
const path = require("path");
import matter from "gray-matter";
import { getUnixTime } from "date-fns";
import readingTime from "reading-time";

export const getBlogs = () => {
  let blogs = [];
  const files = fs.readdirSync(path.join("./data/blogs"));

  if (files) {
    files.forEach((file) => {
      if (path.extname(file) == ".mdx") {
        const source = fs.readFileSync(path.join("./data/blogs", `${file}`), {
          encoding: "utf-8",
        });
        const { content, data } = matter(source);
        const readingTimeVar = readingTime(content).text;
        blogs.push({
          ...data,
          link: file.replace(".mdx", ""),
          readingTime: readingTimeVar,
        });
      }
    });
    blogs.sort(
      (a, b) => getUnixTime(new Date(b?.date)) - getUnixTime(new Date(a?.date))
    );
    return blogs;
  } else {
    return null;
  }
};

export const getPaths = () => {
  let paths = [];

  const files = fs.readdirSync(path.join("./data/blogs"));
  if (files) {
    files.forEach((file) => {
      if (path.extname(file) == ".mdx") {
        paths.push({ params: { blogName: file.replace(".mdx", "") } });
      }
    });
    return paths;
  } else {
    return null;
  }
};

export const getFileData = (fileName) => {
  const data = fs.readFileSync(path.join("./data/blogs", `${fileName}.mdx`), {
    encoding: "utf-8",
  });
  if (data) {
    return data;
  } else {
    return null;
  }
};
