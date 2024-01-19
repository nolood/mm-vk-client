import { type FC } from "react";
import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Icon,
  Skeleton,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { CurrencyFormatter } from "~/shared/ui";
import { BillModule } from "~/widgets/bills/model";
import { observer } from "mobx-react-lite";
import { type ArticleType } from "~/shared/api/services/articles";

const BillStat: FC<{
  setType: (type: ArticleType) => void;
  onOpen: () => void;
}> = observer(({ setType, onOpen }) => {
  const { bill, status } = BillModule;

  const handleAddRecord = (type: ArticleType): void => {
    setType(type);
    onOpen();
  };

  const isLoading = status === "loading" || !bill;

  if (isLoading) return <Skeleton height={"168px"} width={"100%"} />;

  return (
    <Card>
      <Stack
        direction={{ m300: "column", m500: "row" }}
        divider={<StackDivider />}
      >
        <Flex flex={"1"} flexDirection={"column"} alignItems={"center"}>
          <CardBody
            display={"flex"}
            flexDirection={"column"}
            gap={2}
            alignItems={"center"}
          >
            <Heading size={"md"}>Доход</Heading>
            <Text fontSize={"xl"} color={"green.300"} fontWeight={"bold"}>
              <CurrencyFormatter balance={bill.total_income} />
            </Text>
            <Button
              onClick={() => {
                handleAddRecord("income");
              }}
              leftIcon={<Icon as={FaPlus} />}
            >
              Добавить
            </Button>
          </CardBody>
        </Flex>
        <Flex flex={"1"} flexDirection={"column"} alignItems={"center"}>
          <CardBody
            display={"flex"}
            flexDirection={"column"}
            gap={2}
            alignItems={"center"}
          >
            <Heading size={"md"}>Расход</Heading>
            <Text fontSize={"xl"} color={"red.300"} fontWeight={"bold"}>
              <CurrencyFormatter balance={bill.total_expense} />
            </Text>
            <Button
              onClick={() => {
                handleAddRecord("expense");
              }}
              leftIcon={<Icon as={FaPlus} />}
            >
              Добавить
            </Button>
          </CardBody>
        </Flex>
      </Stack>
    </Card>
  );
});

export default BillStat;
