import { type ChangeEvent, type FC, useEffect } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Textarea,
} from "@chakra-ui/react";
import { type ArticleType } from "~/entities/article/model/article";
import { ArticlesList, RecordDatePicker } from "~/features";
import useForm from "~/shared/lib/form-validate";
import { DateTime } from "luxon";
import { RecordsModule } from "~/widgets";
import { observer } from "mobx-react-lite";

const CreateRecordForm: FC<{
  isOpen: boolean;
  onClose: () => void;
  type: ArticleType;
  billId?: number;
}> = observer(({ isOpen, onClose, type, billId }) => {
  const { createRecord } = RecordsModule;
  const onSubmit = async (): Promise<void> => {
    const result = await createRecord({
      amount: +values.amount,
      date: values.date,
      description: values.description,
      article_id: +values.article,
      type_id: type === "income" ? 1 : 2,
      bill_id: billId,
    });

    if (result) {
      onClose();
    }
  };

  const initialValues = {
    amount: "100",
    date: DateTime.now().toISODate(),
    description: "",
    article: "",
  };

  const validationRules = {
    amount: { required: true, min: 1 },
    date: { required: true },
    description: { required: true },
    article: { required: true },
  };

  const { values, errors, handleChange, handleSubmit, setFormValues } = useForm(
    initialValues,
    validationRules,
    onSubmit,
  );

  useEffect(() => {
    setFormValues(initialValues);
  }, [isOpen]);

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
          <form onSubmit={handleSubmit}>
            <Flex flexDirection={"column"} gap={6}>
              <FormControl isInvalid={!!errors.amount}>
                <FormLabel>Сумма</FormLabel>
                <NumberInput
                  onChange={(value) => {
                    handleChange({
                      target: { name: "amount", value },
                    } as ChangeEvent<HTMLInputElement>);
                  }}
                  value={values.amount}
                  name={"amount"}
                  precision={0}
                  step={500}
                  min={1}
                  max={999_999_999_999}
                >
                  <NumberInputField placeholder={"2000.00"} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <FormErrorMessage>{errors.amount}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.description}>
                <FormLabel>Описание</FormLabel>
                <Textarea
                  onChange={(e) => {
                    handleChange({
                      target: { name: "description", value: e.target.value },
                    } as ChangeEvent<HTMLInputElement>);
                  }}
                  value={values.description}
                  name={"description"}
                  placeholder={"Описание"}
                />
                <FormErrorMessage>{errors.description}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.date}>
                <FormLabel>Дата</FormLabel>
                <RecordDatePicker
                  value={values.date}
                  onChange={(date) => {
                    handleChange({
                      target: { name: "date", value: date },
                    } as ChangeEvent<HTMLInputElement>);
                  }}
                />
                <FormErrorMessage>{errors.date}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.article}>
                <FormLabel>Категория</FormLabel>
                <ArticlesList
                  onChange={(value) => {
                    handleChange({
                      target: { name: "article", value },
                    } as ChangeEvent<HTMLInputElement>);
                  }}
                  value={values.article}
                />
                <FormErrorMessage>{errors.article}</FormErrorMessage>
              </FormControl>
              <FormControl display={"flex"} justifyContent={"flex-end"}>
                <Button colorScheme={"blue"} mr={3} type={"submit"}>
                  Создать
                </Button>
                <Button>Отмена</Button>
              </FormControl>
            </Flex>
          </form>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
});

export default CreateRecordForm;
