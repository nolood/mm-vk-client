import { type ReactNode, type FC } from "react";
import {
  ChakraProvider,
  extendTheme,
  type ThemeConfig,
} from "@chakra-ui/react";

export const ChakraUiProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const theme: ThemeConfig = extendTheme({
    config: { initialColorMode: "dark", useSystemColorMode: true },
  });
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
