import {
  Barlow_Condensed,
  Inter,
  Poltawski_Nowy,
  Podkova,
  Barlow,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Frontend Mentor Submissions",
  description: "All of my submissions in one confined environment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Workbench&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>{children}</body>
    </html>
  );
}
