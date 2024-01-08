import { type FC } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormControl,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Textarea,
} from "@chakra-ui/react";
import { type ArticleType } from "~/entities/article/model/article";
import { ArticlesList } from "~/features";

const CreateRecordForm: FC<{
  isOpen: boolean;
  onClose: () => void;
  type: ArticleType;
}> = ({ isOpen, onClose, type }) => {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      placement={"bottom"}
      size={"full"}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>
          {"Добавление " + (type === "income" ? "дохода" : "расхода")}
          <DrawerCloseButton />
        </DrawerHeader>
        <DrawerBody>
          <form>
            <Flex flexDirection={"column"} gap={6}>
              <FormControl>
                <FormLabel>Сумма</FormLabel>
                <NumberInput
                  name={"amount"}
                  precision={2}
                  step={500}
                  max={999_999_999_999}
                >
                  <NumberInputField placeholder={"2000.00"} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <FormControl>
                <FormLabel>Описание</FormLabel>
                <Textarea name={"description"} placeholder={"Описание"} />
              </FormControl>
              <FormControl>
                <FormLabel>Категория</FormLabel>
                <ArticlesList />
              </FormControl>
            </Flex>
          </form>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default CreateRecordForm;
