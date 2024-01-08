import { makeAutoObservable } from "mobx";
import { type StatusType } from "~/shared/model/status-type";
import { api } from "~/shared/api/api";
import { type FormValues } from "~/shared/lib/form-validate";

export type ArticleType = "income" | "expense";

export interface IArticle {
  color: string;
  title: string;
  id: number;
  icon: string;
}

export interface ICreateArticle {
  color: null | string;
  title: string;
  icon: null | string;
}

class ArticlesModule {
  constructor() {
    makeAutoObservable(this);
  }

  articles: IArticle[] = [];

  status: StatusType = "idle";

  setStatus = (status: StatusType): void => {
    this.status = status;
  };

  setArticles = (articles: IArticle[]): void => {
    this.articles = articles;
  };

  createArticle = async (data: FormValues): Promise<boolean> => {
    try {
      this.setStatus("loading");
      const res = await api.post<IArticle>("/articles", data);
      this.setArticles([...this.articles, res.data]);
      this.setStatus("success");
      return true;
    } catch (e) {
      this.setStatus("error");
      return false;
    }
  };
}

export default new ArticlesModule();
