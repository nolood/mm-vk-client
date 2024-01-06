import { type FC, useEffect } from "react";
import {
  Box,
  Card,
  CardBody,
  Icon,
  SimpleGrid,
  Skeleton,
  useDisclosure,
} from "@chakra-ui/react";
import { BillCard, CreateBillForm } from "~/features";
import { FaPlus } from "react-icons/fa";
import { BillsModule } from "~/widgets/bills/model";
import { observer } from "mobx-react-lite";

const BillsList: FC = observer(() => {
  const { fetchBills, bills, status } = BillsModule;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isLoading = status === "loading";

  console.log("rerender");

  useEffect(() => {
    fetchBills();
  }, []);

  if (isLoading)
    return (
      <SimpleGrid py={4} columns={3} gap={6} justifyItems={"stretch"}>
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton borderRadius={"md"} h={"135"} key={index} />
        ))}
      </SimpleGrid>
    );

  return (
    <Box
      overflowY={"auto"}
      overflowX={"hidden"}
      maxH={"calc(100vh - 150px) !important"}
      pb={6}
    >
      <SimpleGrid columns={3} gap={6} justifyItems={"stretch"}>
        {bills.map((item, index) => (
          <BillCard key={item.id} {...item} index={index} />
        ))}
        <BillCard index={bills.length + 1}>
          <Card
            onClick={onOpen}
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
        <CreateBillForm onClose={onClose} isOpen={isOpen} />
      </SimpleGrid>
    </Box>
  );
});

export default BillsList;
