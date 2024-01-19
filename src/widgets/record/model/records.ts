import { action, makeAutoObservable } from "mobx";
import { type StatusType } from "~/shared/model/status-type";
import { BillModule, BillsModule } from "~/widgets/bills/model";
import {
  type CreateRecordParams,
  type IRecord,
} from "~/shared/api/services/records";
import { recordsService } from "~/shared/api";

class RecordsModule {
  constructor() {
    makeAutoObservable(this);
  }

  records: IRecord[] = [];

  status: StatusType = "idle";

  setStatus = (status: StatusType): void => {
    this.status = status;
  };

  addRecords = (records: IRecord[]): void => {
    this.records = this.records.concat(records);
  };

  fetchRecords = async (
    page: number,
    limit: number,
    billId: number,
  ): Promise<IRecord[]> => {
    try {
      const data = await recordsService.fetchRecords(page, limit, billId);
      this.addRecords(data);
      this.setStatus("success");
      return data;
    } catch (e) {
      this.setStatus("error");
    }
  };

  reset = (): void => {
    this.records = [];
    this.status = "idle";
  };

  @action
  createRecord = async (params: CreateRecordParams): Promise<boolean> => {
    try {
      const bill = BillModule;
      const bills = BillsModule;
      const data = await recordsService.createRecord(params);
      this.records = [data, ...this.records];
      const newBalance =
        bill.bill.balance + params.amount * (params.type_id === 1 ? 1 : -1);
      bill.changeBalance(params.amount * (params.type_id === 1 ? 1 : -1));
      bills.changeBillBalance(params.bill_id, newBalance);
      this.setStatus("success");
      return true;
    } catch (e) {
      this.setStatus("error");
      return false;
    }
  };
}

export default new RecordsModule();
