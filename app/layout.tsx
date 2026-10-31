import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ale-gator | Cab journeys, connected",
  description: "Plan intercity, airport and outstation cab journeys with a managed network of local travel partners.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
