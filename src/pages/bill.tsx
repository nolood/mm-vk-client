import { type FC, useEffect, useState } from "react";
import { PageAnim, ScrollPageLayout } from "~/shared/ui";
import { Flex, useDisclosure } from "@chakra-ui/react";
import { BillBalance, BillHeader, BillStat, RecordsList } from "~/widgets";
import { observer } from "mobx-react-lite";
import { BillModule } from "~/widgets/bills/model";
import { useParams } from "react-router-dom";
import { CreateRecordForm } from "~/features";
import type { ArticleType } from "~/entities/article/model/article";

const Bill: FC = observer(() => {
  const params = useParams();
  const { fetchBill, bill } = BillModule;
  const [type, setType] = useState<ArticleType>("income");
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (typeof params.id === "string") {
      fetchBill(+params.id);
    }
  }, []);

  return (
    <ScrollPageLayout>
      <PageAnim>
        <Flex flexDirection={"column"} gap={4}>
          <BillHeader />
          <BillBalance />
          <BillStat setType={setType} onOpen={onOpen} />
          <RecordsList billId={bill?.id} />
          <CreateRecordForm
            billId={bill?.id}
            isOpen={isOpen}
            onClose={onClose}
            type={type}
          />
        </Flex>
      </PageAnim>
    </ScrollPageLayout>
  );
});

export default Bill;
