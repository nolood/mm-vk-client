import { type FC } from "react";
import { Card, CardBody, Icon, SimpleGrid } from "@chakra-ui/react";
import { BillCard } from "~/features";
import { FaPlus } from "react-icons/fa";

const BillsList: FC = () => {
  const bills = [
    {
      id: 1,
      title: "Счёт #1",
      balance: 100,
    },
    {
      id: 2,
      title: "Счёт #2",
      balance: 1000,
    },
    {
      id: 3,
      title: "Счёт #3",
      balance: 10000,
    },
    {
      id: 4,
      title: "Счёт #4",
      balance: 100000,
    },
  ];
  return (
    <SimpleGrid py={4} columns={3} gap={6} justifyItems={"stretch"}>
      {bills.map((item, index) => (
        <BillCard key={item.id} {...item} index={index} />
      ))}
      <BillCard index={bills.length + 1}>
        <Card
          _hover={{ bg: "gray.600" }}
          _active={{ bg: "gray.500" }}
          transition={"all 0.2s"}
          h={"100%"}
          cursor={"pointer"}
        >
          <CardBody
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
          >
            <Icon as={FaPlus} w={5} h={5} />
          </CardBody>
        </Card>
      </BillCard>
    </SimpleGrid>
  );
};

export default BillsList;
