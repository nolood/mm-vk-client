import { makeAutoObservable } from "mobx";
import { type IBill } from "~/widgets/bills/model/bills-module";
import { type StatusType } from "~/shared/model/status-type";
import { api } from "~/shared/api/api";

type BillWithStat = IBill & {
  total_income: number;
  total_expense: number;
};

class BillModule {
  constructor() {
    makeAutoObservable(this);
  }

  bill: BillWithStat | null = null;

  status: StatusType = "idle";

  changeBalance = (amount: number): void => {
    if (this.bill) {
      this.bill = {
        ...this.bill,
        balance: this.bill.balance + amount,
        total_expense:
          amount < 0
            ? this.bill.total_expense + amount * -1
            : this.bill.total_expense,
        total_income:
          amount > 0 ? this.bill.total_income + amount : this.bill.total_income,
      };
    }
  };

  setBill = (bill: BillWithStat | null): void => {
    this.bill = bill;
  };

  setStatus = (status: StatusType): void => {
    this.status = status;
  };

  fetchBill = async (id: number): Promise<void> => {
    try {
      this.setStatus("loading");
      const res = await api.get<BillWithStat>(`/bills/${id}`);
      this.setBill(res.data);
      this.setStatus("success");
    } catch (e) {
      this.setStatus("error");
    }
  };
}

export default new BillModule();
