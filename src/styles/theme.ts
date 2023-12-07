const theme = {
  border: {
    none: "none",
  },
  font: {
    regular: "Inter_400Regular",
    medium: "Inter_500Medium",
    bold: "Inter_700Bold",
    normalText: {
      fontFamily: "Calibri",
    },
    boldText: {
      fontFamily: "Calibri-Bold",
    },
    italicText: {
      fontFamily: "Calibri-Italic",
    },
    logoText: {
      fontFamily: "Comfortaa",
    },
    sizes: {},
  },
  spacing: {
    xxl: 20,
  },
  borderRadius: {
    none: 0,
    md: 8,
  },
  colors: {
    // Primary colors
    primary: "#570df8",
    primaryFocus: "#4506cb",
    primaryContent: "#000",

    // Secondary colors
    secondary: "#f000b8",
    secondaryFocus: "#bd0091",
    secondaryContent: "#ffffff",

    // Accent colors
    accent: "#111927",
    accentFocus: "#111927",
    accentContent: "#ffffff",

    // Neutral colors

    /** Gray Neutral/500  */
    neutral: "#6C737F",

    /** Gray Neutral/700  */
    neutralFocus: "#384250",

    /**  Gray Neutral/300  */
    neutralContent: "#D2D6DB",

    // Custom colors

    /**  Gray Neutral/800  */
    customDark: "#1F2A37",

    /**  Gray Neutral/100  */
    customLight: "#F3F4F6",

    // Base colors (background, content)
    base100: "#ffffff", // Lighter background
    base200: "#000000", // Darker background
    baseContent: "#ffffff", // Text color

    // Info colors
    info: "#2094f3",
    infoContent: "#ffffff",

    // Success colors
    success: "#009485",
    successContent: "#ffffff",

    // Warning colors
    warning: "#ff9900",
    warningContent: "#ffffff",

    // Error colors
    error: "#ff5724",
    errorContent: "#ffffff",

    transparent: "transparent",
  },
  gradients: {},
  spacings: {
    none: 0,
    xs: 4,
  },
  gap: {
    10: 10,
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  transition: {},
  shadows: {},
} as const;

export type Colors = keyof typeof theme.colors;

export default theme;
