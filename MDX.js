const fs = require("fs");
const path = require("path");
import matter from "gray-matter";
import moment from "moment";

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
        blogs.push({ ...data, link: file.replace(".mdx", "") });
      }
    });
    blogs.sort((a, b) => moment(b?.date).unix() - moment(a?.date).unix());
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
