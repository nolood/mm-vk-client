import { type ChangeEvent, type FC, useEffect, useRef } from "react";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { BillsModule } from "~/widgets/bills/model";
import useForm from "~/shared/lib/form-validate";

const CreateBillForm: FC<{
  onClose: () => void;
  isOpen: boolean;
}> = observer(({ onClose, isOpen }) => {
  const { bills, createBill, status } = BillsModule;

  const initialRef = useRef<HTMLInputElement | null>(null);

  const initialValues = {
    title: "Счёт #" + (bills.length + 1),
    balance: "2000.00",
  };

  const validationRules = {
    title: { required: true },
    balance: { required: true },
  };

  const onSubmit = async (): Promise<void> => {
    const result = await createBill(
      String(values.title),
      Number(values.balance),
    );
    if (result) {
      onClose();
    }
  };

  const { values, errors, handleChange, handleSubmit, setFormValues } = useForm(
    initialValues,
    validationRules,
    onSubmit,
  );

  const isLoading = status === "loading";

  useEffect(() => {
    setFormValues(initialValues);
  }, [bills]);

  return (
    <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Создание нового счета</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <ModalBody pb={6}>
            <FormControl isInvalid={!!errors.title}>
              <FormLabel>Название счета</FormLabel>
              <Input
                name={"title"}
                value={values.title}
                onChange={handleChange}
                ref={initialRef}
                maxLength={30}
                placeholder="Название"
              />
              <FormErrorMessage>{errors.title}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.balance} mt={4}>
              <FormLabel>Начальный баланс</FormLabel>
              <NumberInput
                onChange={(value) => {
                  handleChange({
                    target: { name: "balance", value },
                  } as ChangeEvent<HTMLInputElement>);
                }}
                value={values.balance}
                name={"balance"}
                precision={2}
                step={500}
                max={999_999_999_999}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <FormErrorMessage>{errors.balance}</FormErrorMessage>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              isLoading={isLoading}
              type={"submit"}
              colorScheme="blue"
              mr={3}
            >
              Создать
            </Button>
            <Button onClick={onClose}>Отмена</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
});

export default CreateBillForm;
