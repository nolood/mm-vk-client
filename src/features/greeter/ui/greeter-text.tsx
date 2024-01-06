import React, { type FC } from "react";
import UserModule from "~/entities/user/model/user";
import { Skeleton, Text } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";

const GreeterText: FC = observer(() => {
  const { info, status } = UserModule;
  const isLoading = status === "loading" || !info?.first_name;
  return (
    <>
      <Text color={"gray.500"}>Добро пожаловать,</Text>
      {isLoading ? (
        <Skeleton w={150} height={"35px"} />
      ) : (
        <Text fontWeight={"bold"} fontSize={"xl"}>
          {info.first_name}
        </Text>
      )}
    </>
  );
});

export default GreeterText;
