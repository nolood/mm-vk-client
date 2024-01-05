import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { type FC } from "react";
import UserModule from "~/entities/user/model/user";
import { observer } from "mobx-react-lite";
import { IoNotifications } from "react-icons/io5";

const Main: FC = observer(() => {
  const { info } = UserModule;
  return (
    <Box>
      <Flex alignItems={"center"}>
        <Flex flexDirection={"column"}>
          <Text color={"gray.500"}>Добро пожаловать,</Text>
          <Text fontWeight={"bold"} fontSize={"xl"}>
            {info?.first_name}
          </Text>
        </Flex>
        <Icon as={IoNotifications} w={7} h={7} color={"gray.500"} ml={"auto"} />
      </Flex>
    </Box>
  );
});

export default Main;
