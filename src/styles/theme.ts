const theme = {
  border: {},
  font: {
    regular: 'Inter_400Regular',
    medium: 'Inter_500Medium',
    bold: 'Inter_700Bold',
    bowlbyone: 'BowlbyOne_400Regular',
    sizes: {}
  },
  colors: {
    // Primary colors
    primary: '#570df8',
    primaryFocus: '#4506cb',
    primaryContent: '#ffffff',
  
    // Secondary colors
    secondary: '#f000b8',
    secondaryFocus: '#bd0091',
    secondaryContent: '#ffffff',
  
    // Accent colors
    accent: '#37cdbe',
    accentFocus: '#2aa79b',
    accentContent: '#ffffff',
  
    // Neutral colors
    neutral: '#3d4451',
    neutralFocus: '#2a2e37',
    neutralContent: '#ffffff',
  
    // Base colors (background, content)
    base100: '#3d4451', // Lighter background
    base200: '#2a2e37', // Darker background
    baseContent: '#ffffff', // Text color
  
    // Info colors
    info: '#2094f3',
    infoContent: '#ffffff',
  
    // Success colors
    success: '#009485',
    successContent: '#ffffff',
  
    // Warning colors
    warning: '#ff9900',
    warningContent: '#ffffff',
  
    // Error colors
    error: '#ff5724',
    errorContent: '#ffffff',
  },    
  gradients: {},
  spacings: {},
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {},
  shadows: {}
} as const

export type Colors = keyof typeof theme.colors

export default theme
