import "./globals.css";
import  "./tailwind.css";


export const metadata = {
  title: "TechnoMelt Solutions",
  description: "TechnoMelt Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
