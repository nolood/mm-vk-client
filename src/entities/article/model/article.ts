import { makeAutoObservable } from "mobx";
import { type StatusType } from "~/shared/model/status-type";
import { type FormValues } from "~/shared/lib/form-validate";
import { type IArticle } from "~/shared/api/services/articles";
import { articlesService } from "~/shared/api";

class ArticlesModule {
  constructor() {
    makeAutoObservable(this);
  }

  articles: IArticle[] = [];

  status: StatusType = "idle";

  get totalUserArticles(): number {
    return this.articles.filter((item) => !item.default).length;
  }

  setStatus = (status: StatusType): void => {
    this.status = status;
  };

  setArticles = (articles: IArticle[]): void => {
    this.articles = articles;
  };

  createArticle = async (params: FormValues): Promise<boolean> => {
    try {
      const data = await articlesService.createArticle(params);
      this.setArticles([...this.articles, data]);
      this.setStatus("success");
      return true;
    } catch (e) {
      this.setStatus("error");
      return false;
    }
  };

  fetchArticles = async (): Promise<void> => {
    try {
      this.setStatus("loading");
      const data = await articlesService.fetchArticles();
      this.setArticles(data);
      this.setStatus("success");
    } catch (e) {
      this.setStatus("error");
    }
  };
}

export default new ArticlesModule();
