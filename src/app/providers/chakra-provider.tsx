import { type ReactNode, type FC } from "react";

export const ChakraProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};
