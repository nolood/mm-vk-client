import { Suspense, type FC } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "~/shared/router/router";
import { ChakraUiProvider } from "./providers";
import { Loader } from "~/shared/ui";
import { observer } from "mobx-react-lite";
import { Flex } from "@chakra-ui/react";
import "./styles/globals.css";

const App: FC = observer(() => {
  return (
    <ChakraUiProvider>
      <Suspense
        fallback={
          <Flex h={"100vh"} justifyContent={"center"} alignItems={"center"}>
            <Loader />
          </Flex>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </ChakraUiProvider>
  );
});

export default App;
