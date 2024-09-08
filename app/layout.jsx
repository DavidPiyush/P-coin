import "./_styles/globals.css";
import Header from "./_components/Header";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: {
    template: "%s / The P-Coin",
    default: "Welcome / The P-Coin",
  },
  description:
    "P-Coin is new crypto coin, which change the world currency into new form",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`overflow-x-hidden ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
