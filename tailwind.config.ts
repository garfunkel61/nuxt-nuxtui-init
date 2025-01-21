import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    extend: {
      // Primary: Amber
      //   colors: {
      //     secondary: {
      //       50: "#ECFDF5",
      //       100: "#D1FAE5",
      //       200: "#A7F3D0",
      //       300: "#6EE7B7",
      //       400: "#34D399",
      //       500: "#10B981",
      //       600: "#059669",
      //       700: "#047857",
      //     },
      //     danger: {
      //       50: "#FEF2F2",
      //       100: "#FEE2E2",
      //       200: "#FECACA",
      //       300: "#FCA5A5",
      //       400: "#F87171",
      //       500: "#EF4444",
      //       600: "#DC2626",
      //       700: "#B91C1C",
      //     },
      //     warning: {
      //       50: "#FFFBEB",
      //       100: "#FEF3C7",
      //       200: "#FDE68A",
      //       300: "#FCD34D",
      //       400: "#FBBF24",
      //       500: "#FBBF24",
      //       600: "#D97706",
      //       700: "#B45309",
      //     },
      //     info: {
      //       50: "#EFF6FF",
      //       100: "#DBEAFE",
      //       200: "#BFDBFE",
      //       300: "#93C5FD",
      //       400: "#60A5FA",
      //       500: "#3B82F6",
      //       600: "#2563EB",
      //       700: "#1D4ED8",
      //     },
      //   },
      // Primary: Emerald
      // colors: {
      //   // Secondary: Complementary (Coral)
      //   secondary: {
      //     50: "#F9F5FB",
      //     100: "#F3E8F5",
      //     200: "#E9D5E7",
      //     300: "#D6B3D1",
      //     400: "#C294BA",
      //     500: "#A970A3",
      //     600: "#895488",
      //     700: "#6A3C6C",
      //   },
      //   // Danger: Red Tones
      //   danger: {
      //     50: "#FEF2F2",
      //     100: "#FEE2E2",
      //     200: "#FECACA",
      //     300: "#FCA5A5",
      //     400: "#F87171",
      //     500: "#EF4444",
      //     600: "#DC2626",
      //     700: "#B91C1C",
      //   },
      //   // Warning: Amber Tones
      //   warning: {
      //     50: "#FFFBEB",
      //     100: "#FEF3C7",
      //     200: "#FDE68A",
      //     300: "#FCD34D",
      //     400: "#FBBF24",
      //     500: "#F59E0B",
      //     600: "#D97706",
      //     700: "#B45309",
      //   },
      //   // Info: Blue Tones
      //   info: {
      //     50: "#EFF6FF",
      //     100: "#DBEAFE",
      //     200: "#BFDBFE",
      //     300: "#93C5FD",
      //     400: "#60A5FA",
      //     500: "#3B82F6",
      //     600: "#2563EB",
      //     700: "#1D4ED8",
      //   },
      // },
      // Primary: Orange
      colors: {
        // Secondary: Subtle Blue (Complementary Accent)
        secondary: {
          50: "#F5F0FF",
          100: "#E2D9FF",
          200: "#C7B3FF",
          300: "#A680FF",
          400: "#8A5CFF",
          500: "#6E39FF",
          600: "#5A2BDB",
          700: "#471DC2",
        },
        // Danger: Red Tones
        danger: {
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
        },
        // Warning: Amber Tones
        warning: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
        },
        // Info: Blue Tones
        info: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
        },
      },
    },
  },
};
