import axios from "axios";
import config from "./axios-config";

const blog = axios.create(config);

const getBlogs = async function () {
  try {
    const res = await blog.get("/blog");
    return res;
  } catch (error) {
    console.error();
  }
};

const getSortedBlogs = async function (type) {
  try {
    const res = await blog.get("/blog/sortedblogs", {
      params: {
        type: type,
      },
    });
    return res;
  } catch (error) {
    console.error();
  }
};

export { getBlogs, getSortedBlogs };
