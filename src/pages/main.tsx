import { type FC } from "react";
import { BillsList, MainHeader } from "~/widgets";
import { PageAnim } from "~/shared/ui";

const Main: FC = () => {
  return (
    <PageAnim>
      <MainHeader />
      <BillsList />
    </PageAnim>
  );
};

export default Main;
