export const brand = {
  name: "Charitey",
  tagline: "It's We Donated.",
  description:
    "Charitey is the mobile app that makes charitable giving simple, transparent, and rewarding. Discover trusted causes, track your impact, and give with confidence.",
  colors: {
    primary: "#7C3E46",
    primaryDark: "#5E2F35",
    primaryLight: "#A85A64",
    primaryMuted: "#F5ECEE",
    secondary: "#FFFFFF",
    background: "#FFFFFF",
    foreground: "#1A1214",
    muted: "#6B5B5E",
    border: "#E8DEDF",
  },
  fonts: {
    sans: "Poppins",
  },
  radius: {
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    full: "9999px",
  },
} as const;

export type Brand = typeof brand;
