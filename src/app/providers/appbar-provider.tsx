import { Box, Flex } from "@chakra-ui/react";
import { type ReactNode, type FC } from "react";
import { AppBar } from "~/widgets";

const AppBarProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Flex flexDirection={"column"} h={"100vh"} w={"100%"} overflow={"hidden"}>
      <Box p={4} flexGrow={1} flexShrink={1}>
        {children}
      </Box>
      <AppBar />
    </Flex>
  );
};

export default AppBarProvider;
