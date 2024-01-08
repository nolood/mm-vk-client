import { type FC } from "react";
import { Flex, Icon } from "@chakra-ui/react";
import { type IArticle } from "~/entities/article/model/article";
import { ArticleIcons } from "~/shared/ui";

const Article: FC<{ item: IArticle }> = ({ item }) => {
  return (
    <Flex
      key={item.id}
      _hover={{ bgColor: item.color.split(".")[0] + ".400" }}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      bgColor={item.color}
      borderRadius={"full"}
      cursor={"pointer"}
      transition={"all 0.2s"}
      w={"100%"}
      h={"95px"}
    >
      <Icon as={ArticleIcons[item.icon]} w={8} h={8} />
      {item.title}
    </Flex>
  );
};

export default Article;
