module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "/:path*",
      },
    ];
  },
};
