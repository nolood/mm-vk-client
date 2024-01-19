import { type FC, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { RecordsModule } from "~/widgets";
import { Flex, Skeleton, useDisclosure } from "@chakra-ui/react";
import { RecordCard } from "~/features";
import { BillModule } from "~/widgets/bills/model";
import { RecordInfo } from "~/entities";
import { type IRecord } from "~/shared/api/services/records";

const RecordsList: FC<{ billId?: number }> = observer(({ billId }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isMore, setIsMore] = useState<boolean>(true);
  const [fetching, setFetching] = useState<boolean>(true);
  const [activeRecord, setActiveRecord] = useState<IRecord | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { records, fetchRecords, status, reset: recordsReset } = RecordsModule;
  const { reset: billReset } = BillModule;

  const isLoading = status === "loading";

  const handleReset = (): void => {
    recordsReset();
    billReset();
    setCurrentPage(1);
    setIsMore(true);
    setFetching(false);
  };

  const fetchItems = async (): Promise<void> => {
    const data = await fetchRecords(currentPage, 20, billId);
    setIsMore(() => !!data.length);
  };

  const scrollHandler = (e: {
    target: {
      documentElement: {
        scrollTop: number;
        scrollHeight: number;
      };
    };
  }): void => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      600
    ) {
      setFetching(true);
    }
  };

  const handleOpenInfo = (record: IRecord): void => {
    onOpen();
    setActiveRecord(record);
  };

  useEffect(() => {
    if (fetching && isMore && billId) {
      fetchItems()
        .then(() => {
          setCurrentPage((prev) => prev + 1);
        })
        .finally(() => {
          setFetching(false);
        });
    }
  }, [fetching, billId]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler as () => void);

    return () => {
      document.removeEventListener("scroll", scrollHandler as () => void);
      handleReset();
    };
  }, []);

  return (
    <Flex flexDirection={"column"} gap={4}>
      <RecordInfo isOpen={isOpen} onClose={onClose} item={activeRecord} />
      {isLoading &&
        new Array(5)
          .fill(0)
          .map((_, index) => (
            <Skeleton width={"100%"} height={"50px"} key={index} />
          ))}
      {!isLoading &&
        records.map((item) => (
          <RecordCard open={handleOpenInfo} key={item.id} item={item} />
        ))}
    </Flex>
  );
});

export default RecordsList;
