import { type FC } from "react";
import { Flex, Skeleton, Text } from "@chakra-ui/react";
import { BackButton } from "~/shared/ui";
import { NotificationBadge } from "~/features";
import { BillModule } from "~/widgets/bills/model";
import { observer } from "mobx-react-lite";

const BillHeader: FC = observer(() => {
  const { bill, status } = BillModule;

  const isLoading = status === "loading" || !bill;

  return (
    <Flex justifyContent={"space-between"} alignItems={"flex-start"}>
      <BackButton />
      {isLoading ? (
        <Skeleton height={"40px"} width={"250px"} borderRadius={"md"} />
      ) : (
        <Text fontWeight={"bold"} fontSize={"2xl"}>
          {bill.title}
        </Text>
      )}
      <NotificationBadge />
    </Flex>
  );
});

export default BillHeader;
