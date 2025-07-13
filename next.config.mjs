/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "tekisei-research.com",     // ← 必要な外部ドメインを追加
      "images.unsplash.com"
    ],
  },
};

export default nextConfig;
