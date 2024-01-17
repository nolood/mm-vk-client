import { type FC } from "react";
import { Card, CardBody, Flex } from "@chakra-ui/react";

interface Item {
  id: number;
  title: string;
}

const CardSelect: FC<{
  value?: number;
  onChange: (value: number) => void;
  options: Item[];
}> = ({ value, onChange, options }) => {
  return (
    <Flex gap={"20px"}>
      {options.map((item) => (
        <Card
          key={item.id}
          flex={1}
          bgColor={value === item.id ? "blue.500" : "gray.700"}
          _hover={{ bg: value !== item.id && "gray.600" }}
          _active={{ bg: value !== item.id && "gray.500" }}
          transition={"all 0.2s"}
          cursor={"pointer"}
          onClick={() => {
            onChange(item.id);
          }}
        >
          <CardBody py={"10px"}>
            <Flex justifyContent={"center"} userSelect={"none"}>
              {item.title}
            </Flex>
          </CardBody>
        </Card>
      ))}
    </Flex>
  );
};

export default CardSelect;
