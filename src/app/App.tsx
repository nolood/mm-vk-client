import { Suspense, type FC } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "~/shared/router/router";
import { AppBarProvider, ChakraUiProvider } from "./providers";
import { Loader } from "~/shared/ui";

const App: FC = () => {
  return (
    <ChakraUiProvider>
      <AppBarProvider>
        <Suspense fallback={<Loader />}>
          <RouterProvider router={router} />
        </Suspense>
      </AppBarProvider>
    </ChakraUiProvider>
  );
};

export default App;
