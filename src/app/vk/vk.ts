import bridge from "@vkontakte/vk-bridge";
import { api, setTokenToHeaders } from "~/shared/api/api";
import UserModule from "~/entities/user/model/user";

export const initVK = async (): Promise<void> => {
  const { fetchUserInfo } = UserModule;

  await bridge.send("VKWebAppInit");
  const user = await fetchUserInfo();
  const res = await api.post<string>("/auth/vkminiapp", {
    vk_id: user.id,
    username: `${user.first_name} ${user.last_name}`,
    password: user.id.toString(),
  });
  setTokenToHeaders(res.data);
};
