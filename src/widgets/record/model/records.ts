import { makeAutoObservable } from "mobx";
import { type StatusType } from "~/shared/model/status-type";
import {
  type ArticleType,
  type IArticle,
} from "~/entities/article/model/article";
import { api } from "~/shared/api/api";
import { BillModule, BillsModule } from "~/widgets/bills/model";

export interface IRecord {
  id: number;
  amount: number;
  date: string;
  description: string;
  article: IArticle;
  type: {
    id: number;
    value: ArticleType;
  };
}

class RecordsModule {
  constructor() {
    makeAutoObservable(this);
  }

  records: IRecord[] = [];

  status: StatusType = "idle";

  setStatus = (status: StatusType): void => {
    this.status = status;
  };

  createRecord = async (data: {
    type_id: number;
    amount: number;
    description: string;
    bill_id: number;
    article_id: number;
    date: string;
  }): Promise<boolean> => {
    try {
      const res = await api.post<IRecord>("/records", data);
      this.records = [...this.records, res.data];
      const bill = BillModule;
      const bills = BillsModule;
      const newBalance =
        bill.bill.balance + data.amount * (data.type_id === 1 ? 1 : -1);
      bill.changeBalance(data.amount * (data.type_id === 1 ? 1 : -1));
      bills.changeBillBalance(data.bill_id, newBalance);
      this.setStatus("success");
      return true;
    } catch (e) {
      this.setStatus("error");
      return false;
    }
  };
}

export default new RecordsModule();
