// next.config.js
module.exports = {
  basepath: "/resume",
  assetPrefix: "/resume",
  images: {
    domains: ["res.cloudinary.com"],
    loader: "cloudinary",
    path: "https://res.cloudinary.com/brayanmbeltre/image/upload/v1627540700/",
  },
};
