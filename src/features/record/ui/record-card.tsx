import { type FC } from "react";
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
import { type IRecord } from "~/shared/api/services/records";

const RecordCard: FC<{ item: IRecord }> = ({ item }) => {
  return (
    <Card
      flexDirection={{ m300: "column", m768: "row" }}
      alignItems={{ m300: "center" }}
    >
      <CardHeader w={{ m300: "100%", m768: "180px" }}>
        <ArticleItem disabled item={item.article} index={0} />
      </CardHeader>
      <CardBody>
        <SimpleGrid columns={{ m500: 2, m768: 3 }} gap={{ m300: "1rem" }}>
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
