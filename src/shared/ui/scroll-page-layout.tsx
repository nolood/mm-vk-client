import { type FC, type ReactNode } from "react";
import { Box } from "@chakra-ui/react";

const ScrollPageLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box h={"100vh"} overflowY={"auto"} pb={100}>
      {children}
    </Box>
  );
};

export default ScrollPageLayout;
