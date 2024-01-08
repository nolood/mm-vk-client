import { type FC } from "react";
import { Flex, Icon, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import Article from "~/entities/article/ui/article";
import { FaPlus } from "react-icons/fa";
import CreateArticleForm from "~/entities/article/ui/create-article-form";

const ArticlesList: FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const list = [
    {
      id: 1,
      title: "Дом",
      color: "green.500",
      icon: "home",
    },
    {
      id: 2,
      title: "Кафе",
      color: "red.500",
      icon: "cafe",
    },
    {
      id: 3,
      title: "Здоровье",
      color: "blue.500",
      icon: "medicine",
    },
    {
      id: 4,
      title: "Транспорт",
      color: "purple.500",
      icon: "transport",
    },
  ];
  return (
    <SimpleGrid columns={5} gap={2} justifyItems={"stretch"} w={"100%"}>
      {list.map((item) => (
        <Article key={item.id} item={item} />
      ))}
      <Flex
        onClick={onOpen}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={"full"}
        bgColor={"gray.600"}
        _hover={{ bg: "gray.500" }}
        _active={{ bg: "gray.400" }}
        transition={"all 0.2s"}
        h={"100%"}
        cursor={"pointer"}
      >
        <Icon as={FaPlus} />
      </Flex>
      <CreateArticleForm isOpen={isOpen} onClose={onClose} />
    </SimpleGrid>
  );
};

export default ArticlesList;
