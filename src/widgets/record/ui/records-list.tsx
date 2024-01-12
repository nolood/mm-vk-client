import { type FC, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { RecordsModule } from "~/widgets";
import { Flex, Skeleton } from "@chakra-ui/react";
import { RecordCard } from "~/features";

const RecordsList: FC<{ billId?: number }> = observer(({ billId }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isMore, setIsMore] = useState<boolean>(true);
  const [fetching, setFetching] = useState<boolean>(true);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const { records, fetchRecords, status } = RecordsModule;

  const isLoading = status === "loading";

  const fetchItems = async (): Promise<void> => {
    const data = await fetchRecords(billId, currentPage, 20);
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
    setScrollPosition(e.target.documentElement.scrollTop);
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      500
    ) {
      setFetching(true);
    }
  };

  useEffect(() => {
    if (fetching && isMore && billId) {
      fetchItems()
        .then(() => {
          setCurrentPage((prev) => prev + 1);
        })
        .finally(() => {
          window.scrollTo(0, scrollPosition);
          setFetching(false);
        });
    }
  }, [fetching, billId]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler as () => void);

    return () => {
      document.removeEventListener("scroll", scrollHandler as () => void);
      // reset();
    };
  }, []);

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
