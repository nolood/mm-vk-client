import { type FC, useEffect } from "react";
import { PageAnim } from "~/shared/ui";
import { Flex } from "@chakra-ui/react";
import { BillBalance, BillHeader, BillStat } from "~/widgets";
import { observer } from "mobx-react-lite";
import { BillModule } from "~/widgets/bills/model";
import { useParams } from "react-router-dom";

const Bill: FC = observer(() => {
  const params = useParams();
  const { fetchBill } = BillModule;

  useEffect(() => {
    if (typeof params.id === "string") {
      fetchBill(+params.id);
    }
  }, []);

  return (
    <PageAnim>
      <Flex flexDirection={"column"} gap={4}>
        <BillHeader />
        <BillBalance />
        <BillStat />
      </Flex>
    </PageAnim>
  );
});

export default Bill;
