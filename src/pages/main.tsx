import { Box } from "@chakra-ui/react";
import { type FC } from "react";
import { BillsList, MainHeader } from "~/widgets";

const Main: FC = () => {
  return (
    <Box>
      <MainHeader />
      <BillsList />
    </Box>
  );
};

export default Main;
