import { type ReactNode, type FC } from "react";
import {
  ChakraProvider,
  extendTheme,
  type ThemeConfig,
} from "@chakra-ui/react";

const ChakraUiProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const theme: ThemeConfig = extendTheme({
    config: { initialColorMode: "dark", useSystemColorMode: true },
    breakpoints: {
      m300: "300px",
      m500: "500px",
      m768: "768px",
    },
  });
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ChakraUiProvider;
