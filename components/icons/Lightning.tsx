type LightningProps = {
  variant?: "solid" | "light" | "outlined";
  className?: string;
};

const variants = {
  solid: {
    fill: "#1D0617",
    stroke: "#480F39",
  },
  light: {
    fill: "#DDD0DA",
    stroke: "#DDD0DA",
  },
  outlined: {
    fill: "#DDD0DA",
    stroke: "#480F39",
  },
};

export function Lightning({
  variant = "solid",
  className,
}: LightningProps) {
  const { fill, stroke } = variants[variant];

  return (
    <svg
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M7.87302 0.761963V6.98419H13.2064L6.09524 16.762V10.5397H0.761909L7.87302 0.761963Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.52381"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}