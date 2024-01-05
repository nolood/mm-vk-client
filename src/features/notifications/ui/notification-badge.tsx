import { type FC } from "react";
import { IoNotifications } from "react-icons/io5";
import { Icon, IconButton } from "@chakra-ui/react";

const NotificationBadge: FC = () => {
  return (
    <IconButton
      aria-label="Уведомления"
      icon={<Icon as={IoNotifications} />}
      color={"gray.500"}
    />
  );
};

export default NotificationBadge;
