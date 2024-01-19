import { api } from "~/shared/api/api";

export type BillWithStat = IBill & {
  total_income: number;
  total_expense: number;
};

export interface IBill {
  id: number;
  title: string;
  balance: number;
  created_at: Date;
  updated_at: Date;
}

export interface CreateBillParams {
  title: string;
  balance: number;
}

const billsService = {
  fetchBill: async (id: number): Promise<BillWithStat> => {
    const res = await api.get<BillWithStat>(`/bills/${id}`);
    return res.data;
  },
  fetchBills: async (): Promise<IBill[]> => {
    const res = await api.get<IBill[]>("/bills");
    return res.data;
  },
  createBill: async (data: CreateBillParams): Promise<IBill> => {
    const res = await api.post<IBill>("/bills", data);
    return res.data;
  },
};

export default billsService;
