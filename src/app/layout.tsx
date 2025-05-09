import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Motoflex",
  description:
    "Buy Used cars at Motoflex ✅Large selection of vehicles ✅Fast delivery to any country ✅Profitable price ⭐ Guarantees ✍Customer reviews – Motoflex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* favicon */}
        <link rel="icon" href="/images/favicon.png" />

        {/* google fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
