import { action, makeAutoObservable } from "mobx";
import { type StatusType } from "~/shared/model/status-type";
import { api } from "~/shared/api/api";
import { colorsEncrypting } from "~/shared/lib/available-colors";

interface ChartData {
  labels: string[];
  datasets: Array<{
    label: string;
    data: number[];
    backgroundColor: string;
  }>;
}

class ChartDataModule {
  constructor() {
    makeAutoObservable(this);
  }

  data: ChartData | null = null;

  options = {
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

  status: StatusType = "idle";

  setStatus = (status: StatusType): void => {
    this.status = status;
  };

  @action
  changeStackedOption = (value: boolean): void => {
    this.options = {
      ...this.options,
      scales: { x: { stacked: value }, y: { stacked: value } },
    };
  };

  @action
  setData = (data: ChartData): void => {
    this.data = data;
  };

  @action
  fetchData = async (
    billId: number,
    period: string,
    type: number,
  ): Promise<void> => {
    try {
      this.setStatus("loading");
      const res = await api.get<ChartData>(
        `/statistics?bill_id=${billId}&period=${period}&type=${type}`,
      );

      this.setData({
        ...res.data,
        datasets: !res.data.datasets
          ? []
          : res.data.datasets
              .filter((dataset) => !dataset.data.every((value) => value === 0))
              .map((dataset) => {
                return {
                  ...dataset,
                  data: dataset.data.map((item) => item),
                  backgroundColor: colorsEncrypting[dataset.backgroundColor],
                };
              }),
      });

      if (type === 0) {
        this.changeStackedOption(false);
      } else {
        this.changeStackedOption(true);
      }

      this.setStatus("success");
    } catch (e) {
      this.setStatus("error");
    }
  };
}

export default new ChartDataModule();
