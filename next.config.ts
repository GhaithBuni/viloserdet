import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/Forsakring", destination: "/forsakring", statusCode: 301 },
      { source: "/Prisgaranti", destination: "/prisgaranti", statusCode: 301 },
      { source: "/Kontakt", destination: "/kontakt", statusCode: 301 },
      { source: "/OmOss", destination: "/omoss", statusCode: 301 },
      { source: "/FAQ", destination: "/faq", statusCode: 301 },
      {
        source: "/Integritetspolicy",
        destination: "/integritetspolicy",
        statusCode: 301,
      },
      {
        source: "/Tipsinforflytt",
        destination: "/tipsinforflytt",
        statusCode: 301,
      },
      {
        source: "/Ingariflytthjalp",
        destination: "/ingariflytthjalp",
        statusCode: 301,
      },
      {
        source: "/Ingariflyttstadingen",
        destination: "/ingariflyttstadingen",
        statusCode: 301,
      },
      {
        source: "/Ingarivisningsstadning",
        destination: "/ingarivisningsstadning",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
