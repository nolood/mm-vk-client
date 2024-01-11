import { type FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { RecordsModule } from "~/widgets";
import { Flex, Skeleton } from "@chakra-ui/react";
import { RecordCard } from "~/features";

const RecordsList: FC<{ billId?: number }> = observer(({ billId }) => {
  const { records, fetchRecords, status } = RecordsModule;

  const isLoading = status === "loading";

  useEffect(() => {
    if (billId) {
      fetchRecords(billId);
    }
  }, [billId]);

  return (
    <Flex flexDirection={"column"} gap={4}>
      {isLoading &&
        new Array(5)
          .fill(0)
          .map((_, index) => (
            <Skeleton width={"100%"} height={"50px"} key={index} />
          ))}
      {!isLoading &&
        records.map((item) => <RecordCard key={item.id} item={item} />)}
    </Flex>
  );
});

export default RecordsList;
