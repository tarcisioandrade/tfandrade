const { rename } = require("node:fs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.sanity.io",
      },
    ],
  },
};
const SKIP_ADMIN_ROUTE = process.env.SKIP_ADMIN_ROUTE === "true";

if (SKIP_ADMIN_ROUTE) {
  rename("src/app/admin", "src/app/_admin", (err) => {
    if (err) throw err;
    console.log("Pasta renomeada com sucesso!");
  });
}
module.exports = nextConfig;
