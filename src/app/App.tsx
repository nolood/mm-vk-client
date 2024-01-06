import { Suspense, type FC } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "~/shared/router/router";
import { ChakraUiProvider } from "./providers";
import { Loader } from "~/shared/ui";
import { observer } from "mobx-react-lite";

const App: FC = observer(() => {
  return (
    <ChakraUiProvider>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </ChakraUiProvider>
  );
});

export default App;
