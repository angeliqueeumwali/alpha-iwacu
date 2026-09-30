
import "./globals.css";

export const metadata = {
  title: "URUMURI Digital Studio | Digital Experiences for Growing Businesses",
  description:
    "URUMURI Digital Studio helps hotels and growing businesses build modern websites, booking systems and practical digital solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}