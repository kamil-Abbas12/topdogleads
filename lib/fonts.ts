import { Roboto, Poppins, Manrope } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
