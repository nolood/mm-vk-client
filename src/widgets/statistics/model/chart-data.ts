import { makeAutoObservable } from "mobx";
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

  status: StatusType = "idle";

  setStatus = (status: StatusType): void => {
    this.status = status;
  };

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
      this.data = {
        ...res.data,
        datasets: res.data.datasets.map((dataset) => {
          return {
            ...dataset,
            backgroundColor: colorsEncrypting[dataset.backgroundColor],
          };
        }),
      };
      this.setStatus("success");
    } catch (e) {
      this.setStatus("error");
    }
  };
}

export default new ChartDataModule();
