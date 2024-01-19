import { api } from "~/shared/api/api";

export interface ChartData {
  labels: string[];
  datasets: Array<{
    label: string;
    data: number[];
    backgroundColor: string;
  }>;
}

const statisticsService = {
  fetchChartStatistics: async (
    billId: number,
    period: string,
    type: number,
  ) => {
    const res = await api.get<ChartData>(
      `/statistics?bill_id=${billId}&period=${period}&type=${type}`,
    );
    return res.data;
  },
};

export default statisticsService;
