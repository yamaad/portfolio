import MillionCompiler from "@million/lint";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["api.microlink.io"],
  },
};

export default MillionCompiler.next({
  rsc: true, // if used in the app router mode
})(nextConfig);
