import { type FC, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { router } from "~/shared/router/router";
import { MAIN_ROUTE } from "~/shared/router/paths";
import { UserModule } from "~/entities";

const Greeter: FC = observer(() => {
  const { isAuth } = UserModule;

  useEffect(() => {
    if (isAuth) {
      router.navigate(MAIN_ROUTE);
    }
  }, [isAuth]);

  return (
    <Flex h={"100vh"} justifyContent={"center"} alignItems={"center"}>
      Добро пожаловать!
    </Flex>
  );
});

export default Greeter;
