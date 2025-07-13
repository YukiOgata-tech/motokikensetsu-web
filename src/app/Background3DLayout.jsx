"use client";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import BackgroundBlocks from "@/components/BackgroundBlocks";

export default function Background3DLayout({ children }) {
  return (
    <div className="relative min-h-screen">
      <BackgroundBlocks />
      <NavBar />
      <main className="min-h-[80vh] max-w-6xl mx-auto px-2 sm:px-4 py-8 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
