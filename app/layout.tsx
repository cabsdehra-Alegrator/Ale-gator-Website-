import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ale-gator | North India Cab Network",
  description: "Plan intercity, airport and outstation cab journeys across North India through a growing network of local travel partners.",
  applicationName: "Ale-gator",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
