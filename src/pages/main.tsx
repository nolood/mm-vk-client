import { Box } from "@chakra-ui/react";
import { type FC } from "react";
import { BillsList, MainHeader } from "~/widgets";
import { AppBarProvider } from "~/app/providers";

const Main: FC = () => {
  return (
    <AppBarProvider>
      <Box>
        <MainHeader />
        <BillsList />
      </Box>
    </AppBarProvider>
  );
};

export default Main;
