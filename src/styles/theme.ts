import { extendTheme, type ThemeConfig, type Theme } from "@chakra-ui/react";

// Configurações iniciais do tema
const config: ThemeConfig = {
  initialColorMode: "light",
  // useSystemColorMode: false,
}

// Cores personalizadas e da marca
const colors = {
  brand: {
    yellow: "#FCE321",
    green: "#00A550",
    red: "#f2545b",
    black: "#000000"
  },
}

// Definição de fontes utilizadas pelo sistema
const fonts = {
  body: 'Raleway, Lato, Roboto, system-ui, sans-serif',
  heading: 'Montserrat, Rubik, Roboto, system-ui, sans-serif',
}

export const theme: Partial<Theme> = extendTheme({
  config,
  colors,
  fonts,
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
      },
      body: {
        scrollBehavior: 'smooth',
        width: 'calc(100vw - (100vw - 100%))',
      },
    },
  },
})