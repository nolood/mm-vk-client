import { Suspense, type FC } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "~/shared/router/router";
import { ChakraUiProvider } from "./providers";

const App: FC = () => {
  return (
    <ChakraUiProvider>
      <Suspense fallback="loading">
        <RouterProvider router={router} />
      </Suspense>
    </ChakraUiProvider>
  );
};

export default App;
