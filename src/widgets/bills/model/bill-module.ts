import { makeAutoObservable } from "mobx";
import { type IBill } from "~/widgets/bills/model/bills-module";
import { type StatusType } from "~/shared/model/status-type";
import { api } from "~/shared/api/api";

class BillModule {
  constructor() {
    makeAutoObservable(this);
  }

  bill: IBill | null = null;

  status: StatusType = "idle";

  setBill = (bill: IBill | null): void => {
    this.bill = bill;
  };

  setStatus = (status: StatusType): void => {
    this.status = status;
  };

  fetchBill = async (id: number): Promise<void> => {
    try {
      this.setStatus("loading");
      const res = await api.get<IBill>(`/bills/${id}`);
      this.setBill(res.data);
      this.setStatus("success");
    } catch (e) {
      this.setStatus("error");
    }
  };
}

export default new BillModule();
