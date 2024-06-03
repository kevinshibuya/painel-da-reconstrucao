/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    /**
     * Force scss source maps for debugging. If there are performance issues or you don't need debug css, use the value "eval-source-map" instead.
     */
    if (options.dev) {
      Object.defineProperty(config, "devtool", {
        get() {
          return "source-map";
        },
        set() {},
      });
    }

    return config;
  },
  // output: "export",
  basePath: "/especiais/painel-da-reconstrucao",
};

export default nextConfig;
