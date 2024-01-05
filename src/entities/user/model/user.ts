import bridge, { type UserInfo } from "@vkontakte/vk-bridge";
import { makeAutoObservable } from "mobx";
import { type StatusType } from "~/shared/model/status-type";

class UserModule {
  constructor() {
    makeAutoObservable(this);
  }

  info: UserInfo | null = null;

  status: StatusType = "idle";

  setStatus = (status: StatusType): void => {
    this.status = status;
  };

  setInfo = (info: UserInfo | null): void => {
    this.info = info;
  };

  fetchUserInfo = async (): Promise<UserInfo> => {
    try {
      this.setStatus("loading");
      const user = await bridge.send("VKWebAppGetUserInfo");
      this.setInfo(user);
      this.setStatus("success");
      return user;
    } catch (e) {
      this.setStatus("error");
    } finally {
      this.setStatus("idle");
    }
  };
}

export default new UserModule();
