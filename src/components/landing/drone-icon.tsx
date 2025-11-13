import type { SVGProps } from "react";

export function DroneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 12h.01" />
      <path d="M6 6h.01" />
      <path d="M18 6h.01" />
      <path d="M6 18h.01" />
      <path d="M18 18h.01" />
      <path d="M12 6V2" />
      <path d="M12 22v-4" />
      <path d="M6 12H2" />
      <path d="M22 12h-4" />
      <path d="m16.5 7.5-3 3" />
      <path d="m7.5 7.5 3 3" />
      <path d="m16.5 16.5-3-3" />
      <path d="m7.5 16.5 3-3" />
    </svg>
  );
}
