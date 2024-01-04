import bridge from "@vkontakte/vk-bridge";

export const initVK = async (): Promise<void> => {
  await bridge.send("VKWebAppInit");
  // const user: UserInfo = await bridge.send("VKWebAppGetUserInfo");
  // const res = await api.post<string>("/auth/checkvk", {
  //   vk_id: user.id,
  //   username: `${user.first_name} ${user.last_name}`,
  //   password: user.id.toString(),
  // });
  // setTokenToHeaders(res.data);
};
