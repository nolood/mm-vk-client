import type { ArticleType, IArticle } from "~/shared/api/services/articles";
import { api } from "~/shared/api/api";

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

export interface CreateRecordParams {
  type_id: number;
  amount: number;
  description: string;
  bill_id: number;
  article_id: number;
  date: string;
}

const recordsService = {
  fetchRecords: async (
    page: number = 1,
    limit: number = 10,
    billId: number,
  ): Promise<IRecord[]> => {
    const res = await api.get<IRecord[]>(
      `/records/${billId}?page=${page}&limit=${limit}`,
    );
    return res.data;
  },
  createRecord: async (data: CreateRecordParams) => {
    const res = await api.post<IRecord>("/records", data);
    return res.data;
  },
};

export default recordsService;
