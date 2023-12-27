import bridge from "@vkontakte/vk-bridge";

export const initVK = async (): Promise<void> => {
  await bridge.send("VKWebAppInit");
};
