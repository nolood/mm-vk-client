import { type FC } from "react";
import { Card, CardHeader, Heading, Skeleton } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { BillModule } from "~/widgets/bills/model";
import { CurrencyFormatter } from "~/shared/ui";

const BillBalance: FC = observer(() => {
  const { bill, status } = BillModule;

  const isLoading = status === "loading" || !bill;

  if (isLoading) return <Skeleton width={"100%"} height={"72px"} />;

  return (
    <Card>
      <CardHeader>
        <Heading size={"md"} textAlign={"center"}>
          <CurrencyFormatter balance={bill.balance} />
        </Heading>
      </CardHeader>
    </Card>
  );
});

export default BillBalance;
