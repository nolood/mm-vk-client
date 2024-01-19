import { makeAutoObservable } from "mobx";
import { type StatusType } from "~/shared/model/status-type";
import { type BillWithStat } from "~/shared/api/services/bills";
import { billsService } from "~/shared/api";

class BillModule {
  constructor() {
    makeAutoObservable(this);
  }

  bill: BillWithStat | null = null;

  status: StatusType = "idle";

  reset = (): void => {
    this.setBill(null);
    this.status = "idle";
  };

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
      const data = await billsService.fetchBill(id);
      this.setBill(data);
      this.setStatus("success");
    } catch (e) {
      this.setStatus("error");
    }
  };
}

export default new BillModule();
