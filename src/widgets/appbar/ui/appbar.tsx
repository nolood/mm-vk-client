import { Icon, Tab, TabList, Tabs, Text } from "@chakra-ui/react";
import { type FC, useEffect, useState } from "react";
import { tabsData } from "../lib/tabs-data";
import { router } from "~/shared/router/router";
import { useLocation } from "react-router-dom";

const AppBar: FC = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const location = useLocation();

  const handleTabsChange = (index: number): void => {
    setTabIndex(index);
  };

  useEffect(() => {
    const index = tabsData.findIndex((item) => item.path === location.pathname);
    if (index !== -1) {
      setTabIndex(index);
    }
  }, [location]);

  return (
    <Tabs
      isFitted
      bg={"gray.700"}
      position={"fixed"}
      bottom={0}
      w={"100%"}
      index={tabIndex}
      onChange={handleTabsChange}
    >
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
