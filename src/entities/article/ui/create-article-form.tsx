import { type ChangeEvent, type FC, useRef } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
} from "@chakra-ui/react";
import { AvailableColors } from "~/shared/lib/available-colors";
import { ArticleIcons } from "~/shared/ui";
import { ArticlesModule } from "~/entities";
import useForm, { type FormValues } from "~/shared/lib/form-validate";

const CreateArticleForm: FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const initialRef = useRef<HTMLInputElement | null>(null);

  const { createArticle, status } = ArticlesModule;

  const onSubmit = async (): Promise<void> => {
    const result = await createArticle(values);
    if (result) {
      onClose();
    }
  };

  const initialValues: FormValues = {
    title: "",
    color: "",
    icon: "",
  };

  const validationRules = {
    title: { required: true },
    color: { required: true },
    icon: { required: true },
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    initialValues,
    validationRules,
    onSubmit,
  );

  const isLoading = status === "loading";

  return (
    <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent mt={4}>
        <ModalHeader>Создание категории</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <ModalBody display={"flex"} flexDirection={"column"} gap={6}>
            <FormControl isInvalid={!!errors.title}>
              <FormLabel>Название</FormLabel>
              <Input
                value={values.title}
                onChange={handleChange}
                ref={initialRef}
                name={"title"}
                maxLength={20}
                placeholder="Название"
              />
              <FormErrorMessage>{errors.title}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.color}>
              <FormLabel>Выберите цвет</FormLabel>
              <SimpleGrid columns={12}>
                {AvailableColors.map((color) => (
                  <Box
                    onClick={() => {
                      handleChange({
                        target: { name: "color", value: color },
                      } as ChangeEvent<HTMLInputElement>);
                    }}
                    _hover={{ outlineColor: color }}
                    key={color}
                    bgColor={color}
                    w={6}
                    h={6}
                    borderRadius={"full"}
                    outline={"solid 2px white"}
                    transition={"all 0.2s"}
                    cursor={"pointer"}
                  />
                ))}
              </SimpleGrid>
              <FormErrorMessage>{errors.title}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.icon}>
              <FormLabel>Выберите иконку</FormLabel>
              <SimpleGrid columns={6} gap={1}>
                {Object.entries(ArticleIcons).map(([key, value]) => (
                  <IconButton
                    bgColor={
                      values.icon === key && values.color
                        ? values.color.split(".")[0] + ".300"
                        : values.color
                    }
                    _hover={{
                      bgColor:
                        values.color && values.color.split(".")[0] + ".400",
                    }}
                    onClick={() => {
                      handleChange({
                        target: { name: "icon", value: key },
                      } as ChangeEvent<HTMLInputElement>);
                    }}
                    w={"100%"}
                    h={12}
                    aria-label={"Иконка"}
                    key={key}
                    icon={<Icon as={value} w={8} h={8} />}
                  />
                ))}
              </SimpleGrid>
              <FormErrorMessage>{errors.title}</FormErrorMessage>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              isLoading={isLoading}
              colorScheme={"blue"}
              type={"submit"}
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
};

export default CreateArticleForm;
