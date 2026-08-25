/** @type {import('next').NextConfig} */
const nextConfig = {
  // Statyczny eksport do katalogu out/ (czysty HTML, bez Node runtime na serwerze)
  output: "export",
  // Eksport statyczny nie ma serwera do optymalizacji obrazów
  images: { unoptimized: true },
  // Generuje kursy/index.html zamiast kursy.html — działa na zwykłym Apache/FTP bez rewrite
  trailingSlash: true,
};

export default nextConfig;
