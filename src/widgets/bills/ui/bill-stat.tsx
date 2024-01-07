import { type FC, useState } from "react";
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
  useDisclosure,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { CurrencyFormatter } from "~/shared/ui";
import { CreateRecordForm } from "~/features";
import { type ArticleType } from "~/features/record/model/record";

const BillStat: FC = () => {
  const [type, setType] = useState<ArticleType>("income");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAddRecord = (type: ArticleType): void => {
    setType(type);
    onOpen();
  };

  return (
    <Card>
      <CreateRecordForm isOpen={isOpen} onClose={onClose} type={type} />
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
