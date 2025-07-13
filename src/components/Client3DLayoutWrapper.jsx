// src/app/Client3DLayoutWrapper.jsx
"use client";
import dynamic from "next/dynamic";

// クライアント側でのみ描画
const Background3DLayout = dynamic(() => import("../app/Background3DLayout"), {
  ssr: false,
});

export default function Client3DLayoutWrapper({ children }) {
  return (
    <Background3DLayout>
      {children}
    </Background3DLayout>
  );
}
