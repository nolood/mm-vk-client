import { Flex } from "@chakra-ui/react";
import { BackButton } from "~/shared/ui";
// import { NotificationBadge } from "~/features";
import { type FC } from "react";

const StatisticsHeader: FC = () => {
  return (
    <Flex justifyContent={"space-between"}>
      <BackButton />
      {/* <NotificationBadge /> */}
    </Flex>
  );
};

export default StatisticsHeader;
