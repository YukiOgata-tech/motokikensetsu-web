export default function Footer() {
  return (
    <footer className="relative text-white text-center py-4 mt-8 wood-texture">
      <div className="absolute inset-0 bg-black/80" />
      <p className="relative z-10 text-sm">
        &copy; {new Date().getFullYear()} 株式会社本木建設
      </p>
    </footer>
  );
}
