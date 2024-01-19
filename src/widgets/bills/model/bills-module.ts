import { makeAutoObservable } from "mobx";
import { type StatusType } from "~/shared/model/status-type";
import { type IBill } from "~/shared/api/services/bills";
import { billsService } from "~/shared/api";

class BillsModule {
  constructor() {
    makeAutoObservable(this);
  }

  bills: IBill[] = [];

  status: StatusType = "idle";

  setStatus = (status: StatusType): void => {
    this.status = status;
  };

  setBills = (bills: IBill[]): void => {
    this.bills = bills;
  };

  changeBillBalance = (id: number, balance: number): void => {
    this.bills = this.bills.map((bill) => {
      if (bill.id === id) {
        return { ...bill, balance };
      }
      return bill;
    });
  };

  fetchBills = async (): Promise<void> => {
    try {
      this.setStatus("loading");
      const data = await billsService.fetchBills();
      this.setBills(data);
      this.setStatus("success");
    } catch (e) {
      this.setStatus("error");
    }
  };

  createBill = async (title: string, balance: number): Promise<boolean> => {
    try {
      const data = await billsService.createBill({ title, balance });
      this.setBills([...this.bills, data]);
      return true;
    } catch (e) {
      this.setStatus("error");
      return false;
    }
  };
}

export default new BillsModule();
