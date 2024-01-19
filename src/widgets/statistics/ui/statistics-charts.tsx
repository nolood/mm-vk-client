import { type FC, useEffect } from "react";
import { Flex, Skeleton, Text } from "@chakra-ui/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { observer } from "mobx-react-lite";
import { ChartDataModule } from "~/widgets";
import { AnimatePresence, motion } from "framer-motion";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const StatisticsCharts: FC<{
  activeType: number;
  activePeriod: string;
  activeBillId: number;
}> = observer(({ activeType, activePeriod, activeBillId }) => {
  const { data, fetchData, status, options } = ChartDataModule;

  const isLoading = status === "loading";

  const handleFetchData = (): void => {
    fetchData(activeBillId, activePeriod, activeType);
  };

  useEffect(() => {
    handleFetchData();
  }, [activePeriod, activeType, activeBillId]);

  if (!activeBillId)
    return (
      <Flex justifyContent={"center"} alignItems={"center"}>
        <Text mt={50}>Выберите счет чтобы увидеть график</Text>
      </Flex>
    );

  if (isLoading || !data)
    return (
      <Flex justifyContent={"center"} alignItems={"center"} w={"100%"}>
        <Skeleton h={"340px"} w={"80%"} borderRadius={10} />
      </Flex>
    );

  return (
    <AnimatePresence>
      <motion.div
        style={{
          width: "100%",
          height: "max-content",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Bar data={data} options={options} />
      </motion.div>
    </AnimatePresence>
  );
});

export default StatisticsCharts;
