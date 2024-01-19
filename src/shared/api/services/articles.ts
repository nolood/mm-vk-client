import { api } from "~/shared/api/api";
import { type FormValues } from "~/shared/lib/form-validate";

export type ArticleType = "income" | "expense";

export interface IArticle {
  color: string;
  title: string;
  id: number;
  icon: string;
  default: boolean;
  user_id?: number | null;
}

const articlesService = {
  fetchArticles: async (): Promise<IArticle[]> => {
    const res = await api.get<IArticle[]>("/articles");
    return res.data;
  },
  createArticle: async (data: FormValues): Promise<IArticle> => {
    const res = await api.post<IArticle>("/articles", data);
    return res.data;
  },
};

export default articlesService;
