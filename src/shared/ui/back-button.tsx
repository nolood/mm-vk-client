import { type FC } from "react";
import { Icon, IconButton } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { router } from "~/shared/router/router";

const BackButton: FC = () => {
  return (
    <IconButton
      onClick={async () => {
        await router.navigate(-1);
      }}
      aria-label="Назад"
      icon={<Icon as={FaArrowLeft} />}
      color={"gray.500"}
    />
  );
};

export default BackButton;
