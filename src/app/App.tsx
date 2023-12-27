import { Suspense, type FC } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "~/shared/router/router";
import { ChakraProvider } from "./providers";

const App: FC = () => (
  <ChakraProvider>
    <Suspense fallback="loading">
      <RouterProvider router={router} />
    </Suspense>
  </ChakraProvider>
);

export default App;
