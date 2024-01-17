import { type FC, useState } from "react";
import { PageAnim } from "~/shared/ui";
import { Flex } from "@chakra-ui/react";
import { BillSelect, CardSelect, StatisticsHeader } from "~/widgets";
import { periodsData, typesData } from "~/widgets/statistics/ui/select-data";

const Statistics: FC = () => {
  const [currentBillId, setCurrentBillId] = useState<number | null | undefined>(
    null,
  );
  const [activePeriod, setActivePeriod] = useState<number>(0);
  const [activeType, setActiveType] = useState<number>(0);
  return (
    <PageAnim>
      <Flex flexDirection={"column"} gap={4}>
        <StatisticsHeader />
        <BillSelect onChange={setCurrentBillId} value={currentBillId} />
        <CardSelect
          options={typesData}
          value={activePeriod}
          onChange={setActivePeriod}
        />
        <CardSelect
          options={periodsData}
          value={activeType}
          onChange={setActiveType}
        />
      </Flex>
    </PageAnim>
  );
};

export default Statistics;
