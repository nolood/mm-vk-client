import { type FC, useEffect } from "react";
import { Box, Skeleton } from "@chakra-ui/react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const StatisticsCharts: FC<{
  activeType: number;
  activePeriod: string;
  activeBillId: number;
}> = observer(({ activeType, activePeriod, activeBillId }) => {
  const { data, fetchData, status } = ChartDataModule;

  const isLoading = status === "loading" || !data;

  const handleFetchData = (): void => {
    fetchData(activeBillId, activePeriod, activeType);
  };

  useEffect(() => {
    handleFetchData();
  }, [activePeriod, activeType, activeBillId]);

  return (
    <Box h={440}>
      {!isLoading ? (
        <Bar data={data} options={options} />
      ) : (
        <Skeleton h={"100%"} w={"100%"} />
      )}
    </Box>
  );
});

export default StatisticsCharts;
