import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alterlaboratory.com"),
  title: {
    default: "ALTER Laboratory — Saúde não está pronta",
    template: "%s · ALTER Laboratory",
  },
  description:
    "Laboratório experimental independente que explora novos futuros para a saúde por meio de design, tecnologia e inteligência artificial.",
  keywords: [
    "ALTER Laboratory",
    "saúde digital",
    "healthtech",
    "inteligência artificial em saúde",
    "design de produto em saúde",
    "tecnologia médica",
    "experiência clínica",
  ],
  authors: [{ name: "Carlos R. Filho" }],
  creator: "ALTER Laboratory",
  publisher: "ALTER Laboratory",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "ALTER Laboratory",
    title: "ALTER Laboratory — Saúde não está pronta",
    description:
      "Design, tecnologia e inteligência artificial para explorar o que a saúde pode se tornar.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "ALTER Laboratory" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ALTER Laboratory — Saúde não está pronta",
    description:
      "Design, tecnologia e inteligência artificial para explorar o que a saúde pode se tornar.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4f3ef",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
