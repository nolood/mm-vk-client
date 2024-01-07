import { Icon, Tab, TabList, Tabs, Text } from "@chakra-ui/react";
import { type FC } from "react";
import { tabsData } from "../lib/tabs-data";
import { router } from "~/shared/router/router";

const AppBar: FC = () => {
  return (
    <Tabs isFitted bg={"gray.700"} position={"fixed"} bottom={0} w={"100%"}>
      <TabList>
        {tabsData.map((item) => (
          <Tab
            flex={1}
            gap={1}
            flexDirection={"column"}
            key={item.id}
            onClick={async () => {
              await router.navigate(item.path);
            }}
          >
            <Icon as={item.icon} w={5} h={5} />
            <Text fontSize={"xs"}>{item.title}</Text>
          </Tab>
        ))}
      </TabList>
    </Tabs>
  );
};

export default AppBar;
