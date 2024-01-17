import { type FC, useState } from "react";
import { PageAnim } from "~/shared/ui";
import { Flex } from "@chakra-ui/react";
import { BillSelect, CardSelect, StatisticsHeader } from "~/widgets";
import { periodsData, typesData } from "~/widgets/statistics/lib/select-data";
import StatisticsCharts from "~/widgets/statistics/ui/statistics-charts";

const Statistics: FC = () => {
  const [currentBillId, setCurrentBillId] = useState<number | null | undefined>(
    null,
  );
  const [activePeriod, setActivePeriod] = useState<string>("year");
  const [activeType, setActiveType] = useState<number>(0);
  return (
    <PageAnim>
      <Flex flexDirection={"column"} gap={4}>
        <StatisticsHeader />
        <BillSelect onChange={setCurrentBillId} value={currentBillId} />
        <CardSelect
          options={periodsData}
          value={activePeriod}
          onChange={setActivePeriod}
        />
        <CardSelect
          options={typesData}
          value={activeType}
          onChange={setActiveType}
        />
        <StatisticsCharts
          activeType={activeType}
          activePeriod={activePeriod}
          activeBillId={currentBillId}
        />
      </Flex>
    </PageAnim>
  );
};

export default Statistics;
