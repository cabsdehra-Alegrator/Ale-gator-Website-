import type { ReactNode } from "react";
import { LOCATION_STATES } from "@/lib/locations";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCATION_STATES.map((state) => ({ state: state.slug }));
}

export default function StateLayout({ children }: { children: ReactNode }) {
  return children;
}
