import { type FC, useEffect } from "react";
import {
  Flex,
  Icon,
  SimpleGrid,
  Skeleton,
  useDisclosure,
} from "@chakra-ui/react";
import Article from "~/entities/article/ui/article";
import { FaPlus } from "react-icons/fa";
import CreateArticleForm from "~/entities/article/ui/create-article-form";
import { ArticlesModule } from "~/entities";
import { observer } from "mobx-react-lite";

const ArticlesList: FC<{ onChange: (value: string) => void; value: string }> =
  observer(({ onChange, value }) => {
    const { isOpen, onClose, onOpen } = useDisclosure();

    const { articles, status, fetchArticles, totalUserArticles } =
      ArticlesModule;

    const isLoading = status === "loading";

    useEffect(() => {
      if (!articles.length) {
        fetchArticles();
      }
    }, []);

    return (
      <SimpleGrid
        columns={{ m300: 1, m500: 2, m768: 3 }}
        gap={2}
        justifyItems={"stretch"}
        w={"100%"}
      >
        {isLoading &&
          new Array(4)
            .fill(1)
            .map((_, index) => (
              <Skeleton
                key={index}
                w={"100%"}
                h={"95px"}
                borderRadius={"full"}
              />
            ))}
        {articles.map((item, index) => (
          <Article
            onClick={(value) => {
              onChange(String(value));
            }}
            selected={value === String(item.id)}
            index={index}
            key={item.id}
            item={item}
          />
        ))}
        {totalUserArticles < 5 && (
          <Flex
            onClick={onOpen}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"full"}
            bgColor={"gray.600"}
            _hover={{ bg: "gray.500" }}
            _active={{ bg: "gray.400" }}
            transition={"all 0.2s"}
            h={"80px"}
            cursor={"pointer"}
          >
            <Icon as={FaPlus} />
          </Flex>
        )}
        <CreateArticleForm isOpen={isOpen} onClose={onClose} />
      </SimpleGrid>
    );
  });

export default ArticlesList;
