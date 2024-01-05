import bridge, { type UserInfo } from "@vkontakte/vk-bridge";
import { api, setTokenToHeaders } from "~/shared/api/api";

export const initVK = async (): Promise<void> => {
  await bridge.send("VKWebAppInit");
  const user: UserInfo = await bridge.send("VKWebAppGetUserInfo");
  const res = await api.post<string>("/auth/vkminiapp", {
    vk_id: user.id,
    username: `${user.first_name} ${user.last_name}`,
    password: user.id.toString(),
  });
  setTokenToHeaders(res.data);
};
