import { type FC } from "react";
import {
  Box,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { type IRecord } from "~/shared/api/services/records";
import { ArticleItem } from "~/entities";
import { dateFormat } from "~/shared/lib/date-format";
import { CurrencyFormatter } from "~/shared/ui";

const RecordInfo: FC<{
  onClose: () => void;
  isOpen: boolean;
  item: IRecord | null;
}> = ({ onClose, isOpen, item }) => {
  if (!item) return null;

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <ArticleItem disabled item={item.article} index={0} />
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDirection={"column"} gap={"0.5rem"}>
            <Box>
              <Text>Дата:</Text>
              <Text>{dateFormat({ date: item.date })}</Text>
            </Box>
            <Box>
              <Text>Сумма:</Text>
              <Text
                fontWeight={"bold"}
                color={item.type.value === "income" ? "green.500" : "red.500"}
              >
                {item.type.value === "income" ? "+" : "-"}
                <CurrencyFormatter balance={item.amount} />
              </Text>
            </Box>
            {item.description && (
              <Box>
                <Text>Описание:</Text>
                <Text>{item.description}</Text>
              </Box>
            )}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default RecordInfo;
