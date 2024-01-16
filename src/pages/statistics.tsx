import { type FC, useState } from "react";
import { PageAnim } from "~/shared/ui";
import { Flex } from "@chakra-ui/react";
import { BillSelect, StatisticsHeader } from "~/widgets";

const Statistics: FC = () => {
  const [currentBillId, setCurrentBillId] = useState<number | null | undefined>(
    null,
  );
  console.log(currentBillId);
  return (
    <PageAnim>
      <Flex flexDirection={"column"} gap={4}>
        <StatisticsHeader />
        <BillSelect onChange={setCurrentBillId} value={currentBillId} />
      </Flex>
    </PageAnim>
  );
};

export default Statistics;
