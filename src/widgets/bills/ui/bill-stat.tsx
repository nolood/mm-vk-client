import { type FC } from "react";
import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Icon,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { CurrencyFormatter } from "~/shared/ui";
import { type ArticleType } from "~/entities/article/model/article";

const BillStat: FC<{
  setType: (type: ArticleType) => void;
  onOpen: () => void;
}> = ({ setType, onOpen }) => {
  const handleAddRecord = (type: ArticleType): void => {
    setType(type);
    onOpen();
  };

  return (
    <Card>
      <Stack direction={"row"} divider={<StackDivider />}>
        <Flex flex={"1"} flexDirection={"column"} alignItems={"center"}>
          <CardBody
            display={"flex"}
            flexDirection={"column"}
            gap={2}
            alignItems={"center"}
          >
            <Heading size={"md"}>Доход</Heading>
            <Text fontSize={"xl"} color={"green.300"} fontWeight={"bold"}>
              <CurrencyFormatter balance={1000} />
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
              <CurrencyFormatter balance={1000} />
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
};

export default BillStat;
