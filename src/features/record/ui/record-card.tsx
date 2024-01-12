import { type FC } from "react";
import { type IRecord } from "~/widgets/record/model/records";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { ArticleItem } from "~/entities";
import { CurrencyFormatter } from "~/shared/ui";
import { DateTime } from "luxon";

const RecordCard: FC<{ item: IRecord }> = ({ item }) => {
  return (
    <Card flexDirection={"row"}>
      <CardHeader w={"200px"}>
        <ArticleItem disabled item={item.article} index={0} />
      </CardHeader>
      <CardBody>
        <SimpleGrid columns={3}>
          <Flex flexDirection={"column"} gap={"0.5rem"}>
            <Text>Дата:</Text>
            <Text>{DateTime.fromISO(item.date).toFormat("dd.MM.yyyy")}</Text>
          </Flex>
          <Flex flexDirection={"column"} gap={"0.5rem"}>
            <Text>Сумма:</Text>
            <Text
              fontWeight={"bold"}
              color={item.type.value === "income" ? "green.500" : "red.500"}
            >
              {item.type.value === "income" ? "+" : "-"}
              <CurrencyFormatter balance={item.amount} />
            </Text>
          </Flex>
          {item.description && (
            <Flex flexDirection={"column"} gap={"0.5rem"}>
              <Text>Описание:</Text>
              <Text
                whiteSpace={"nowrap"}
                overflow={"hidden"}
                textOverflow={"ellipsis"}
              >
                {item.description}
              </Text>
            </Flex>
          )}
        </SimpleGrid>
      </CardBody>
      <CardFooter display={"flex"} alignItems={"center"}>
        <Button colorScheme={"blue"}>Подробнее</Button>
      </CardFooter>
    </Card>
  );
};

export default RecordCard;
