import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	cacheComponents: true,
	reactCompiler: false,
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
	experimental: {
		turbopackFileSystemCacheForDev: true,
	},
};

export default nextConfig;
